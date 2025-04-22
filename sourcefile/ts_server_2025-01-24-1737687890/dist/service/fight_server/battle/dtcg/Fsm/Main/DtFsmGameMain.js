"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmBaseMachine_1 = require("../Base/DtFsmBaseMachine");
const DtFsmGameMain_Init_1 = require("./States/DtFsmGameMain_Init");
const DtFsmGameMain_PahseActive_1 = require("./States/DtFsmGameMain_PahseActive");
const DtFsmGameMain_PahseRoundStart_1 = require("./States/DtFsmGameMain_PahseRoundStart");
const DtFsmGameMain_PhaseDrawCard_1 = require("./States/DtFsmGameMain_PhaseDrawCard");
const DtFsmGameMain_PhaseFoster_1 = require("./States/DtFsmGameMain_PhaseFoster");
const DtFsmGameMain_PhaseMain_1 = require("./States/DtFsmGameMain_PhaseMain");
const DtFsmGameMain_PhaseOver_1 = require("./States/DtFsmGameMain_PhaseOver");
const DtFsmGameMain_StartBattle_1 = require("./States/DtFsmGameMain_StartBattle");
class DtFsmGameMain extends DtFsmBaseMachine_1.DtFsmBaseMachine {
    playerList;
    needCheckPlayerTurnOver = false;
    curRound = 0;
    curTrunPlayerId;
    curCost = 0;
    refereePlayer;
    gameInitPlaybackData;
    constructor(manager) {
        super(manager);
        this.playerList = new Array();
    }
    InitAddStates() {
        this.AddState(DtFsmGameMain_Init_1.DtFsmGameMain_Init);
        this.AddState(DtFsmGameMain_StartBattle_1.DtFsmGameMain_StartBattle);
        this.AddState(DtFsmGameMain_PahseRoundStart_1.DtFsmGameMain_PahseRoundStart);
        this.AddState(DtFsmGameMain_PahseActive_1.DtFsmGameMain_PahseActive);
        this.AddState(DtFsmGameMain_PhaseDrawCard_1.DtFsmGameMain_PhaseDrawCard);
        this.AddState(DtFsmGameMain_PhaseFoster_1.DtFsmGameMain_PhaseFoster);
        this.AddState(DtFsmGameMain_PhaseMain_1.DtFsmGameMain_PhaseMain);
        this.AddState(DtFsmGameMain_PhaseOver_1.DtFsmGameMain_PhaseOver);
        this.SetInitState(DtFsmGameMain_Init_1.DtFsmGameMain_Init.name);
    }
    GetCurrentPhasePlayer() {
        return this.GetPlayer(this.curTrunPlayerId);
    }
    GetOppPhasePlayer() {
        return this.GetOppPlayer(this.curTrunPlayerId);
    }
    GetPlayer(uId) {
        for (let i = 0; i < this.playerList.length; i++) {
            if (uId.equals(this.playerList[i].playerId)) {
                return this.playerList[i];
            }
        }
        return this.playerList[0];
    }
    GetOppPlayer(uId) {
        for (let i = 0; i < this.playerList.length; i++) {
            if (uId.equals(this.playerList[i].playerId) == false) {
                return this.playerList[i];
            }
        }
        return null;
    }
    GetGameCurrentPhase() {
        return this.GetCurrentState().GetPhase();
    }
    SetNextState() {
        this.GetCurrentState().SetNextState();
    }
    CheckPlayerCanHatch(playerId) {
        if (this.manager.CurPlayerID.equals(playerId) && this.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.FosterPhase) {
            return true;
        }
        return false;
    }
    CheckPlayerCanPlayCard(playerId) {
        if (this.manager.CurPlayerID.equals(playerId)) {
            if (this.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.FosterPhase || this.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.MainPhase) {
                return true;
            }
        }
        return false;
    }
    CheckPlayerCanAttack(playerId) {
        if (this.manager.CurPlayerID.equals(playerId)) {
            if (this.GetGameCurrentPhase() == DtEnum_1.DtBattlePhase.MainPhase) {
                return true;
            }
        }
        return false;
    }
    SetCost(cost, needCheckTurnover) {
        this.curCost = cost;
        if (needCheckTurnover) {
            this.needCheckPlayerTurnOver = needCheckTurnover;
        }
    }
    UseCost(cost) {
        this.curCost -= cost;
        if (this.curCost < 0) {
            this.needCheckPlayerTurnOver = true;
        }
        if (this.curCost > 10) {
            this.curCost = 10;
        }
        if (this.curCost < -10) {
            this.curCost = -10;
        }
    }
    Clear() {
        super.Clear();
        if (this.playerList != null) {
            for (let i = 0; i < this.playerList.length; i++) {
                this.playerList[i].Clear();
            }
            this.playerList = null;
        }
        if (this.refereePlayer != null) {
            this.refereePlayer.Clear();
            this.refereePlayer = null;
        }
    }
    ShowLog() {
        _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtFsmAttack] log cuurent state is {0}", this.GetCurrentState().stateName));
    }
}
exports.DtFsmGameMain = DtFsmGameMain;
//# sourceMappingURL=DtFsmGameMain.js.map