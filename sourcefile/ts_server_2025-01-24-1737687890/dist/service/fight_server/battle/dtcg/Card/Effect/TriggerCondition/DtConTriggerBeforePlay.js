"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerBeforePlay = void 0;
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerBeforePlay extends DtConBase_1.DtConBase {
    round;
    cardCon;
    constructor(round) {
        super();
        this.round = round;
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
        if (this.cardCon) {
            if (this.cardCon.CheckCondition(effect.parent.GetPlayer(), msg.card) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerBeforePlay = DtConTriggerBeforePlay;
//# sourceMappingURL=DtConTriggerBeforePlay.js.map