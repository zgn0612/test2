"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_DefenseSelect = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_CheckCanDoAttack_1 = require("./DtFsmAttack_CheckCanDoAttack");
class DtFsmAttack_DefenseSelect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        if (this.GetMachine().atkCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            this.GetMachine().AttackOver();
            return;
        }
        if (this.DefenseJudge() == false) {
            this.GetMachine().ChangeState(DtFsmAttack_CheckCanDoAttack_1.DtFsmAttack_CheckCanDoAttack.name);
        }
    }
    DefenseJudge() {
        if (this.GetMachine().atkCard.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_BLOCKER)) {
            return false;
        }
        let msg = new DtEventMsg_1.DtMsg_HitterChoose(this.GetMachine().atkCard, this.GetMachine().defCard, this.GetMachine().attackType);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BlockerSelect, msg);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BlockerSelectOver, msg);
        if (msg.GetDefense().length == 0) {
            return false;
        }
        else {
            let opponent = this.GetMachine().manager.GetOppPlayer(this.GetMachine().atkCard.parent.playerId);
            this.GetMachine().manager.Get2ClientMessageMgr().PlayerdDefenseSelect(opponent, this.GetMachine().atkCard, this.GetMachine().attackType, msg.GetDefense());
            this.GetMachine().listSelect = msg.GetDefense();
            return true;
        }
    }
    Excute() {
        this.GetMachine().manager.SetGameWaitPlayer();
    }
}
exports.DtFsmAttack_DefenseSelect = DtFsmAttack_DefenseSelect;
//# sourceMappingURL=DtFsmAttack_DefenseSelect.js.map