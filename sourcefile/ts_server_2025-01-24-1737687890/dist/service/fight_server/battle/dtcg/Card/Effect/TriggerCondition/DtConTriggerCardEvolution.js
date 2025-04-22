"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerCardEvolution = void 0;
const DtConBase_1 = require("./DtConBase");
const DtConCard_1 = require("./DtConCard");
class DtConTriggerCardEvolution extends DtConBase_1.DtConBase {
    round;
    evoCard;
    oriCard;
    constructor(round) {
        super();
        this.round = round;
    }
    SetEvoCardCon(type, c, o) {
        this.evoCard = new DtConCard_1.DtConCard(type, c, o);
        return this.evoCard;
    }
    SetOriCardCon(type, c, o) {
        this.oriCard = new DtConCard_1.DtConCard(type, c, o);
        return this.oriCard;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        if (this.evoCard) {
            if (this.evoCard.CheckCondition(effect.parent.GetPlayer(), msg.evoCard) == false) {
                return false;
            }
        }
        if (this.oriCard) {
            if (this.oriCard.CheckCondition(effect.parent.GetPlayer(), msg.oriCard) == false) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConTriggerCardEvolution = DtConTriggerCardEvolution;
//# sourceMappingURL=DtConTriggerCardEvolution.js.map