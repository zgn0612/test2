"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_OriginCards = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_OriginCards extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    type;
    count;
    constructor(equalType, count) {
        super();
        this.type = equalType;
        this.count = count;
    }
    OnFilterCard(card) {
        let result = false;
        switch (this.type) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (card.GetOriginDigimonCount() == this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (card.GetOriginDigimonCount() > this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (card.GetOriginDigimonCount() >= this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (card.GetOriginDigimonCount() < this.count) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (card.GetOriginDigimonCount() <= this.count) {
                    result = true;
                }
                break;
        }
        return result;
    }
}
exports.DtCardFilter_OriginCards = DtCardFilter_OriginCards;
//# sourceMappingURL=DtCardFilter_HasOriginCards.js.map