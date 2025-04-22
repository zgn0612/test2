"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_MonsterAttackJudge = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmAttackEnum_1 = require("../DtFsmAttackEnum");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtfsmAttack_MonsterAttackTriggerEffect_1 = require("./DtfsmAttack_MonsterAttackTriggerEffect");
class DtFsmAttack_MonsterAttackJudge extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    state = 0;
    Enter() {
        this.GetMachine().ClientShowAttackJudge(DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, false);
        this.state = 0;
    }
    Excute() {
        this.state++;
        switch (this.state) {
            case 1:
                {
                    let battleInfo = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
                    battleInfo.atkType = this.GetMachine().attackType;
                    this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BeforeAtkJudge, battleInfo);
                }
                break;
            case 2:
                let atkCard = this.GetMachine().atkCard;
                let defCard = this.GetMachine().defCard;
                if (atkCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_WIN_WITH_COMPARE_ORIGINCOUNT) || defCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_WIN_WITH_COMPARE_ORIGINCOUNT)) {
                    this.DamageCalOriginCount(atkCard, defCard);
                }
                else {
                    this.DamageCalDP(atkCard, defCard);
                }
                break;
            case 3:
                {
                    let afterMsg = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.GetMachine().defCard);
                    afterMsg.atkType = this.GetMachine().attackType;
                    this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.AfterAtkJudge, afterMsg);
                }
                break;
            case 4:
                this.GetMachine().ChangeState(DtfsmAttack_MonsterAttackTriggerEffect_1.DtfsmAttack_MonsterAttackTriggerEffect.name);
                break;
            default:
                _Dcg_1.gLog.err("DtFsmAttack_MonsterAttackJudge error");
                break;
        }
    }
    DamageCalDP(atkCard, defCard) {
        if (atkCard.GetLastDP() > defCard.GetLastDP()) {
            this.GetMachine().manager.OnCardAttackDestroy(atkCard, defCard);
        }
        else if (atkCard.GetLastDP() < defCard.GetLastDP()) {
            this.GetMachine().manager.OnCardAttackDestroy(defCard, atkCard);
        }
        else {
            this.GetMachine().manager.OnCardAttackDestroy(atkCard, defCard);
            this.GetMachine().manager.OnCardAttackDestroy(defCard, atkCard);
        }
    }
    DamageCalOriginCount(atkCard, defCard) {
        if (atkCard.GetOriginDigimonCount() > defCard.GetOriginDigimonCount()) {
            this.GetMachine().manager.OnCardAttackDestroy(atkCard, defCard);
        }
        else if (atkCard.GetOriginDigimonCount() < defCard.GetOriginDigimonCount()) {
            this.GetMachine().manager.OnCardAttackDestroy(defCard, atkCard);
        }
        else {
            this.GetMachine().manager.OnCardAttackDestroy(atkCard, defCard);
            this.GetMachine().manager.OnCardAttackDestroy(defCard, atkCard);
        }
    }
}
exports.DtFsmAttack_MonsterAttackJudge = DtFsmAttack_MonsterAttackJudge;
//# sourceMappingURL=DtFsmAttack_MonsterAttackJudge.js.map