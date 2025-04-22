"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerAreaCardsChange_1 = require("../Effect/TriggerCondition/DtConTriggerAreaCardsChange");
class EC_BT6_044_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAreaCardsChange);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetTriggerCondition(new DtConTriggerAreaCardsChange_1.DtConTriggerAreaCardsChange(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.DEFENSE, false));
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        return this.GetPlayer().areaDefense.CardCount() <= 3;
    }
    Effect() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_044_2;
//# sourceMappingURL=EC_BT6_044_2.js.map