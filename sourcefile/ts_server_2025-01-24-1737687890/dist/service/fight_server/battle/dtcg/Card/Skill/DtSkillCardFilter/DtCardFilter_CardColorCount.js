"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardColorCount = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardColorCount extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    compare;
    count;
    constructor(compare, count) {
        super();
        this.compare = compare;
        this.count = count;
    }
    OnFilterCard(card) {
        let count = card.ColorCount();
        let result = false;
        switch (this.compare) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (count == this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (count > this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (count >= this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (count < this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (count <= this.count) {
                    result = true;
                }
                break;
        }
        return result;
    }
}
exports.DtCardFilter_CardColorCount = DtCardFilter_CardColorCount;
//# sourceMappingURL=DtCardFilter_CardColorCount.js.map