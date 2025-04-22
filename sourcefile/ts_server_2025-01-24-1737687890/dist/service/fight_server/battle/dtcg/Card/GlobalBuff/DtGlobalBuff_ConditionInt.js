"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuff_ConditionInt = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalBuffBase_1 = require("./DtGlobalBuffBase");
class DtGlobalBuff_ConditionInt extends DtGlobalBuffBase_1.DtGlobalBuffBase {
    func;
    effectArea = DtEnum_1.DtAreaType.None;
    constructor(caster, type, func, creator) {
        super(caster, creator);
        this.type = type;
        this.func = func;
        this.creator = creator;
    }
    CheckCardInt(card, type) {
        if (this.effectArea != DtEnum_1.DtAreaType.None) {
            if (card.CardIsInArea(this.effectArea) == false) {
                return 0;
            }
        }
        if (this.CanEffect(card, type)) {
            if (this.func) {
                return this.func.call(this.creator, this, card);
            }
        }
        return 0;
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
}
exports.DtGlobalBuff_ConditionInt = DtGlobalBuff_ConditionInt;
//# sourceMappingURL=DtGlobalBuff_ConditionInt.js.map