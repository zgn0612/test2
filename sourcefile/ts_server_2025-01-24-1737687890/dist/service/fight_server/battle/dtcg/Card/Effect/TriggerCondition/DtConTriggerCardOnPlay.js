"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardOnPlay = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardOnPlay extends DtConBase_1.DtConBase {
    round;
    playType;
    playPlayer;
    reason;
    playCardCon;
    func;
    funcObj;
    constructor(round, playCardType, playCardPlayer) {
        super();
        this.round = round;
        this.playType = playCardType;
        this.playPlayer = playCardPlayer;
        this.reason = DtMessageData_1.DtProtoEnum_MoveReason.None;
    }
    SetReason(r) {
        this.reason = r;
    }
    SetPlayCardCon(type, c, o) {
        this.playCardCon = new DtConCard_1.DtConCard(type, c, o);
        return this.playCardCon;
    }
    SetCondition(obj, func) {
        this.funcObj = obj;
        this.func = func;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
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
        if (this.reason != DtMessageData_1.DtProtoEnum_MoveReason.None) {
            if (msg.reason != this.reason) {
                return false;
            }
        }
        if (this.playCardCon) {
            if (this.playCardCon.CheckCondition(effect.parent.GetPlayer(), msg.card) == false) {
                return false;
            }
        }
        if (this.func) {
            return this.func.call(this.funcObj, msg);
        }
        return true;
    }
}
exports.DtConTriggerCardOnPlay = DtConTriggerCardOnPlay;
//# sourceMappingURL=DtConTriggerCardOnPlay.js.map