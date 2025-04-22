"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_003_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        return this.GetPlayer().areaDefense.CardCount() == 3;
    }
    Effect(effect) {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_003_O_1;
//# sourceMappingURL=EC_BT6_003_O_1.js.map