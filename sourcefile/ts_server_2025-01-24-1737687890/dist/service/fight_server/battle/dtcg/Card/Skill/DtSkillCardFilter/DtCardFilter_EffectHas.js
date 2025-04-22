"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_EffectHas = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_EffectHas extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    effectName;
    constructor(name) {
        super();
        this.effectName = name;
    }
    OnFilterCard(card) {
        return card.HasEffect(this.effectName);
    }
}
exports.DtCardFilter_EffectHas = DtCardFilter_EffectHas;
//# sourceMappingURL=DtCardFilter_EffectHas.js.map