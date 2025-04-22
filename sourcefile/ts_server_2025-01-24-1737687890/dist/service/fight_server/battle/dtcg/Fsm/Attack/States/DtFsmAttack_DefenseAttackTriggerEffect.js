"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_DefenseAttackTriggerEffect = void 0;
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseAttackAfterEffect_1 = require("./DtFsmAttack_DefenseAttackAfterEffect");
class DtFsmAttack_DefenseAttackTriggerEffect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
    }
    Excute() {
        this.GetMachine().ChangeState(DtFsmAttack_DefenseAttackAfterEffect_1.DtFsmAttack_DefenseAttackAfterEffect.name);
    }
}
exports.DtFsmAttack_DefenseAttackTriggerEffect = DtFsmAttack_DefenseAttackTriggerEffect;
//# sourceMappingURL=DtFsmAttack_DefenseAttackTriggerEffect.js.map