"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX1_021_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let cost = Math.floor(this.GetPlayer().areaHand.CardCount() / 4);
        this.ThisCardUseCost(-cost);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_021_1;
//# sourceMappingURL=EC_EX1_021_1.js.map