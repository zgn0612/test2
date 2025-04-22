"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_SetOrigin_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsOrigin");
class EC_BT7_064_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        this.skill1(effect);
        effect.SetEffect(this.Buff, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Black));
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(0));
    }
    Buff(effect) {
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Immue_Destory_effect).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_064_1;
//# sourceMappingURL=EC_BT7_064_1.js.map