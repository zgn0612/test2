"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerBeforeCardChangeCost = void 0;
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerBeforeCardChangeCost extends DtConBase_1.DtConBase {
    round;
    conCard;
    func;
    funcObj;
    reason;
    constructor(round, reason) {
        super();
        this.round = round;
        this.reason = reason;
    }
    SetCardCon(type, c, o) {
        this.conCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conCard;
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
        if (msg.caster == null) {
            return false;
        }
        if (this.reason != DtMessageData_1.DtProtoEnum_MoveReason.None) {
            if (this.reason != msg.reason) {
                return false;
            }
        }
        if (this.conCard) {
            if (this.conCard.CheckCondition(effect.parent.GetPlayer(), msg.caster) == false) {
                return false;
            }
        }
        if (this.func) {
            return this.func.call(this.funcObj, msg);
        }
        return true;
    }
}
exports.DtConTriggerBeforeCardChangeCost = DtConTriggerBeforeCardChangeCost;
//# sourceMappingURL=DtConTriggerBeforeCardChangeCost.js.map