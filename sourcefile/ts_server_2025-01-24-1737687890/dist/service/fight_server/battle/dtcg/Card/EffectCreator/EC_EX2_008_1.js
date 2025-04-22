"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_EX2_008_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 4, 2, (skl, idx) => {
            if (idx == 0) {
                skl.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(false, DtCardDigimonType_1.DtCardDigimonType.name_type_10110, DtCardDigimonType_1.DtCardDigimonType.name_type_10103));
            }
            else {
                skl.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10960, true));
            }
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_EX2_008_1;
//# sourceMappingURL=EC_EX2_008_1.js.map