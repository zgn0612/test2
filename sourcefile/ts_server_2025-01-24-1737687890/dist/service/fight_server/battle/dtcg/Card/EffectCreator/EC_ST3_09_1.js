"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST3_09_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect1.SetCondition(this.Condition);
        effect1.SetEffect(this.Effect1, null);
    }
    Condition() {
        if (this.GetPlayer().areaDefense.CardCount() > 3) {
            return false;
        }
        return true;
    }
    Effect1() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST3_09_1;
//# sourceMappingURL=EC_ST3_09_1.js.map