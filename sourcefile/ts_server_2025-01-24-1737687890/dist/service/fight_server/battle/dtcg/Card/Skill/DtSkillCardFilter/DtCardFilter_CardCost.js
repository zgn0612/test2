"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardCost = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardCost extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    type;
    cost;
    area;
    constructor(equalType, cost, area) {
        super();
        this.type = equalType;
        this.cost = cost;
        this.area = area;
    }
    OnFilterCard(card) {
        let result = false;
        switch (this.type) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (card.GetConfigCost() == this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (card.GetConfigCost() > this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (card.GetConfigCost() >= this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (card.GetConfigCost() < this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (card.GetConfigCost() <= this.cost) {
                    result = true;
                }
                break;
        }
        return result;
    }
}
exports.DtCardFilter_CardCost = DtCardFilter_CardCost;
//# sourceMappingURL=DtCardFilter_CardCost.js.map