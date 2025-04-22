"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_HasEffectWithTrigger = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_HasEffectWithTrigger extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    effectTrigger;
    constructor(trigger) {
        super();
        this.effectTrigger = trigger;
    }
    OnFilterCard(card) {
        return card.HasEffectWithTriggerType(this.effectTrigger);
    }
}
exports.DtCardFilter_HasEffectWithTrigger = DtCardFilter_HasEffectWithTrigger;
//# sourceMappingURL=DtCardFilter_HasEffectWithTrigger.js.map