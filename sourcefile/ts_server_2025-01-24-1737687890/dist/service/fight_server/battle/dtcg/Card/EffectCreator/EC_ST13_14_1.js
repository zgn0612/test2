"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
class EC_ST13_14_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtActionEffectType.PlaceCardUnderOtherDigimon);
        ctri.SetCasterCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ctri.SetCondition(this, (msg) => {
            return msg.extraOtherCard.ISSameCard(this.parent);
        });
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Buff, null);
    }
    Buff(effect) {
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Immue_Opponent_destory_effect).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.IMMUE_RETURN_TO_HAN).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.IMMUE_RETURN_TO_DECK).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST13_14_1;
//# sourceMappingURL=EC_ST13_14_1.js.map