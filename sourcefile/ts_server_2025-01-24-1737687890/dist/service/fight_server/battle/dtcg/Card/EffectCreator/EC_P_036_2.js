"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_P_036_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateMagicDelayEffect();
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_P_036_2;
//# sourceMappingURL=EC_P_036_2.js.map