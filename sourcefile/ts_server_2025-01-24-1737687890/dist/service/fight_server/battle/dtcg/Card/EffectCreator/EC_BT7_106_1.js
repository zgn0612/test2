"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT7_106_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.AutoChooseEffect, null);
        this.option1(effect);
        this.skill1(effect);
        this.skill2(effect);
    }
    AutoChooseEffect(effect) {
        let con = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33)) {
                if (card.GetOriginDigimonCount() >= 5) {
                    return true;
                }
            }
            return false;
        });
        if (con == false) {
            effect.SetToStateStepWithStageId(2);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    option1(effect) {
        let skill = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        skill.SetSkillBehavior(null, this.OnChoose);
    }
    OnChoose(uid, effect) {
        let num = uid.toNumber();
        if (num == 0) {
            effect.SetToStateStepWithStageId(2);
        }
        else {
            effect.SetToStateStepWithStageId(3);
        }
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 6, DtEnum_1.DtAreaType.None));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33) == false;
        }));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_BT7_106_1;
//# sourceMappingURL=EC_BT7_106_1.js.map