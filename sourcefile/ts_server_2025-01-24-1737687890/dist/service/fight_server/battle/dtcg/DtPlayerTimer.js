"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtPlayerTimer = void 0;
const Long_1 = require("../../cmn/proto/Long");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtEnum_1 = require("./Data/DtEnum");
const DtMessageData_1 = require("./Message/DtMessageData");
class DtPlayerTimer {
    manager;
    outtime;
    isRunning = false;
    currentElapsedTimePlayerId;
    isInAutoSkip = false;
    GameEndTime = 0;
    replayTimeOut = false;
    isPause = false;
    pauseMaxTime = 20;
    constructor(manager) {
        this.manager = manager;
        this.isRunning = false;
        this.currentElapsedTimePlayerId = null;
        this.isInAutoSkip = false;
        this.GameEndTime = this.GetCurrentServerTime() + (5400 * 1000);
    }
    IsRunning() {
        return this.isRunning;
    }
    GetCurrentServerTime() {
        return _Dcg_1.roomMgr.GetServerTimeNumber();
    }
    SetGameTimeOut(sec) {
        this.replayTimeOut = false;
        this.outtime = this.GetCurrentServerTime() + (sec * 1000);
        this.isRunning = true;
    }
    SetPlayerTimeoutResidue(player, sec) {
        this.replayTimeOut = false;
        player.roundData.replayTimeOut = false;
        player.roundData.TimeoutResidue = sec * 1000;
    }
    StartPlayerRoundTimeOut(player) {
        if (this.currentElapsedTimePlayerId != null) {
            let player = this.manager.GetPlayer(this.currentElapsedTimePlayerId);
            if (player.roundData.startElapsedTime != -1) {
                let hasElapsed = this.GetCurrentServerTime() - player.roundData.startElapsedTime;
                player.roundData.TimeoutResidue = player.roundData.TimeoutResidue - hasElapsed;
                player.roundData.startElapsedTime = -1;
            }
        }
        this.currentElapsedTimePlayerId = player.playerId;
        this.isRunning = true;
        this.isPause = true;
        this.outtime = this.GetCurrentServerTime() + (this.pauseMaxTime * 1000);
    }
    PlayerAnimationPlayOver(player) {
        if (this.currentElapsedTimePlayerId == null || this.IsRunning() == false) {
            return;
        }
        if (player == null) {
            player = this.manager.GetPlayer(this.currentElapsedTimePlayerId);
        }
        if (player.playerId.equals(this.currentElapsedTimePlayerId)) {
            this.isPause = false;
            player.roundData.startElapsedTime = this.GetCurrentServerTime();
            this.outtime = this.GetCurrentServerTime() + player.roundData.TimeoutResidue;
            let toClientTime = Math.ceil(this.GetCurrnetOutTime() / 1000);
            this.manager.Get2ClientMessageMgr().ClientShow(null, DtMessageData_1.ClientShowType.PlayerTimeFlow, [Long_1.Long.fromNumber(toClientTime)], null);
        }
    }
    GetCurrnetOutTime() {
        if (this.outtime <= this.GameEndTime) {
            return this.outtime;
        }
        return this.GameEndTime;
    }
    IsTimeOut() {
        if (this.manager.RoomTypeIs(DtMessageData_1.DtRoomType.IsReplay)) {
            if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.Init || this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.StartBattle) {
                return this.replayTimeOut;
            }
            let currentPlayer = this.manager.GetCurrentWaitPlayer();
            return this.replayTimeOut && currentPlayer.roundData.replayTimeOut;
        }
        return this.GetCurrentServerTime() - this.outtime >= 0;
    }
    IsGameEnd() {
        return this.GetCurrentServerTime() - this.GameEndTime >= 0;
    }
    IsPause() {
        return this.isPause;
    }
    ResetCurrentPlayer() {
        this.currentElapsedTimePlayerId = null;
    }
    IsElapsedPlayerId(playerId) {
        if (this.currentElapsedTimePlayerId) {
            return this.currentElapsedTimePlayerId.equals(playerId);
        }
        return false;
    }
    GMResetCurrentTime(sec) {
        if (this.currentElapsedTimePlayerId != null) {
            let player = this.manager.GetPlayer(this.currentElapsedTimePlayerId);
            player.roundData.TimeoutResidue = sec * 1000;
            this.PlayerAnimationPlayOver(player);
        }
    }
}
exports.DtPlayerTimer = DtPlayerTimer;
//# sourceMappingURL=DtPlayerTimer.js.map