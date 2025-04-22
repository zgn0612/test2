"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_CheckCanDoAttack = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../DtFsmAttackEnum");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseAttackJudge_1 = require("./DtFsmAttack_DefenseAttackJudge");
const DtFsmAttack_MonsterAttackJudge_1 = require("./DtFsmAttack_MonsterAttackJudge");
class DtFsmAttack_CheckCanDoAttack extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        if (this.GetMachine().atkCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            this.GetMachine().AttackOver();
            return;
        }
        if (this.GetMachine().attackType == DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack) {
            if (this.GetMachine().defCard == null || this.GetMachine().defCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.GetMachine().AttackOver();
                return;
            }
        }
    }
    Excute() {
        if (this.GetMachine().attackType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack && this.GetMachine().defCard == null) {
            this.GetMachine().ChangeState(DtFsmAttack_DefenseAttackJudge_1.DtFsmAttack_DefenseAttackJudge.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmAttack_MonsterAttackJudge_1.DtFsmAttack_MonsterAttackJudge.name);
        }
    }
}
exports.DtFsmAttack_CheckCanDoAttack = DtFsmAttack_CheckCanDoAttack;
//# sourceMappingURL=DtFsmAttack_CheckCanDoAttack.js.map