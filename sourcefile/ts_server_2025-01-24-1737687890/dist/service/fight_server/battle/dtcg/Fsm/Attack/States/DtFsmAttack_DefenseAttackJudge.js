"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack_DefenseAttackJudge = void 0;
const Long_1 = require("../../../../../cmn/proto/Long");
const DtEffectType_1 = require("../../../Card/Effect/DtEffectType");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtChainFunc_1 = require("../../../System/DtChainFunc");
const DtFsmAttackEnum_1 = require("../DtFsmAttackEnum");
const DtFsmAttack_BaseState_1 = require("./DtFsmAttack_BaseState");
const DtFsmAttack_DefenseAttackTriggerEffect_1 = require("./DtFsmAttack_DefenseAttackTriggerEffect");
class DtFsmAttack_DefenseAttackJudge extends DtFsmAttack_BaseState_1.DtFsmAttack_BaseState {
    state = 0;
    needDefenseJudge = true;
    defCard;
    oppPlayer;
    Enter() {
        this.needDefenseJudge = true;
        this.state = 0;
        this.CheckIsOver();
    }
    CheckIsOver() {
        if (this.GetMachine().atkCard.GetLastPower() <= 0) {
            this.GetMachine().AttackOver();
            return;
        }
        let oppPlayer = this.GetMachine().attackPlayer.GetOppPlayer();
        if (oppPlayer.areaDefense.CardCount() == 0) {
            this.GetMachine().ClientShowAttackJudge(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, true);
            this.GetMachine().GameOver();
            this.GetMachine().manager.GameOver(this.GetMachine().attackPlayer, DtEnum_1.DtGameOverReason.ATTACK_LAST);
            return;
        }
        this.GetMachine().ClientShowAttackJudge(DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack, false);
        let oppCard = oppPlayer.areaDefense.GetTopCard();
        this.defCard = oppCard;
        this.oppPlayer = oppPlayer;
        this.GetMachine().defenseAreaCard = oppCard;
        let card = new Array();
        card.push(this.defCard.uid);
        card.push(Long_1.Long.fromNumber(this.defCard.config.id));
        let dp = this.defCard.GetLastDP();
        let defEff = this.defCard.GetFirstEffectWithTrigtgerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        let needLeft = 0;
        if (defEff != null) {
            if (defEff.name != DtEnum_1.EFFECT_NAME.ROLE_DEFENSE_TO_BATTLE && defEff.name != DtEnum_1.EFFECT_NAME.DELAY_MAGIC_DEFENSE_TO_BATTLE
                && defEff.name != DtEnum_1.EFFECT_NAME.DEFENSE_TO_HAND) {
                if (this.CanActivateDefenseEffect(this.defCard)) {
                    needLeft = 1;
                }
            }
        }
        if (this.defCard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            needLeft = 1;
        }
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(oppPlayer, DtMessageData_1.ClientShowType.ShowDefenseCard, card, dp + "_" + needLeft);
    }
    Excute() {
        this.state++;
        switch (this.state) {
            case 1:
                this.GetMachine().manager.OnCardMoveTo(null, this.defCard, DtEnum_1.DtAreaType.WAIT, DtMessageData_1.DtProtoEnum_MoveReason.DefenseExcavatedWait);
                this.GetMachine().manager.ImmediatelyCreateCurrentNewChain();
                this.GetMachine().manager.SetFunc(new DtChainFunc_1.DtChainFunc(this, () => {
                    this.GetMachine().manager.GetSystemChain().ReduceWaitFuncFrame();
                }));
                this.GetMachine().manager.ImmediatelyCreateCurrentNewChain();
                this.TriggerDefenseEffect(this.defCard);
                this.GetMachine().manager.ImmediatelyCreateCurrentNewChain();
                if (this.defCard.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
                    let cfun = new DtChainFunc_1.DtChainFunc(this, () => {
                        if (this.defCard) {
                            if (this.defCard.whereAreaType == DtEnum_1.DtAreaType.WAIT) {
                                this.GetMachine().manager.OnCardMoveTo(null, this.defCard, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.DefenseOverToGy);
                            }
                        }
                    });
                    cfun.wait = 1;
                    this.GetMachine().manager.SetFunc(cfun);
                }
                break;
            case 2:
                break;
            case 3:
                if (this.needDefenseJudge) {
                    this.DefenseJudge();
                }
                break;
            case 4:
                let msg = new DtEventMsg_1.DtMsg_BattleInfo(this.GetMachine().atkCard, this.defCard);
                msg.atkType = DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack;
                this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BattleOver, msg);
                break;
            case 5:
                if (this.defCard) {
                    if (this.defCard.whereAreaType == DtEnum_1.DtAreaType.WAIT) {
                        this.GetMachine().manager.OnCardMoveTo(null, this.defCard, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.DefenseOverToGy);
                    }
                }
                break;
            case 6:
                this.GetMachine().ChangeState(DtFsmAttack_DefenseAttackTriggerEffect_1.DtFsmAttack_DefenseAttackTriggerEffect.name);
                break;
        }
    }
    SkipDefenseAttackJudge() {
        this.needDefenseJudge = false;
    }
    DefenseJudge() {
        if (this.defCard.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
            return;
        }
        if (this.GetMachine().atkCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            if (this.GetMachine().atkCard.HasBuff(DtEnum_1.DtBuffType.DISTURB) == false) {
                this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(this.GetMachine().attackPlayer, DtMessageData_1.ClientShowType.ATTACK_DEFENSE_DP_CHECK, [this.GetMachine().atkCard.uid, this.defCard.uid], "");
                if (this.GetMachine().atkCard.GetLastDP() <= this.defCard.GetLastDP()) {
                    this.GetMachine().manager.OnCardAttackDestroy(this.defCard, this.GetMachine().atkCard);
                }
            }
            else {
                if (this.GetMachine().atkCard.GetLastDP() <= this.defCard.GetLastDP()) {
                    this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(this.GetMachine().attackPlayer, DtMessageData_1.ClientShowType.Card_Effect_DISTURB, [this.GetMachine().atkCard.uid], "");
                }
            }
        }
    }
    TriggerDefenseEffect(oppCard) {
        if (this.CanActivateDefenseEffect(oppCard) == false) {
            if (oppCard.HasEffectWithTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect)) {
                this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(this.GetMachine().atkCard.GetPlayer(), DtMessageData_1.ClientShowType.Card_Activate_Effect, [this.GetMachine().atkCard.uid], "0");
                this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(oppCard.GetPlayer(), DtMessageData_1.ClientShowType.NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC, [oppCard.uid], "");
            }
            return;
        }
        oppCard.OnDefenseEffect();
    }
    CanActivateDefenseEffect(card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
            if (this.GetMachine().atkCard.HasBuff(DtEnum_1.DtBuffType.NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC)) {
                return false;
            }
        }
        return true;
    }
    Clear() {
        super.Clear();
        this.defCard = null;
        this.oppPlayer = null;
    }
}
exports.DtFsmAttack_DefenseAttackJudge = DtFsmAttack_DefenseAttackJudge;
//# sourceMappingURL=DtFsmAttack_DefenseAttackJudge.js.map