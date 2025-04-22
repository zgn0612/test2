"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_ST1_09_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnBeBlocker);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect1, null);
    }
    Condition() {
        return this.GetPlayer().IsThisPlayerRound();
    }
    Effect1() {
        this.ThisCardUseCost(-3);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST1_09_O_1;
//# sourceMappingURL=EC_ST1_09_O_1.js.map