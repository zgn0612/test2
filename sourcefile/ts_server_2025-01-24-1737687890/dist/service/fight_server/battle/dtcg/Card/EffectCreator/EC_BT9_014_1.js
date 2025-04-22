"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceAmountDPCreatorts_1 = require("../Effect/DtEnhanceAmountDPCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT9_014_1 extends DtEnhanceAmountDPCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.EffCost(effect);
        let skill = this.SetAmountDPEffect(effect, 6000, 2, DtEnum_1.DtSkillReason.Destory);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let act = this.parent.CheckOriginCountWithCondition((card) => {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10113, true) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true);
            });
        });
        skill.GetChooseMachine().SetCanCancel(true);
    }
    EffCost(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.CreateEffectTo(new EC_EC_BT9_014_1_Add(), card, false);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.ADD_SKILL_BUFF));
    }
    OnAmountFilter(filter) {
        filter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnAmountCardsSelects(cards) {
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnCardDestroy(this.parent, cards[i]);
        }
    }
}
exports.default = EC_BT9_014_1;
class EC_EC_BT9_014_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT9_014_1.js.map