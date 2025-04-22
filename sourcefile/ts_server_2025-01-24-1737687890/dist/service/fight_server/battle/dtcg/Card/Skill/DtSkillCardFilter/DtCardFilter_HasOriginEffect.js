"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_HasOriginEffect = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_HasOriginEffect extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    constructor() {
        super();
    }
    OnFilterCard(card) {
        return card.HasOriginEffect();
    }
}
exports.DtCardFilter_HasOriginEffect = DtCardFilter_HasOriginEffect;
//# sourceMappingURL=DtCardFilter_HasOriginEffect.js.map