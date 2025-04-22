"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
const DtCardOperate_SetOrigin_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsOrigin");
class EC_BT8_069_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(0));
    }
    Skill2(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 7, DtEnum_1.DtAreaType.None));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT8_069_1;
//# sourceMappingURL=EC_BT8_069_1.js.map