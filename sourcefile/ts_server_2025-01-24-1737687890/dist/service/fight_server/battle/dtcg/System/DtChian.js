"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtChian = void 0;
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEffect_1 = require("../Card/Effect/DtEffect");
const DtEffectType_1 = require("../Card/Effect/DtEffectType");
const DtEnum_1 = require("../Data/DtEnum");
const DtFsmActionEffectManager_1 = require("../Fsm/ActionEffect/DtFsmActionEffectManager");
const DtFsmEvolution_1 = require("../Fsm/Evolution/DtFsmEvolution");
const DtFsmUseCard_1 = require("../Fsm/UseCard/DtFsmUseCard");
const DtFsmUseCard_UseCard_Magic_process_move_gy_1 = require("../Fsm/UseCard/states/DtFsmUseCard_UseCard_Magic_process_move_gy");
class DtChian {
    parent;
    currentExecuteBeforeTrigger;
    listTriggerEffect;
    curTriggers;
    fsmActionMgr;
    playerSelect;
    fsmEvo;
    fsmUseCard;
    funcs;
    isHighPriority = false;
    useFulTriggers;
    constructor(system) {
        this.parent = system;
        this.fsmActionMgr = new DtFsmActionEffectManager_1.DtFsmActionEffectManager(this.parent.manager);
        this.playerSelect = new Array();
        this.curTriggers = new Array();
        this.useFulTriggers = new Array();
    }
    OnChainActionEffectAndEvo(showlog) {
        if (this.fsmActionMgr.IsRunning()) {
            this.fsmActionMgr.OnTick();
            if (showlog) {
                this.fsmActionMgr.ShowLog();
            }
            return true;
        }
        if (this.fsmEvo != null) {
            if (this.fsmEvo.IsRunning()) {
                this.fsmEvo.OnTick();
                if (showlog) {
                    this.fsmEvo.ShowLog();
                }
                return true;
            }
        }
        return false;
    }
    RunFunc() {
        if (this.funcs && this.funcs.length > 0) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].Run();
            }
            this.funcs = null;
            return true;
        }
        return false;
    }
    OnChainUseNotMagicCard(showlog) {
        if (this.fsmUseCard != null) {
            if (this.fsmUseCard.IsRunning() && this.fsmUseCard.card.CardTypeIs(DtEnum_1.DtCardType.Magic) == false) {
                this.fsmUseCard.OnTick();
                if (showlog) {
                    this.fsmUseCard.ShowLog();
                }
                return true;
            }
        }
        return false;
    }
    OnChainUseMagicCard_Process_cardEffect(showlog) {
        if (this.fsmUseCard != null) {
            if (this.fsmUseCard.IsRunning() && this.fsmUseCard.card.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
                if (this.fsmUseCard.GetCurrentState().stateName != DtFsmUseCard_UseCard_Magic_process_move_gy_1.DtFsmUseCard_UseCard_Magic_process_move_gy.name) {
                    this.fsmUseCard.OnTick();
                    if (showlog) {
                        this.fsmUseCard.ShowLog();
                    }
                    return true;
                }
            }
        }
        return false;
    }
    OnEndChainUseCard(showlog) {
        if (this.fsmUseCard != null) {
            if (this.fsmUseCard.IsRunning()) {
                this.fsmUseCard.OnTick();
                if (showlog) {
                    this.fsmUseCard.ShowLog();
                }
                return true;
            }
        }
        return false;
    }
    OnChainBeforeExecuteTrigger(showlog) {
        if (this.currentExecuteBeforeTrigger != null) {
            if (this.currentExecuteBeforeTrigger.IsOver()) {
                let trigger = this.currentExecuteBeforeTrigger;
                this.currentExecuteBeforeTrigger = null;
                if (trigger.GetTriggerType() != DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange) {
                    this.parent.manager.UpdateGameBattleInfo();
                }
                this.parent.manager.CheckBattlefieldDigimon();
            }
            else {
                this.currentExecuteBeforeTrigger.OnTick();
            }
            if (showlog) {
                this.currentExecuteBeforeTrigger.effect.ShowLog();
            }
            return true;
        }
        return false;
    }
    OnTick(showlog) {
        if (showlog)
            _Dcg_1.gLog.err("[Dtchian] OnTick");
        for (let i = this.listTriggerEffect.length - 1; i >= 0; i--) {
            if (this.listTriggerEffect[i].IsOver()) {
                this.listTriggerEffect.splice(i, 1);
            }
        }
        if (this.listTriggerEffect != null) {
            if (this.listTriggerEffect.length > 0) {
                let count = this.listTriggerEffect.length;
                for (let i = count - 1; i >= 0; i--) {
                    if (this.listTriggerEffect[i].CheckActivatePosition()) {
                        if (this.listTriggerEffect[i].effectDirect) {
                            if (this.listTriggerEffect[i].CheckAllCondition()) {
                                let trigger = this.listTriggerEffect[i];
                                this.listTriggerEffect.splice(i, 1);
                                this.ActivateCardEffect(trigger, true);
                                return;
                            }
                        }
                    }
                }
            }
        }
        this.curTriggers.length = 0;
        for (let i = this.listTriggerEffect.length - 1; i >= 0; i--) {
            if (this.listTriggerEffect[i].CheckActivatePosition()) {
                this.curTriggers.push(this.listTriggerEffect[i]);
            }
        }
        if (showlog) {
            _Dcg_1.gLog.err("[DtChian] this.curTriggers lenght =>" + this.curTriggers.length);
            for (let i = 0; i < this.curTriggers.length; i++) {
                this.curTriggers[i].effect.ShowLog();
            }
        }
        if (this.PlayerSelectEffectActive(this.parent.manager.CurPlayerID)) {
            return;
        }
        if (this.PlayerSelectEffectActive(this.parent.manager.CurOppPlayerID)) {
            return;
        }
        this.listTriggerEffect.length = 0;
    }
    PlayerSelectEffectActive(activePlayerId) {
        this.playerSelect.length = 0;
        this.useFulTriggers.length = 0;
        let forceClientChoose = false;
        for (let i = 0; i < this.curTriggers.length; i++) {
            if (this.curTriggers[i].parent.parent.PlayerIdEquals(activePlayerId)) {
                this.playerSelect.push(this.curTriggers[i]);
                if (this.curTriggers[i].ChainCheckCondition() && this.curTriggers[i].PreCheckPlayerUsefulActivate()) {
                    this.useFulTriggers.push(this.curTriggers[i]);
                }
                if (this.curTriggers[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnOnce) || this.curTriggers[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnMore)) {
                    if (this.curTriggers[i].HasCondition()) {
                        forceClientChoose = true;
                    }
                }
            }
        }
        if (this.useFulTriggers.length > 0) {
            if (this.playerSelect.length == 1) {
                forceClientChoose = false;
            }
            if (this.useFulTriggers[0].GetActiveNeedAsk() || forceClientChoose) {
                this.parent.manager.Get2ClientMessageMgr().PlayerSelectEffectActivate(this.playerSelect[0].parent.parent, this.playerSelect);
                this.parent.waitPlayerChooseChain = this;
            }
            else {
                if (this.useFulTriggers.length == 1) {
                    let trigger = this.RemoveEffect(this.useFulTriggers[0]);
                    if (trigger.ChainCheckCondition()) {
                        this.ActivateCardEffect(trigger, false);
                    }
                }
                else {
                    let isSame = true;
                    let first = this.useFulTriggers[0];
                    for (let i = 1; i < this.useFulTriggers.length; i++) {
                        if (this.useFulTriggers[i].GetCreateor().EffectCreatorConstructorName != first.GetCreateor().EffectCreatorConstructorName) {
                            isSame = false;
                            break;
                        }
                        if (this.useFulTriggers[i].effect.effectIndex != first.effect.effectIndex) {
                            isSame = false;
                            break;
                        }
                    }
                    if (isSame) {
                        let trigger = this.RemoveEffect(this.useFulTriggers[0]);
                        if (trigger.ChainCheckCondition()) {
                            this.ActivateCardEffect(trigger, false);
                        }
                    }
                    else {
                        this.parent.manager.Get2ClientMessageMgr().PlayerSelectEffectActivate(this.playerSelect[0].parent.parent, this.playerSelect);
                        this.parent.waitPlayerChooseChain = this;
                    }
                }
            }
            return true;
        }
        for (let i = 0; i < this.playerSelect.length; i++) {
            if (this.playerSelect[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnOnce) || this.playerSelect[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnMore)) {
                if (this.playerSelect[i].GetActiveNeedAsk() == false) {
                    let trigger = this.RemoveEffect(this.playerSelect[0]);
                    if (trigger.ChainCheckCondition()) {
                        this.ActivateCardEffect(trigger, false);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    ActivateCardEffect(trigger, canimmediate) {
        if (trigger.OnEffect(canimmediate)) {
            if (this.isHighPriority) {
                this.currentExecuteBeforeTrigger = trigger;
            }
            else {
                this.parent.ActivateNormalEffectTrigger(trigger);
            }
        }
        else {
            if (trigger.GetTriggerType() != DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange) {
                this.parent.manager.UpdateGameBattleInfo();
            }
            this.parent.manager.CheckBattlefieldDigimon();
        }
        if (this.isHighPriority) {
            trigger.effect.chianId = this.parent.chainId;
        }
        else {
            this.parent.chainId = trigger.currentChainId;
        }
    }
    RemoveEffect(eff) {
        for (let i = 0; i < this.listTriggerEffect.length; i++) {
            if (this.listTriggerEffect[i] == eff) {
                this.listTriggerEffect[i].effect.PlayerChooseCancelActivate();
                this.listTriggerEffect.splice(i, 1);
                break;
            }
        }
        return eff;
    }
    IsOver() {
        if (this.fsmActionMgr.IsRunning()) {
            return false;
        }
        if (this.funcs && this.funcs.length > 0) {
            return false;
        }
        if (this.fsmEvo != null) {
            if (this.fsmEvo.IsRunning()) {
                return false;
            }
        }
        if (this.fsmUseCard != null) {
            if (this.fsmUseCard.IsRunning()) {
                return false;
            }
        }
        if (this.listTriggerEffect && this.listTriggerEffect.length > 0) {
            return false;
        }
        if (this.currentExecuteBeforeTrigger != null) {
            return false;
        }
        return true;
    }
    SetCardsActiveEffect(effs) {
        this.listTriggerEffect = effs;
    }
    CanSetFsmAction(player, casterCard, effType) {
        return this.fsmActionMgr.CanPushEffect(player, casterCard, effType);
    }
    SetCardFsmActionEffect(player, casterCard, receiveCard, effType, param) {
        return this.fsmActionMgr.SetCardBeEffect(player, casterCard, receiveCard, effType, param);
    }
    PushCardFsmActionEffect(player, casterCard, receiveCard, effType, param) {
        return this.fsmActionMgr.PushCardBeEffect(player, casterCard, receiveCard, effType, param);
    }
    SetEvo(player, evoCard, oriCard, cost) {
        if (this.fsmEvo == null) {
            this.fsmEvo = new DtFsmEvolution_1.DtFsmEvolution(this.parent.manager);
        }
        this.fsmEvo.SetEvo(player, evoCard, oriCard, cost);
        return this.fsmEvo;
    }
    SetFusionEvolution(player, evoCard, topCard, bottomCard, cost) {
        if (this.fsmEvo == null) {
            this.fsmEvo = new DtFsmEvolution_1.DtFsmEvolution(this.parent.manager);
        }
        this.fsmEvo.SetFusionEvo(player, evoCard, topCard, bottomCard, cost);
    }
    SetPlayerUseCard(caster, player, card, useCost, onEffect, reason) {
        if (this.fsmUseCard == null) {
            this.fsmUseCard = new DtFsmUseCard_1.DtFsmUseCard(this.parent.manager);
        }
        this.fsmUseCard.SetUseCard(caster, player, card, useCost, onEffect, reason);
        return this.fsmUseCard;
    }
    SetFunc(func) {
        if (this.funcs == null) {
            this.funcs = new Array();
        }
        this.funcs.push(func);
    }
    OnPlayerChooseOne(uid) {
        if (this.fsmActionMgr.IsRunning()) {
            if (this.fsmActionMgr.OnPlayerChoose(uid)) {
                return true;
            }
        }
        if (this.currentExecuteBeforeTrigger != null) {
            this.currentExecuteBeforeTrigger.OnPlayerChooseOne(uid);
            return true;
        }
        return false;
    }
    OnPlayerChooseMul(uids) {
        if (this.currentExecuteBeforeTrigger != null) {
            this.currentExecuteBeforeTrigger.OnPlayerChooseMul(uids);
            return true;
        }
        return false;
    }
    OnPlayerChooseEffectActivateSortOrCancel(activates, cancels) {
        if (cancels && cancels.length > 0) {
            for (let i = 0; i < cancels.length; i++) {
                this.RemoveEffectWithPlayerChoose(cancels[i]);
            }
        }
        if (activates && activates.length > 0) {
            let effect = this.GetEffectWithPlayerChoose(activates[0]);
            if (effect) {
                let trigger = this.RemoveEffect(effect);
                if (trigger.ChainCheckCondition()) {
                    this.ActivateCardEffect(trigger, false);
                }
                this.playerSelect.length = 0;
            }
        }
    }
    GetEffectWithPlayerChoose(effectidx) {
        for (let i = 0; i < this.playerSelect.length; i++) {
            if (effectidx == this.playerSelect[i].EffectIndex) {
                return this.playerSelect[i];
            }
        }
        return null;
    }
    RemoveEffectWithPlayerChoose(cancelIndx) {
        for (let i = 0; i < this.playerSelect.length; i++) {
            if (this.playerSelect[i].GetActiveNeedAsk() == true) {
                if (cancelIndx == 0 || this.playerSelect[i].EffectIndex == cancelIndx) {
                    this.RemoveEffect(this.playerSelect[i]);
                }
            }
        }
    }
    UpdateTriggerEffectEvoCard(evoCard, oriCard) {
        if (this.listTriggerEffect != null && this.listTriggerEffect.length > 0) {
            for (let i = this.listTriggerEffect.length - 1; i >= 0; i--) {
                if (this.listTriggerEffect[i].parent == oriCard) {
                    let effect = this.GetSameEffect(evoCard, this.listTriggerEffect[i]);
                    if (effect != null) {
                        effect.SetCardInTrigger();
                    }
                }
            }
        }
    }
    GetSameEffect(evocard, oriEffect) {
        for (let i = 0; i < evocard.effects.length; i++) {
            if (evocard.effects[i].GetCreateor() == oriEffect.GetCreateor()) {
                if (evocard.effects[i].triggerType == oriEffect.GetTriggerType()) {
                    oriEffect.effect = evocard.effects[i];
                    return oriEffect;
                }
            }
            else {
                if (evocard.effects[i].GetCreateor().originCard == null) {
                    if (evocard.effects[i].GetCreateor().EffectCreatorConstructorName == oriEffect.GetCreateor().EffectCreatorConstructorName) {
                        if (evocard.effects[i].IsOver() == true) {
                            oriEffect.effect = evocard.effects[i];
                            return oriEffect;
                        }
                    }
                }
            }
        }
        return null;
    }
    Clear() {
        if (this.fsmActionMgr) {
            this.fsmActionMgr.Clear();
            this.fsmActionMgr = null;
        }
        if (this.fsmEvo) {
            this.fsmEvo.Clear();
            this.fsmEvo = null;
        }
        if (this.fsmUseCard) {
            this.fsmUseCard.Clear();
            this.fsmUseCard = null;
        }
        this.funcs = null;
        this.currentExecuteBeforeTrigger = null;
    }
}
exports.DtChian = DtChian;
//# sourceMappingURL=DtChian.js.map