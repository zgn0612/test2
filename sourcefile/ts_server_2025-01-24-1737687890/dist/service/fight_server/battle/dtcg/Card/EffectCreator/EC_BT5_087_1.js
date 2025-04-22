"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardCost_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardCost");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT5_087_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.E1Effect1, null);
        this.group1(effect);
        this.group2(effect);
    }
    E1Effect1() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 3);
        return DtEffect_1.DtEffectResult.Next;
    }
    group1(effect) {
        effect.SetEffectGroup("g1", this.BattleNormalPlayMulCard, () => {
            let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
            skill.GetChooseMachine().SetCanCancel(true);
            skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 8, DtEnum_1.DtAreaType.None));
            skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple, DtEnum_1.DtCardColor.Black));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
    group2(effect) {
        effect.SetEffectGroup("g2", this.BattleOnlayOnePlayCard, () => {
            let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
            skill.GetChooseMachine().SetCanCancel(true);
            skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_CardCost_1.DtCardFilter_CardCost(DtEnum_1.DtFilterCompare.LESS_EQUAL, 8, DtEnum_1.DtAreaType.None));
            skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple, DtEnum_1.DtCardColor.Black));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
}
exports.default = EC_BT5_087_1;
//# sourceMappingURL=EC_BT5_087_1.js.map