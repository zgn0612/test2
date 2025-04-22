"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT2_082_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectActivateAsk();
    }
    Effect() {
        let card = this.GetPlayer().CreateTokenCard(116113);
        this.UseCard(card, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_082_1;
//# sourceMappingURL=EC_BT2_082_1.js.map