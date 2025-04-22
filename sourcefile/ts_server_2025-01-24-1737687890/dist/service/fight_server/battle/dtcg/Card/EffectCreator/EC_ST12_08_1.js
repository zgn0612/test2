"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST12_08_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.ATTACK_ACTIVATE_DIGIMON).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST12_08_1;
//# sourceMappingURL=EC_ST12_08_1.js.map