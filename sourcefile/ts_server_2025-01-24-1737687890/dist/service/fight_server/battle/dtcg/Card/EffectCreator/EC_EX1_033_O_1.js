"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_EX1_033_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.UseEffect, null);
    }
    UseEffect() {
        this.CreateGlobalEffect(new EC_EX1_033_O_1_Add());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_033_O_1;
class EC_EX1_033_O_1_Add extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let useEffect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        useEffect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let ccard = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccard.SetCondition(this, (card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_24) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_70);
        });
        useEffect.SetTriggerCondition(ctri);
        useEffect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        useEffect.SetTriggerAreaAllExceptDigitama();
        useEffect.SetEffect(this.EvoEff, null).type;
    }
    EvoEff(effect) {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_EX1_033_O_1.js.map