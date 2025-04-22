"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardBattleState_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardBattleState");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT3_103_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.UseEffect, null);
    }
    ClientShow() {
        this.CreateEffectTo(new EC_BT3_103_1_Add(), this.parent, false);
    }
    UseEffect() {
        this.CreateGlobalEffect(new EC_BT3_103_1_Add());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_103_1;
class EC_BT3_103_1_Add extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let useEffect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        useEffect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Green, DtEnum_1.DtSkillTargetToPlayer.Self);
        useEffect.SetTriggerCondition(ctri);
        useEffect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        useEffect.SetTriggerAreaAllExceptDigitama();
        useEffect.SetEffectActivateAsk();
        useEffect.SetCondition(this.Con);
        this.Skill1(useEffect);
        useEffect.SetEffect(this.EvoEff, null).type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Con(effect) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
        });
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardBattleState_1.DtCardFilter_CardBattleState(DtEnum_1.DtCardBattleState.Activate));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Reset));
    }
    EvoEff(effect) {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-5);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT3_103_1.js.map