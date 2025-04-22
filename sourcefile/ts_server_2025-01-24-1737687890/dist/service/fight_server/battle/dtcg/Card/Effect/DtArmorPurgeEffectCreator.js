"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("./DtEffect");
const DtEffectCreator_1 = require("./DtEffectCreator");
const DtEffectType_1 = require("./DtEffectType");
const DtConTriggerCardBeforeActEffect_1 = require("./TriggerCondition/DtConTriggerCardBeforeActEffect");
class DtArmorPurgeEffectCreator extends DtEffectCreator_1.DtEffectCreator {
    CreateArmorPurgeEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.ARMOR_PURGE;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let tricon = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, ...DtConst_1.DtConst.ACTION_DESTORY);
        tricon.SetCondition(this, (msg) => { return msg.ReceiveHas(this.parent); });
        effect.SetTriggerCondition(tricon);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Purge, null);
    }
    Con() {
        return this.parent.GetOriginDigimonCount() > 0;
    }
    Purge() {
        this.GetManager().OnCardArmorPurge(this.parent, this.parent, DtEnum_1.DtDegenerateType.ArmorPurge);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = DtArmorPurgeEffectCreator;
//# sourceMappingURL=DtArmorPurgeEffectCreator.js.map