"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardMove = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtConBase_1 = require("./DtConBase");
class DtConTriggerCardMove extends DtConBase_1.DtConBase {
    round;
    casterPlayer;
    targerPlayer;
    from;
    to;
    reason;
    func;
    funcObj;
    constructor(round, casterPlayer, targerPlayer) {
        super();
        this.round = round;
        this.casterPlayer = casterPlayer;
        this.targerPlayer = targerPlayer;
        this.from = DtEnum_1.DtAreaType.None;
        this.to = DtEnum_1.DtAreaType.None;
        this.reason = DtMessageData_1.DtProtoEnum_MoveReason.None;
    }
    SetBeDiscardFromHand() {
        this.from = DtEnum_1.DtAreaType.HAND;
        this.to = DtEnum_1.DtAreaType.GY;
        this.reason = DtMessageData_1.DtProtoEnum_MoveReason.Discard;
        return this;
    }
    SetBeDiscardFromDeck() {
        this.from = DtEnum_1.DtAreaType.DECK;
        this.to = DtEnum_1.DtAreaType.GY;
        this.reason = DtMessageData_1.DtProtoEnum_MoveReason.Discard;
        return this;
    }
    SetCondition(obj, func) {
        this.funcObj = obj;
        this.func = func;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null || msg.card == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        if (this.casterPlayer != DtEnum_1.DtSkillTargetToPlayer.Both) {
            if (msg.caster == null) {
                return false;
            }
            if (this.casterPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
                if (msg.caster.GetPlayer() != effect.parent.GetPlayer()) {
                    return false;
                }
            }
            else if (this.casterPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
                if (msg.caster.GetPlayer() == effect.parent.GetPlayer()) {
                    return false;
                }
            }
        }
        if (this.from != DtEnum_1.DtAreaType.None) {
            if (msg.from != this.from) {
                return false;
            }
        }
        if (this.to != DtEnum_1.DtAreaType.None) {
            if (msg.to != this.to) {
                return false;
            }
        }
        if (this.targerPlayer != DtEnum_1.DtSkillTargetToPlayer.Both) {
            if (this.targerPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
                if (msg.card.GetPlayer() != effect.parent.GetPlayer()) {
                    return false;
                }
            }
            else if (this.targerPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
                if (msg.card.GetPlayer() == effect.parent.GetPlayer()) {
                    return false;
                }
            }
        }
        if (this.reason != DtMessageData_1.DtProtoEnum_MoveReason.None) {
            if (this.reason != msg.reason) {
                return false;
            }
        }
        if (this.func) {
            return this.func.call(this.funcObj, msg);
        }
        return true;
    }
}
exports.DtConTriggerCardMove = DtConTriggerCardMove;
//# sourceMappingURL=DtConTriggerCardMove.js.map