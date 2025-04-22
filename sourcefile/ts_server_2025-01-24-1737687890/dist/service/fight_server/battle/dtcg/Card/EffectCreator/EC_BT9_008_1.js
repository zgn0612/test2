"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT9_008_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        this.SetCommonBrowseFromDeckThenBottom(effect, 3, 2, (skl, idx) => {
            if (idx == 0) {
                skl.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(false, DtCardDigimonType_1.DtCardDigimonType.name_type_10001, DtCardDigimonType_1.DtCardDigimonType.name_type_10008));
            }
            else {
                skl.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true));
            }
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
        let effect2 = this.GetNewEffect();
        effect2.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.SetCommonBrowseFromDeckThenBottom(effect2, 3, 2, (skl, idx) => {
            if (idx == 0) {
                skl.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(false, DtCardDigimonType_1.DtCardDigimonType.name_type_10001, DtCardDigimonType_1.DtCardDigimonType.name_type_10008));
            }
            else {
                skl.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true));
            }
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
    }
}
exports.default = EC_BT9_008_1;
//# sourceMappingURL=EC_BT9_008_1.js.map