"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_EX2_054_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().SkipDefenseAttackJudge();
        this.UseCard(this.parent, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_054_1;
//# sourceMappingURL=EC_EX2_054_1.js.map