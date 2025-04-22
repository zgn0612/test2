"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST2_13_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let eff2 = this.GetNewEffect();
        eff2.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        eff2.SetEffect(this.Effect2, null);
    }
    Effect2() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST2_13_2;
//# sourceMappingURL=EC_ST2_13_2.js.map