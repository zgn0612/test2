"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuff_ConditionAttribute = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalBuffBase_1 = require("./DtGlobalBuffBase");
class DtGlobalBuff_ConditionAttribute extends DtGlobalBuffBase_1.DtGlobalBuffBase {
    func;
    effectArea = DtEnum_1.DtAreaType.None;
    constructor(caster, type, func, creator) {
        super(caster, creator);
        this.type = type;
        this.func = func;
        this.creator = creator;
    }
    Condition(card, type) {
        if (this.effectArea != DtEnum_1.DtAreaType.None) {
            if (card.CardIsInArea(this.effectArea) == false) {
                return false;
            }
        }
        if (this.CanEffect(card, type)) {
            if (this.func) {
                return this.func.call(this.creator, this, card);
            }
        }
        return false;
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
}
exports.DtGlobalBuff_ConditionAttribute = DtGlobalBuff_ConditionAttribute;
//# sourceMappingURL=DtGlobalBuff_ConditionAttribute.js.map