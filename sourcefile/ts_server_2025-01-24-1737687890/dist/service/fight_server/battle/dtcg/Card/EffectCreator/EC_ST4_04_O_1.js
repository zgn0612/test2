"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
class EC_ST4_04_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        let battle = effect.eventMsg;
        return battle.atkType == DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack;
    }
    Effect(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(2000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST4_04_O_1;
//# sourceMappingURL=EC_ST4_04_O_1.js.map