"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_EX1_071_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.UseEffect, null);
    }
    ClientShow() {
        this.CreateEffectTo(new EC_EX1_071_2_Add(), this.parent, false);
    }
    UseEffect() {
        this.CreateGlobalEffect(new EC_EX1_071_2_Add());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_071_2;
class EC_EX1_071_2_Add extends DtEnhanceEffectCreatorts_1.default {
    card;
    SetEffect() {
        let useEffect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        useEffect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        useEffect.SetTriggerCondition(ctri);
        useEffect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        useEffect.SetTriggerAreaAllExceptDigitama();
        useEffect.SetEffectActivateAsk();
        this.Skill1(useEffect);
        useEffect.SetEffect(this.EvoEff, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let msg = choose.GetParentEffect().eventMsg;
            if (msg) {
                this.card = msg.evoCard;
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            if (card != this.card) {
                return card.ColorIsSameOtherCard(this.card);
            }
            return false;
        }));
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    EvoEff(effect) {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-4);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_EX1_071_2.js.map