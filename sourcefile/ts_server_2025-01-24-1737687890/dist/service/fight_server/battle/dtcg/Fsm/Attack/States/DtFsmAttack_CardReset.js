"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_CardReset = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmAttackEnum_1 = require("../DtFsmAttackEnum");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_WhenAttackingEffect_1 = require("./DtFsmAttack_WhenAttackingEffect");
class DtFsmAttack_CardReset extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        let showCards = new Array();
        showCards.push(this.GetMachine().atkCard.uid);
        if (this.GetMachine().defCard) {
            showCards.push(this.GetMachine().defCard.uid);
        }
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(this.GetMachine().attackPlayer, DtMessageData_1.ClientShowType.CardAttack, showCards, "");
        this.GetMachine().manager.OnSetCardResetState(null, this.GetMachine().atkCard, DtMessageData_1.DtProtoEnum_MoveReason.AttackReset);
        this.GetMachine().atkCard.GetPlayer().roundData.AddPlayerAttack();
        this.GetMachine().atkCard.GetPlayer().roundData.AddLogCount(DtEnum_1.DtPlayerLogType.Attack);
        if (this.GetMachine().attackType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            this.GetMachine().atkCard.GetPlayer().roundData.AddLogCount(DtEnum_1.DtPlayerLogType.AttackDefense);
        }
    }
    Excute() {
        let battleInfo = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
        battleInfo.atkType = this.GetMachine().attackType;
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.AttackDeclare, battleInfo);
        this.GetMachine().ChangeState(DtFsmAttack_WhenAttackingEffect_1.DtFsmAttack_WhenAttackingEffect.name);
    }
}
exports.DtFsmAttack_CardReset = DtFsmAttack_CardReset;
//# sourceMappingURL=DtFsmAttack_CardReset.js.map