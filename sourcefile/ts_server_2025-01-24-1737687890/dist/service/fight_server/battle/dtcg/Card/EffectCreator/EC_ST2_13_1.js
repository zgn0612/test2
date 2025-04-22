"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST2_13_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect1.SetEffect(this.Effect1, null);
    }
    Effect1() {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST2_13_1;
//# sourceMappingURL=EC_ST2_13_1.js.map