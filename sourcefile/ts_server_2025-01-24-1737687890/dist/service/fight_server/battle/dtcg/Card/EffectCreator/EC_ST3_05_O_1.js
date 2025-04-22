"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST3_05_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect1.SetCondition(this.Con);
        effect1.SetEffect(this.Effect1, null);
    }
    Con(effect) {
        if (this.GetPlayer().areaDefense.CardCount() < 4) {
            return false;
        }
        return true;
    }
    Effect1(effect) {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST3_05_O_1;
//# sourceMappingURL=EC_ST3_05_O_1.js.map