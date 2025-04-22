"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_083_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 5);
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetOppPlayer(), 5);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_083_1;
//# sourceMappingURL=EC_BT5_083_1.js.map