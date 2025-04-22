"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_091_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().EffectHatchDigimon(this.GetPlayer());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_091_1;
//# sourceMappingURL=EC_BT8_091_1.js.map