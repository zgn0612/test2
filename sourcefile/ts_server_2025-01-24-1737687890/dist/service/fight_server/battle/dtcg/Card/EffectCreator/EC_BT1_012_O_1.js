"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT1_012_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnBeBlocker);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition() {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return true;
        }
        return false;
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(2000), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_012_O_1;
//# sourceMappingURL=EC_BT1_012_O_1.js.map