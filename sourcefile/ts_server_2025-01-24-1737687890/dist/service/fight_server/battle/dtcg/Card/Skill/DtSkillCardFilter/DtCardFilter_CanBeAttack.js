"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CanBeAttack = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CanBeAttack extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    constructor() {
        super();
    }
    OnFilterCard(card) {
        return card.CardCanBeAttack();
    }
}
exports.DtCardFilter_CanBeAttack = DtCardFilter_CanBeAttack;
//# sourceMappingURL=DtCardFilter_CanBeAttack.js.map