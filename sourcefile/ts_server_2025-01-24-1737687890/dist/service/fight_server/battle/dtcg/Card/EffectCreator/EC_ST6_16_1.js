"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_ST6_16_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.Group1(effect);
        this.Group2(effect);
    }
    Group1(effect) {
        effect.SetEffectGroup("g1", this.BattleNormalPlayMulCard, () => {
            this.skill1(effect);
            this.skill2(effect);
        });
    }
    Group2(effect) {
        effect.SetEffectGroup("g2", this.BattleOnlayOnePlayCard, () => {
            let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
            skill.GetChooseMachine().SetCanCancel(true);
            skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
            skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 3) || card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 4);
            }));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, false));
        });
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 3));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, false));
    }
    skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetChooseMachine().SetCanCancel(true);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 4));
        skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, false));
    }
}
exports.default = EC_ST6_16_1;
//# sourceMappingURL=EC_ST6_16_1.js.map