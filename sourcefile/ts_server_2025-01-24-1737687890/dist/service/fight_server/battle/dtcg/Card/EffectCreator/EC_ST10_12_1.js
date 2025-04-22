"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_ST10_12_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        this.skill1(effect);
        this.skill2(effect);
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    skill2(effect) {
        let group = this.SetCommonBrowseFromDeckThenBottom(effect, 3, 2, (skl, idx) => {
            if (idx == 0) {
                skl.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Yellow));
                skl.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_21, DtCardDigimonType_1.DtCardDigimonType.type_51, DtCardDigimonType_1.DtCardDigimonType.type_32));
            }
            else {
                skl.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
                skl.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_21, DtCardDigimonType_1.DtCardDigimonType.type_51, DtCardDigimonType_1.DtCardDigimonType.type_32));
            }
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
        group.SetFirstType(DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over);
    }
}
exports.default = EC_ST10_12_1;
//# sourceMappingURL=EC_ST10_12_1.js.map