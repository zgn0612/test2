"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardDP_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardDP");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
const DtCardOperate_SetOrigin_ChooseIsOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsOrigin");
class EC_BT7_017_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffectActivateAsk();
        this.Eff1(effect);
        this.Eff2(effect);
    }
    Eff1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_11));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 5));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Black, DtEnum_1.DtCardColor.Red));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsOrigin_1.DtCardOperate_SetOrigin_ChooseIsOrigin(1));
    }
    Eff2(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 2);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let count = this.parent.CheckOriginCountWithCondition((card) => {
                return card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 5) && card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_11);
            });
            if (count > 0) {
                choose.SetActive(true);
                choose.ChangeTypeNum(count);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardDP_1.DtCardFilter_CardDP(DtEnum_1.DtFilterCompare.LESS_EQUAL, 6000));
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT7_017_2;
//# sourceMappingURL=EC_BT7_017_2.js.map