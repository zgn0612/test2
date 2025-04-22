"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT2_034_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition() {
        return this.GetPlayer().areaDefense.CardCount() <= 3;
    }
    Effect() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_034_1;
//# sourceMappingURL=EC_BT2_034_1.js.map