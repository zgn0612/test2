"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardBeforeActEffect = void 0;
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardBeforeActEffect extends DtConBase_1.DtConBase {
    round;
    type;
    casterCon;
    func;
    funcObj;
    constructor(round, ...type) {
        super();
        this.round = round;
        this.type = type;
    }
    SetCasterCardCon(type, c, o) {
        this.casterCon = new DtConCard_1.DtConCard(type, c, o);
        return this.casterCon;
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
        let can = false;
        for (let i = 0; i < this.type.length; i++) {
            if (this.type[i] == msg.effectType) {
                can = true;
                break;
            }
        }
        if (can == false) {
            return false;
        }
        if (this.casterCon) {
            if (this.casterCon.CheckCondition(effect.parent.GetPlayer(), msg.casterCard) == false) {
                return false;
            }
        }
        if (this.func) {
            return this.func.call(this.funcObj, msg);
        }
        return true;
    }
}
exports.DtConTriggerCardBeforeActEffect = DtConTriggerCardBeforeActEffect;
//# sourceMappingURL=DtConTriggerCardBeforeActEffect.js.map