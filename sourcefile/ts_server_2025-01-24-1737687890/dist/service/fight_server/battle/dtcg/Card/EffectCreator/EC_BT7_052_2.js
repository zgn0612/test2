"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT7_052_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDestory);
        effect.SetEffect(this.cost, null);
    }
    cost(effect) {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_052_2;
//# sourceMappingURL=EC_BT7_052_2.js.map