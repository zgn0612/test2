"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_DefenseAttackAfterEffect = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtFsmAttack_AttackOver_1 = require("./DtFsmAttack_AttackOver");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseAttackJudge_1 = require("./DtFsmAttack_DefenseAttackJudge");
class DtFsmAttack_DefenseAttackAfterEffect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
    }
    Excute() {
        let oppPlayer = this.GetMachine().attackPlayer.GetOppPlayer();
        this.GetMachine().defAttackCount++;
        if (this.GetMachine().atkCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA &&
            this.GetMachine().atkCard.GetLastPower() > this.GetMachine().defAttackCount &&
            oppPlayer.areaDefense.CardCount() > 0) {
            this.GetMachine().ChangeState(DtFsmAttack_DefenseAttackJudge_1.DtFsmAttack_DefenseAttackJudge.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmAttack_AttackOver_1.DtFsmAttack_AttackOver.name);
        }
    }
}
exports.DtFsmAttack_DefenseAttackAfterEffect = DtFsmAttack_DefenseAttackAfterEffect;
//# sourceMappingURL=DtFsmAttack_DefenseAttackAfterEffect.js.map