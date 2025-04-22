"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
class EC_ST13_05_1 extends DtEffectCreator_1.DtEffectCreator {
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
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(3000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(1).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST13_05_1;
//# sourceMappingURL=EC_ST13_05_1.js.map