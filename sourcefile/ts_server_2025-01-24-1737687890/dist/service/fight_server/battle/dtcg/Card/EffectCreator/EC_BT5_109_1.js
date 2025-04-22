"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT5_109_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.UseEffect, null);
    }
    UseEffect() {
        this.CreateGlobalEffect(new EC_BT5_109_1_Add());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_109_1;
class EC_BT5_109_1_Add extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effectEvo = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        effectEvo.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        effectEvo.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let ctri = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let ccori = ctri.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccori.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 6);
        let ccevo = ctri.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccevo.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 7);
        effectEvo.SetTriggerCondition(ctri);
        effectEvo.SetTriggerAreaAllExceptDigitama();
        effectEvo.SetEffect(this.EvoEff, null);
    }
    EvoEff(effect) {
        let msg = effect.eventMsg;
        if (msg.oriCard) {
            this.CreateEffectTo(new EC_BT5_109_1_Add_2(), msg.oriCard, false);
        }
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-6);
        return DtEffect_1.DtEffectResult.Next;
    }
}
class EC_BT5_109_1_Add_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundOver);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnCardReturnTo(this.parent, this.parent, DtEnum_1.DtActionEffectType.BattleReturnDeck, 0);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT5_109_1.js.map