"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardLv = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardLv extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    type;
    lv;
    constructor(equalType, lv) {
        super();
        this.type = equalType;
        this.lv = lv;
    }
    OnFilterCard(card) {
        return card.CardLvIs(this.type, this.lv);
    }
}
exports.DtCardFilter_CardLv = DtCardFilter_CardLv;
//# sourceMappingURL=DtCardFilter_CardLv.js.map