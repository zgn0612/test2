"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerBeforeAbsorbEffectActive_1 = require("../Effect/TriggerCondition/DtConTriggerBeforeAbsorbEffectActive");
class EC_BT3_056_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBeforeAbsorbEffectActive);
        let ctri = new DtConTriggerBeforeAbsorbEffectActive_1.DtConTriggerBeforeAbsorbEffectActive(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        return this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Activate;
        });
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.ABSORB_CAN_SELECT_OPPENT).SetBuffDurationType(DtEnum_1.DtBuffDurationType.CurrentEffectChainOver), msg.card);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_056_2;
//# sourceMappingURL=EC_BT3_056_2.js.map