"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT1_109_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.UseEffect, null);
    }
    UseEffect() {
        this.CreateGlobalEffect(new EC_BT1_109_1_Add());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_109_1;
class EC_BT1_109_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effectEvo = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        effectEvo.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        effectEvo.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let ccori = ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Green, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccori.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 5);
        let ccevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccevo.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 6);
        effectEvo.SetTriggerCondition(ctri);
        effectEvo.SetTriggerAreaAllExceptDigitama();
        effectEvo.SetEffect(this.EvoEff, null);
    }
    EvoEff(effect) {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-4);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT1_109_1.js.map