"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CanUse = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CanUse extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    constructor() {
        super();
    }
    OnFilterCard(card) {
        return card.CardCanUse();
    }
}
exports.DtCardFilter_CanUse = DtCardFilter_CanUse;
//# sourceMappingURL=DtCardFilter_CanUse.js.map