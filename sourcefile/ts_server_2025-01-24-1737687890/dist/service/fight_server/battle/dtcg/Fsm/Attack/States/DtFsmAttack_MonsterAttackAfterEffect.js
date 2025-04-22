"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_MonsterAttackAfterEffect = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmAttackEnum_1 = require("../DtFsmAttackEnum");
const DtFsmAttack_AttackOver_1 = require("./DtFsmAttack_AttackOver");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseAttackJudge_1 = require("./DtFsmAttack_DefenseAttackJudge");
class DtFsmAttack_MonsterAttackAfterEffect extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    Enter() {
        let msg = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
        msg.atkType = DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack;
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BattleOver, msg);
    }
    Excute() {
        if (this.GetMachine().atkCard.HasBuff(DtEnum_1.DtBuffType.PENETRATE)) {
            if (this.GetMachine().atkCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                if (this.GetMachine().defCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                    if (this.GetMachine().defCard.lastEffectedType == DtEnum_1.DtActionEffectType.AttackDestroy) {
                        let oppPlayer = this.GetMachine().attackPlayer.GetOppPlayer();
                        if (oppPlayer.areaDefense.CardCount() != 0) {
                            this.GetMachine().ChangeState(DtFsmAttack_DefenseAttackJudge_1.DtFsmAttack_DefenseAttackJudge.name);
                            this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(this.GetMachine().attackPlayer, DtMessageData_1.ClientShowType.Card_Effect_PENETRATE, [this.GetMachine().atkCard.uid], "");
                            return;
                        }
                    }
                }
            }
        }
        this.GetMachine().ChangeState(DtFsmAttack_AttackOver_1.DtFsmAttack_AttackOver.name);
    }
}
exports.DtFsmAttack_MonsterAttackAfterEffect = DtFsmAttack_MonsterAttackAfterEffect;
//# sourceMappingURL=DtFsmAttack_MonsterAttackAfterEffect.js.map