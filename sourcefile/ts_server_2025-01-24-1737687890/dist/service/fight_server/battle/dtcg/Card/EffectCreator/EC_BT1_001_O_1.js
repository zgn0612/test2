"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
class EC_BT1_001_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        let msg = effect.eventMsg;
        if (msg.atkType != DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack) {
            return false;
        }
        return true;
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(1000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_001_O_1;
//# sourceMappingURL=EC_BT1_001_O_1.js.map