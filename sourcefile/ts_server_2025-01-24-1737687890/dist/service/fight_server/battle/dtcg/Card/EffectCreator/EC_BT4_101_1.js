"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreateGlobalTimeEffectToOther_1 = require("../Effect/DtEffectCreateGlobalTimeEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerWhenAttacking_1 = require("../Effect/TriggerCondition/DtConTriggerWhenAttacking");
class EC_BT4_101_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.CreateGlobalEffect(new EC_BT4_101_1_ADD_1());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_101_1;
class EC_BT4_101_1_ADD_1 extends DtEffectCreateGlobalTimeEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtBuffDurationType.RoundOver, 1, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnCondition(card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
    OnGetEffect() {
        return new EC_BT4_101_1_ADD_2();
    }
}
class EC_BT4_101_1_ADD_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1, false);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAttackDeclare);
        let ctri = new DtConTriggerWhenAttacking_1.DtConTriggerWhenAttacking(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetAtkType(DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack);
        let tcard = ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => {
            return card == this.parent;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        let msg = effect.eventMsg;
        if (msg && msg.defCard && msg.defCard.GetOriginDigimonCount() == 0) {
            return true;
        }
        return false;
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        this.GetManager().OnCardDestroy(this.parent, msg.defCard);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT4_101_1.js.map