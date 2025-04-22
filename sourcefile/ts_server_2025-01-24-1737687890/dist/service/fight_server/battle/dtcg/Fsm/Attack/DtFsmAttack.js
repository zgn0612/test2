"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmAttack = void 0;
const Long_1 = require("../../../../cmn/proto/Long");
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtFsmBaseMachine_1 = require("../Base/DtFsmBaseMachine");
const DtFsmAttackEnum_1 = require("./DtFsmAttackEnum");
const DtFsmAttack_AttackOver_1 = require("./States/DtFsmAttack_AttackOver");
const DtFsmAttack_CardReset_1 = require("./States/DtFsmAttack_CardReset");
const DtFsmAttack_CheckCanDoAttack_1 = require("./States/DtFsmAttack_CheckCanDoAttack");
const DtFsmAttack_DefenseAttackAfterEffect_1 = require("./States/DtFsmAttack_DefenseAttackAfterEffect");
const DtFsmAttack_DefenseAttackJudge_1 = require("./States/DtFsmAttack_DefenseAttackJudge");
const DtFsmAttack_DefenseAttackTriggerEffect_1 = require("./States/DtFsmAttack_DefenseAttackTriggerEffect");
const DtFsmAttack_DefenseSelect_1 = require("./States/DtFsmAttack_DefenseSelect");
const DtFsmAttack_Init_1 = require("./States/DtFsmAttack_Init");
const DtFsmAttack_MonsterAttackAfterEffect_1 = require("./States/DtFsmAttack_MonsterAttackAfterEffect");
const DtFsmAttack_MonsterAttackJudge_1 = require("./States/DtFsmAttack_MonsterAttackJudge");
const DtfsmAttack_MonsterAttackTriggerEffect_1 = require("./States/DtfsmAttack_MonsterAttackTriggerEffect");
const DtFsmAttack_WhenAttackingEffect_1 = require("./States/DtFsmAttack_WhenAttackingEffect");
class DtFsmAttack extends DtFsmBaseMachine_1.DtFsmBaseMachine {
    attackPlayer;
    atkCard;
    defCard;
    attackType;
    defenseAreaCard;
    listSelect;
    defAttackCount = 0;
    InitAddStates() {
        this.AddState(DtFsmAttack_Init_1.DtFsmAttack_Init);
        this.AddState(DtFsmAttack_CardReset_1.DtFsmAttack_CardReset);
        this.AddState(DtFsmAttack_WhenAttackingEffect_1.DtFsmAttack_WhenAttackingEffect);
        this.AddState(DtFsmAttack_DefenseSelect_1.DtFsmAttack_DefenseSelect);
        this.AddState(DtFsmAttack_CheckCanDoAttack_1.DtFsmAttack_CheckCanDoAttack);
        this.AddState(DtFsmAttack_MonsterAttackJudge_1.DtFsmAttack_MonsterAttackJudge);
        this.AddState(DtfsmAttack_MonsterAttackTriggerEffect_1.DtfsmAttack_MonsterAttackTriggerEffect);
        this.AddState(DtFsmAttack_MonsterAttackAfterEffect_1.DtFsmAttack_MonsterAttackAfterEffect);
        this.AddState(DtFsmAttack_DefenseAttackJudge_1.DtFsmAttack_DefenseAttackJudge);
        this.AddState(DtFsmAttack_DefenseAttackTriggerEffect_1.DtFsmAttack_DefenseAttackTriggerEffect);
        this.AddState(DtFsmAttack_DefenseAttackAfterEffect_1.DtFsmAttack_DefenseAttackAfterEffect);
        this.AddState(DtFsmAttack_AttackOver_1.DtFsmAttack_AttackOver);
        this.SetInitState(DtFsmAttack_Init_1.DtFsmAttack_Init.name);
    }
    SetAttack(atkPlayer, atkCard, defCard, type) {
        this.attackPlayer = atkPlayer;
        this.atkCard = atkCard;
        this.defCard = defCard;
        this.attackType = type;
        this.defAttackCount = 0;
        this.ChangeState(DtFsmAttack_CardReset_1.DtFsmAttack_CardReset.name);
    }
    IsRunning() {
        return this.GetCurrentState().stateName != DtFsmAttack_Init_1.DtFsmAttack_Init.name || this.GetNextState() != null;
    }
    AttackOver() {
        if (this.IsRunning()) {
            this.ChangeState(DtFsmAttack_AttackOver_1.DtFsmAttack_AttackOver.name);
        }
    }
    IsDefenseSelectState() {
        return this.GetCurrentState().stateName == DtFsmAttack_DefenseSelect_1.DtFsmAttack_DefenseSelect.name && this.GetNextState() == null;
    }
    OnDefenseClick(uid) {
        if (uid == null || uid.toNumber() == 0) {
            this.ChangeState(DtFsmAttack_CheckCanDoAttack_1.DtFsmAttack_CheckCanDoAttack.name);
            return;
        }
        else {
            if (this.listSelect != null) {
                let card = null;
                for (let i = 0; i < this.listSelect.length; i++) {
                    if (this.listSelect[i].UidEquals(uid)) {
                        card = this.listSelect[i];
                        break;
                    }
                }
                if (card != null) {
                    this.manager.Get2ClientMessageMgr().ClientShow(card.GetPlayer(), DtMessageData_1.ClientShowType.Card_Activate_Effect, [card.uid], DtEnum_1.EFFECT_NAME.BLOCKER.toString());
                    this.manager.OnSetCardResetState(null, card, DtMessageData_1.DtProtoEnum_MoveReason.BlockReset);
                    if (this.defCard != card) {
                        this.atkCard.OnBeBlock();
                    }
                    this.ChangeAttackTarget(card);
                    this.defCard.GetPlayer().roundData.AddLogCount(DtEnum_1.DtPlayerLogType.Block);
                    this.ChangeState(DtFsmAttack_MonsterAttackJudge_1.DtFsmAttack_MonsterAttackJudge.name);
                    return;
                }
            }
        }
        this.AttackOver();
    }
    ChangeAttackTarget(card) {
        this.defCard = card;
        let showCards = new Array();
        showCards.push(this.defCard.uid);
        this.manager.Get2ClientMessageMgr().ClientShow(this.attackPlayer, DtMessageData_1.ClientShowType.CHANGE_ATTACK_TARGET, showCards, "");
    }
    SkipDefenseAttackJudge() {
        if (this.IsRunning()) {
            if (this.GetCurrentState() instanceof DtFsmAttack_DefenseAttackJudge_1.DtFsmAttack_DefenseAttackJudge) {
                this.GetCurrentState()?.SkipDefenseAttackJudge();
            }
        }
    }
    ClientShowAttackJudge(attackType, isOver) {
        let showCards = new Array();
        showCards.push(this.atkCard.uid);
        if (attackType == DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack) {
            if (this.defCard) {
                showCards.push(this.defCard.uid);
            }
        }
        if (isOver) {
            showCards.push(Long_1.Long.fromNumber(0));
        }
        this.manager.Get2ClientMessageMgr().ClientShow(this.attackPlayer, DtMessageData_1.ClientShowType.CardAttackJudge, showCards, "");
    }
    ClientShowAttackOver() {
        let showCards = new Array();
        showCards.push(this.atkCard.uid);
        if (this.defCard) {
            showCards.push(this.defCard.uid);
        }
        this.manager.Get2ClientMessageMgr().ClientShow(this.attackPlayer, DtMessageData_1.ClientShowType.CardAttackOver, showCards, "");
    }
    GameOver() {
        this.ChangeState(DtFsmAttack_Init_1.DtFsmAttack_Init.name);
        this.ClientShowAttackOver();
    }
    Clear() {
        super.Clear();
        this.atkCard = null;
        this.defCard = null;
    }
    ShowLog() {
        _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtFsmAttack] log cuurent state is {0} and atkCard name is {1} ", this.GetCurrentState().stateName, _Dcg_1.gCfg.language.GetLanguage(this.atkCard.config?.name)));
    }
}
exports.DtFsmAttack = DtFsmAttack;
//# sourceMappingURL=DtFsmAttack.js.map