"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_WhenAttackingEffect = void 0;
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseSelect_1 = require("./DtFsmAttack_DefenseSelect");
class DtFsmAttack_WhenAttackingEffect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        let battleInfo = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
        battleInfo.atkType = this.GetMachine().attackType;
        this.GetMachine().atkCard.OnWhenAttacking(battleInfo);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.WhenAttacking, battleInfo);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.WhenOppAttacking, battleInfo);
    }
    Excute() {
        this.GetMachine().ChangeState(DtFsmAttack_DefenseSelect_1.DtFsmAttack_DefenseSelect.name);
    }
}
exports.DtFsmAttack_WhenAttackingEffect = DtFsmAttack_WhenAttackingEffect;
//# sourceMappingURL=DtFsmAttack_WhenAttackingEffect.js.map