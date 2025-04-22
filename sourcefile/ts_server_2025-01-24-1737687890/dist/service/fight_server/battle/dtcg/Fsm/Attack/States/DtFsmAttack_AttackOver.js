"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_AttackOver = void 0;
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_Init_1 = require("./DtFsmAttack_Init");
class DtFsmAttack_AttackOver extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        let msg = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
        msg.atkType = this.GetMachine().attackType;
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.AttackOver, msg);
    }
    Excute() {
        this.GetMachine().ChangeState(DtFsmAttack_Init_1.DtFsmAttack_Init.name);
        this.GetMachine().ClientShowAttackOver();
    }
}
exports.DtFsmAttack_AttackOver = DtFsmAttack_AttackOver;
//# sourceMappingURL=DtFsmAttack_AttackOver.js.map