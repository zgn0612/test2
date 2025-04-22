"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerDiscardEvoOrigin = void 0;
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerDiscardEvoOrigin extends DtConBase_1.DtConBase {
    round;
    conCard;
    beDiscardCard;
    conCasterCard;
    reason;
    func;
    funcObj;
    constructor(round, reason) {
        super();
        this.round = round;
        this.reason = reason;
    }
    SetBeDiscardCardCon(type, c, o) {
        this.beDiscardCard = new DtConCard_1.DtConCard(type, c, o);
        return this.beDiscardCard;
    }
    SetDiscardCardCon(type, c, o) {
        this.conCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conCard;
    }
    SetCasterCardCon(type, c, o) {
        this.conCasterCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conCasterCard;
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
        if (this.conCard) {
            if (this.conCard.CheckCondition(effect.parent.GetPlayer(), msg.receiveCard) == false) {
                return false;
            }
        }
        if (this.beDiscardCard) {
            if (this.beDiscardCard.CheckCondition(effect.parent.GetPlayer(), msg.fromCard) == false) {
                return false;
            }
        }
        if (this.conCasterCard) {
            if (this.conCasterCard.CheckCondition(effect.parent.GetPlayer(), msg.caster) == false) {
                return false;
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
exports.DtConTriggerDiscardEvoOrigin = DtConTriggerDiscardEvoOrigin;
//# sourceMappingURL=DtConTriggerDiscardEvoOrigin.js.map