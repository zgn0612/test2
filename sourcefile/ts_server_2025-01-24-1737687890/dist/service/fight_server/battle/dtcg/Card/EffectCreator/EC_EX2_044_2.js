"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_EX2_044_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let evoEffect = this.GetNewEffect();
        evoEffect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        let option = this.SetSkillPlayerChooseOption(evoEffect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        option.SetSkillBehavior(null, this.OnChoose);
        this.Skill(evoEffect);
        let atkEffect = this.GetNewEffect();
        atkEffect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        let atkOption = this.SetSkillPlayerChooseOption(atkEffect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        atkOption.SetSkillBehavior(null, this.OnChoose);
        this.Skill(atkEffect);
    }
    OnChoose(uid, effect) {
        let num = uid.toNumber();
        if (num == 1) {
            this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 2);
        }
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            let count = this.GetPlayer().areaGraveyard.CardCount();
            let add = Math.floor(count / 10);
            return card.CardLvIs(DtEnum_1.DtFilterCompare.LESS_EQUAL, 3 + add);
        }));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_EX2_044_2;
//# sourceMappingURL=EC_EX2_044_2.js.map