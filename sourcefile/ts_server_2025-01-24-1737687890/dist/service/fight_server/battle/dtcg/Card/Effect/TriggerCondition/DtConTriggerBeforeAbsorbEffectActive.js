"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerBeforeAbsorbEffectActive = void 0;
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerBeforeAbsorbEffectActive extends DtConBase_1.DtConBase {
    round;
    conCard;
    constructor(round) {
        super();
        this.round = round;
    }
    SetCardCon(type, c, o) {
        this.conCard = new DtConCard_1.DtConCard(type, c, o);
        return this.conCard;
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
            if (this.conCard.CheckCondition(effect.parent.GetPlayer(), msg.card) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerBeforeAbsorbEffectActive = DtConTriggerBeforeAbsorbEffectActive;
//# sourceMappingURL=DtConTriggerBeforeAbsorbEffectActive.js.map