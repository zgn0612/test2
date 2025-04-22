"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT2_012_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con(effect) {
        let msg = effect.eventMsg;
        if (msg.atkType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            return true;
        }
        return false;
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(4000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_012_1;
//# sourceMappingURL=EC_BT2_012_1.js.map