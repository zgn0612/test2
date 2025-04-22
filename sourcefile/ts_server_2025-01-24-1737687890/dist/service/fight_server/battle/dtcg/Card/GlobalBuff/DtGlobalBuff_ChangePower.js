"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuff_ChangePower = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalBuffBase_1 = require("./DtGlobalBuffBase");
class DtGlobalBuff_ChangePower extends DtGlobalBuffBase_1.DtGlobalBuffBase {
    power = 0;
    effectArea = DtEnum_1.DtAreaType.None;
    constructor(caster, creator) {
        super(caster, creator);
        this.type = DtEnum_1.DtBuffType.CHANGE_POWER;
    }
    CheckCardInt(card, type) {
        if (this.effectArea != DtEnum_1.DtAreaType.None) {
            if (card.CardIsInArea(this.effectArea) == false) {
                return 0;
            }
        }
        if (this.CanEffect(card, type)) {
            return this.power;
        }
        return 0;
    }
}
exports.DtGlobalBuff_ChangePower = DtGlobalBuff_ChangePower;
//# sourceMappingURL=DtGlobalBuff_ChangePower.js.map