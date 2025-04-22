"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtPlayerRoundData = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../Data/DtEnum");
class DtPlayerRoundData {
    player;
    player_round_evo_count = 0;
    player_round_attack_cout = 0;
    playerLog;
    globalCard;
    startElapsedTime = -1;
    TimeoutResidue;
    startChangeCardState = -1;
    clientGameEvent = 0;
    startCardId;
    replayTimeOut;
    constructor(player) {
        this.player_round_evo_count = 0;
        this.player_round_attack_cout = 0;
        this.startChangeCardState = -1;
        this.player = player;
        this.playerLog = new protoMsg_1.DcgProto.S_BattlePlayerTask();
        this.playerLog.PlayerIID = player.playerId;
    }
    PlayerRoundStart() {
        this.player_round_evo_count = 0;
        this.player_round_attack_cout = 0;
    }
    AddPlayerEvoCount() {
        this.player_round_evo_count++;
    }
    GetPlayerRoundvoCount() {
        return this.player_round_evo_count;
    }
    AddPlayerAttack() {
        this.player_round_attack_cout++;
    }
    GetPlayerAttack() {
        return this.player_round_attack_cout;
    }
    HasBuff(buff) {
        return this.player.manager.globalBuffMgr.CheckPlayerBuff(this.player, buff);
    }
    GetCurrentBuffs() {
        return this.player.manager.globalBuffMgr.GetPlayerBuff(this.player);
    }
    AddLogCount(type) {
        switch (type) {
            case DtEnum_1.DtPlayerLogType.Attack:
                this.playerLog.AttackCount++;
                break;
            case DtEnum_1.DtPlayerLogType.AttackDefense:
                this.playerLog.AttackDefenseCount++;
                break;
            case DtEnum_1.DtPlayerLogType.Block:
                this.playerLog.BlockOppAttackCount++;
                break;
            case DtEnum_1.DtPlayerLogType.DestroyDigimon:
                this.playerLog.KillMonsterNum++;
                break;
            case DtEnum_1.DtPlayerLogType.DrawCard:
                this.playerLog.DrawCardNum++;
                break;
        }
    }
    GetRemainingTime() {
        return Math.floor(this.TimeoutResidue / 1000);
    }
}
exports.DtPlayerRoundData = DtPlayerRoundData;
//# sourceMappingURL=DtPlayerRoundData.js.map