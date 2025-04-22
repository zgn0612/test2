"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSystemChian = void 0;
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEffect_1 = require("../Card/Effect/DtEffect");
const DtEffectType_1 = require("../Card/Effect/DtEffectType");
const DtEventMsg_1 = require("../Data/DtEventMsg");
const DtEvent_1 = require("../DtEvent");
const DtChian_1 = require("./DtChian");
class DtSystemChian {
    chainId;
    SetEffectChainId;
    manager;
    listChian;
    activeChians;
    currentExecuteTrigger;
    waitEffects;
    waitHightEffects;
    waitFunc;
    waitPlayerChooseChain;
    constructor(manager) {
        this.chainId = 1;
        this.SetEffectChainId = 1;
        this.manager = manager;
        this.listChian = new Array();
        this.activeChians = new Array();
        this.waitEffects = new Array();
        this.waitHightEffects = new Array();
        this.waitFunc = new Array();
    }
    OnTick(showlog = false) {
        if (showlog) {
            _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtSystemChian] start on tick current active chian lenght is {0}", this.activeChians.length));
            if (this.currentExecuteTrigger != null) {
                this.currentExecuteTrigger.effect.ShowLog();
            }
            _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtSystemChian] start on tick current waitEffects lenght is {0}", this.waitEffects.length));
            _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtSystemChian] start on tick current waitHightEffects lenght is {0}", this.waitHightEffects.length));
        }
        if (this.activeChians.length > 0 || this.currentExecuteTrigger != null || this.waitEffects.length > 0 || this.waitHightEffects.length > 0 || this.waitFunc.length > 0) {
            let lastChain = this.activeChians[this.activeChians.length - 1];
            if (lastChain && lastChain.IsOver()) {
                this.activeChians.splice(this.activeChians.length - 1, 1);
                this.listChian.push(lastChain);
                return;
            }
            if (lastChain && lastChain.OnChainActionEffectAndEvo(showlog)) {
                return;
            }
            if (lastChain && lastChain.RunFunc()) {
                return;
            }
            if (lastChain && lastChain.OnChainUseNotMagicCard(showlog)) {
                return;
            }
            if (lastChain && lastChain.OnChainUseMagicCard_Process_cardEffect(showlog)) {
                return;
            }
            if (lastChain && lastChain.OnChainBeforeExecuteTrigger(showlog)) {
                return;
            }
            if (lastChain && lastChain.isHighPriority) {
                lastChain.OnTick(showlog);
                return;
            }
            if (showlog) {
                _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtSystemChian] lastChain chain over"));
            }
            if (this.currentExecuteTrigger != null) {
                if (this.currentExecuteTrigger.IsOver()) {
                    let trigger = this.currentExecuteTrigger;
                    this.currentExecuteTrigger = null;
                    if (trigger.GetTriggerType() != DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange) {
                        this.manager.UpdateGameBattleInfo();
                    }
                    this.manager.CheckBattlefieldDigimon();
                    this.manager.FireListener(DtEvent_1.DtEventType.ChainEffectOver, new DtEventMsg_1.DtMsg_ChainEffectOver(trigger.currentChainId));
                }
                else {
                    this.currentExecuteTrigger.OnTick();
                }
                if (showlog && this.currentExecuteTrigger != null) {
                    this.currentExecuteTrigger.effect.ShowLog();
                }
                return;
            }
            if (showlog) {
                _Dcg_1.gLog.err("[DtSystemChian] half effect");
            }
            if (lastChain && lastChain.OnEndChainUseCard(showlog)) {
                return;
            }
            if (this.CreateNewChainForWaitEffect(showlog)) {
                return;
            }
            if (lastChain) {
                lastChain.OnTick(showlog);
            }
        }
    }
    ImmediatelyCreateNewChain() {
        this.CreateNewChainForWaitEffect(false);
    }
    CreateNewChainForWaitEffect(showlog) {
        let arrDistinctWait = new Array();
        for (let i = 0; i < this.waitEffects.length; i++) {
            let eff = this.waitEffects[i];
            let same = this.HasSameEffect(arrDistinctWait, eff);
            if (same == null) {
                arrDistinctWait.push(eff);
                if (showlog) {
                    _Dcg_1.gLog.err("[DtSystemChian] push wait effect ||||");
                    eff.effect.ShowLog();
                }
            }
            else {
                let msg = same.effect.CheckSameChainMsg(same.msg, eff.msg);
                same.msg = msg;
            }
        }
        this.waitEffects.length = 0;
        let chain = null;
        if (arrDistinctWait.length > 0) {
            for (let i = 0; i < arrDistinctWait.length; i++) {
                this.SetEffectChainId++;
                arrDistinctWait[i].currentChainId = this.SetEffectChainId;
            }
            chain = this.GetChian();
            chain.SetCardsActiveEffect(arrDistinctWait);
        }
        if (this.waitFunc.length > 0) {
            for (let i = this.waitFunc.length - 1; i >= 0; i--) {
                if (this.waitFunc[i].wait <= 0) {
                    if (chain == null) {
                        chain = this.GetChian();
                    }
                    chain.SetFunc(this.waitFunc[i]);
                    this.waitFunc.splice(i, 1);
                }
                else {
                    this.waitFunc[i].wait--;
                }
            }
        }
        if (chain) {
            this.activeChians.push(chain);
        }
        return chain != null;
    }
    ReduceWaitFuncFrame() {
        for (let i = this.waitFunc.length - 1; i >= 0; i--) {
            this.waitFunc[i].wait--;
        }
    }
    HasSameEffect(arr, add) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].effect == add.effect) {
                if (arr[i].effect.CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTimeingMore) == false) {
                    if (arr[i].CheckAllCondition() == true && add.CheckAllCondition() == true) {
                        return arr[i];
                    }
                }
            }
        }
        return null;
    }
    ActivateNormalEffectTrigger(effect) {
        if (this.currentExecuteTrigger == null) {
            this.currentExecuteTrigger = effect;
            return;
        }
        _Dcg_1.gLog.err("set norml trigger error:" + effect.effect.ShowLog());
    }
    IsRunning() {
        return this.activeChians.length > 0 || this.currentExecuteTrigger != null || this.waitEffects.length > 0 || this.waitHightEffects.length > 0 || this.waitFunc.length > 0;
    }
    SetCardsActiveEffect(effects) {
        for (let i = 0; i < effects.length; i++) {
            if (this.IsHighPriority(effects[i])) {
                this.waitHightEffects.push(effects[i]);
            }
            else {
                this.waitEffects.push(effects[i]);
            }
        }
        if (this.waitEffects.length > 0 && this.currentExecuteTrigger == null && this.activeChians.length == 0) {
            this.CreateNewChainForWaitEffect(false);
        }
        if (this.waitHightEffects.length > 0) {
            let chain = this.GetChian();
            let eff = new Array();
            for (let i = 0; i < this.waitHightEffects.length; i++) {
                eff.push(this.waitHightEffects[i]);
            }
            chain.SetCardsActiveEffect(eff);
            chain.isHighPriority = true;
            this.activeChians.push(chain);
            this.waitHightEffects.length = 0;
            return;
        }
    }
    SetChainFunc(func) {
        this.waitFunc.push(func);
        if (this.currentExecuteTrigger == null && this.activeChians.length == 0) {
            this.CreateNewChainForWaitEffect(false);
        }
    }
    IsHighPriority(effect) {
        if (effect.effect.GetTriggerType() == DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect) {
            return true;
        }
        if (effect.effect.GetTriggerType() == DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution) {
            return true;
        }
        if (effect.effect.GetTriggerType() == DtEffectType_1.DtEffectType.TriggerBeforeAbsorbEffectActive) {
            return true;
        }
        if (effect.effect.GetTriggerType() == DtEffectType_1.DtEffectType.OnBeforePlay) {
            return true;
        }
        if (effect.effect.GetTriggerType() == DtEffectType_1.DtEffectType.TriggerBeforePlay) {
            return true;
        }
        return false;
    }
    SetCardFsmActionEffect(player, casterCard, receiveCard, effType, param) {
        if (this.IsRunning() == false) {
            this.SetEffectChainId++;
            this.chainId = this.SetEffectChainId;
        }
        if (this.activeChians.length > 0) {
            let last = this.activeChians[this.activeChians.length - 1];
            if (last.CanSetFsmAction(player, casterCard, effType)) {
                return last.PushCardFsmActionEffect(player, casterCard, receiveCard, effType, param);
            }
        }
        let chain = this.GetChian();
        let effect = chain.SetCardFsmActionEffect(player, casterCard, receiveCard, effType, param);
        this.activeChians.push(chain);
        return effect;
    }
    SetEvo(player, evoCard, oriCard, cost) {
        let chain = this.GetChian();
        let fsmEvo = chain.SetEvo(player, evoCard, oriCard, cost);
        this.activeChians.push(chain);
        return fsmEvo;
    }
    SetFusionEvolution(player, evoCard, topCard, bottomCard, cost) {
        let chain = this.GetChian();
        chain.SetFusionEvolution(player, evoCard, topCard, bottomCard, cost);
        this.activeChians.push(chain);
    }
    SetPlayerUseCard(caster, player, card, useCost, onEffect, reason) {
        let chain = this.GetChian();
        let fsmUseCard = chain.SetPlayerUseCard(caster, player, card, useCost, onEffect, reason);
        this.activeChians.push(chain);
        return fsmUseCard;
    }
    GetChian() {
        let chian;
        if (this.listChian.length > 0) {
            chian = this.listChian[0];
            this.listChian.shift();
        }
        else {
            chian = new DtChian_1.DtChian(this);
        }
        chian.isHighPriority = false;
        return chian;
    }
    OnPlayerChooseOne(uid) {
        if (this.activeChians.length > 0) {
            let cur = this.activeChians[this.activeChians.length - 1];
            if (cur.OnPlayerChooseOne(uid) == false) {
                this.CurrrenChooseOne(uid);
            }
            return;
        }
        this.CurrrenChooseOne(uid);
    }
    CurrrenChooseOne(uid) {
        if (this.currentExecuteTrigger) {
            this.currentExecuteTrigger.OnPlayerChooseOne(uid);
        }
    }
    OnPlayerChooseMul(uids) {
        if (this.activeChians.length > 0) {
            let cur = this.activeChians[this.activeChians.length - 1];
            if (cur.OnPlayerChooseMul(uids) == false) {
                this.CurrrenChooseMul(uids);
            }
            return;
        }
        this.CurrrenChooseMul(uids);
    }
    CurrrenChooseMul(uids) {
        if (this.currentExecuteTrigger) {
            this.currentExecuteTrigger.OnPlayerChooseMul(uids);
        }
    }
    OnPlayerChooseEffectActivateSortOrCancel(activates, cancels) {
        if (this.waitPlayerChooseChain) {
            this.waitPlayerChooseChain.OnPlayerChooseEffectActivateSortOrCancel(activates, cancels);
        }
    }
    GetCurrentFsmEvo() {
        for (let i = this.activeChians.length - 1; i >= 0; i--) {
            if (this.activeChians[i].fsmEvo != null && this.activeChians[i].fsmEvo.IsRunning()) {
                return this.activeChians[i].fsmEvo;
            }
        }
        return this.activeChians[0].fsmEvo;
    }
    GetCurrentFsmActionManger() {
        for (let i = this.activeChians.length - 1; i >= 0; i--) {
            if (this.activeChians[i].fsmActionMgr != null && this.activeChians[i].fsmActionMgr.IsRunning()) {
                return this.activeChians[i].fsmActionMgr;
            }
        }
        return this.activeChians[0].fsmActionMgr;
    }
    UpdateTriggerEffectEvoCard(evoCard, oriCard) {
        this.UpdateTriggerEffectEvoCardInWaitEffect(evoCard, oriCard);
        for (let i = 0; i < this.activeChians.length; i++) {
            this.activeChians[i].UpdateTriggerEffectEvoCard(evoCard, oriCard);
        }
    }
    UpdateTriggerEffectEvoCardInWaitEffect(evoCard, oriCard) {
        if (this.waitEffects != null && this.waitEffects.length > 0) {
            for (let i = this.waitEffects.length - 1; i >= 0; i--) {
                if (this.waitEffects[i].parent == oriCard) {
                    let effect = this.GetSameEffect(evoCard, this.waitEffects[i]);
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
    IsLastChain(chain) {
        if (this.activeChians.length > 0) {
            let lastChain = this.activeChians[this.activeChians.length - 1];
            if (chain == lastChain) {
                return true;
            }
        }
        return false;
    }
    Clear() {
        this.manager = null;
        if (this.listChian) {
            for (let i = 0; i < this.listChian.length; i++) {
                this.listChian[i].Clear();
            }
            this.listChian = null;
        }
        if (this.activeChians) {
            for (let i = 0; i < this.activeChians.length; i++) {
                this.activeChians[i].Clear();
            }
            this.activeChians = null;
        }
        if (this.waitEffects) {
            for (let i = 0; i < this.waitEffects.length; i++) {
                this.waitEffects[i].Clear();
            }
            this.waitEffects = null;
        }
        if (this.waitFunc) {
            this.waitFunc = null;
        }
        if (this.waitHightEffects) {
            for (let i = 0; i < this.waitHightEffects.length; i++) {
                this.waitHightEffects[i].Clear();
            }
            this.waitHightEffects = null;
        }
    }
}
exports.DtSystemChian = DtSystemChian;
//# sourceMappingURL=DtSystemChian.js.map