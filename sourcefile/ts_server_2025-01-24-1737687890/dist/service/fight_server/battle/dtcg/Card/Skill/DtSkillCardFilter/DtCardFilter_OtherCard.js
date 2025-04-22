"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_OtherCard = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_OtherCard extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    constructor() {
        super();
    }
    OnFilterCard(card) {
        return card != this.parentCard;
    }
}
exports.DtCardFilter_OtherCard = DtCardFilter_OtherCard;
//# sourceMappingURL=DtCardFilter_OtherCard.js.map