"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardChangeBattleState = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardChangeBattleState extends DtConBase_1.DtConBase {
    round;
    playType;
    playPlayer;
    toState;
    phase;
    cardCon;
    reason;
    constructor(round, playCardType, playCardPlayer, toState) {
        super();
        this.round = round;
        this.playType = playCardType;
        this.playPlayer = playCardPlayer;
        this.toState = toState;
        this.phase = DtEnum_1.DtBattlePhase.None;
        this.reason = DtMessageData_1.DtProtoEnum_MoveReason.None;
    }
    SetReason(reason) {
        this.reason = reason;
    }
    SetPhase(phase) {
        this.phase = phase;
    }
    SetCardCon(type, c, o) {
        this.cardCon = new DtConCard_1.DtConCard(type, c, o);
        return this.cardCon;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        if (this.reason != DtMessageData_1.DtProtoEnum_MoveReason.None) {
            if (this.reason != msg.reason) {
                return false;
            }
        }
        if (this.phase != DtEnum_1.DtBattlePhase.None) {
            if (this.phase != effect.parent.GetPlayer().manager.GetCurrentPahse()) {
                return false;
            }
        }
        if (this.playType != DtEnum_1.DtCardType.None) {
            if (msg.card.CardTypeIs(this.playType) == false) {
                return false;
            }
        }
        if (this.playPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
            if (msg.card.GetPlayer() != effect.parent.GetPlayer()) {
                return false;
            }
        }
        else if (this.playPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
            if (msg.card.GetPlayer() == effect.parent.GetPlayer()) {
                return false;
            }
        }
        if (this.toState != msg.toState) {
            return false;
        }
        if (this.cardCon) {
            if (this.cardCon.CheckCondition(effect.parent.GetPlayer(), msg.card) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerCardChangeBattleState = DtConTriggerCardChangeBattleState;
//# sourceMappingURL=DtConTriggerCardChangeBattleState.js.map