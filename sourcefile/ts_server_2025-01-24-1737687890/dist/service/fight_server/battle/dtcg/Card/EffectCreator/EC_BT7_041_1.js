"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT7_041_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let count = this.GetPlayer().areaDefense.CardCount();
        if (count >= 3) {
            this.ThisCardUseCost(-2);
        }
        else {
            this.GetManager().OnRestore(this.parent, this.GetPlayer(), 3 - count);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_041_1;
//# sourceMappingURL=EC_BT7_041_1.js.map