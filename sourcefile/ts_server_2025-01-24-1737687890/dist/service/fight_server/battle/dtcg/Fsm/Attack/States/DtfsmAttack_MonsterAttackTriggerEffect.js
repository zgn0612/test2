"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtfsmAttack_MonsterAttackTriggerEffect = void 0;
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_MonsterAttackAfterEffect_1 = require("./DtFsmAttack_MonsterAttackAfterEffect");
class DtfsmAttack_MonsterAttackTriggerEffect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
    }
    Excute() {
        this.GetMachine().ChangeState(DtFsmAttack_MonsterAttackAfterEffect_1.DtFsmAttack_MonsterAttackAfterEffect.name);
    }
}
exports.DtfsmAttack_MonsterAttackTriggerEffect = DtfsmAttack_MonsterAttackTriggerEffect;
//# sourceMappingURL=DtfsmAttack_MonsterAttackTriggerEffect.js.map