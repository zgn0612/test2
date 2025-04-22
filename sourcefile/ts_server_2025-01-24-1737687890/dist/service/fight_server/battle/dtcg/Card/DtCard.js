"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCard = void 0;
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../Data/DtEnum");
const DtEvent_1 = require("../DtEvent");
const DtCardBase_1 = require("./DtCardBase");
const DtEffect_1 = require("./Effect/DtEffect");
const DtEffectType_1 = require("./Effect/DtEffectType");
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const DtMessageData_1 = require("../Message/DtMessageData");
class CardEffectListener {
    gameEventType;
    effectEventType;
    cardFunction;
    currentCount = 0;
    hasListener = false;
    constructor(gType, eType, func) {
        this.gameEventType = gType;
        this.effectEventType = eType;
        this.cardFunction = func;
        this.currentCount = 0;
        this.hasListener = false;
    }
}
class DtCard extends DtCardBase_1.DtCardBase {
    effects;
    originEffect;
    curListeners;
    constructor(player, uid, cardid) {
        super(player, uid, cardid);
        this.effects = new Array();
        this.originEffect = new Array();
        this.curListeners = new Array();
        if (this.config) {
            if (this.config.mainEffect) {
                for (let i = 0; i < this.config.mainEffect.length; i++) {
                    if (this.config.mainEffect[i] != 0) {
                        let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(this.config.mainEffect[i]);
                        if (skillcfg && skillcfg.number) {
                            try {
                                let create = require("./EffectCreator/" + skillcfg.number)?.default;
                                if (create) {
                                    this.CreateEffect(new create(), skillcfg);
                                }
                            }
                            catch (error) {
                                _Dcg_1.gLog.err(error);
                            }
                        }
                    }
                }
            }
            if (this.config.originEffect) {
                for (let i = 0; i < this.config.originEffect.length; i++) {
                    if (this.config.originEffect[i] != 0) {
                        let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(this.config.originEffect[i]);
                        if (skillcfg && skillcfg.number) {
                            try {
                                let path = "./EffectCreator/" + skillcfg.number;
                                let create = require(path)?.default;
                                if (create) {
                                    this.CreateOriginEffect(new create(), skillcfg);
                                }
                            }
                            catch (error) {
                                _Dcg_1.gLog.err(error);
                            }
                        }
                    }
                }
            }
        }
        this.InitListener();
    }
    InitListener() {
        this.SetListenr(DtEvent_1.DtEventType.RoundStart, DtEffectType_1.DtEffectType.TriggerRoundStart, this.TriggerRoundStart);
        this.SetListenr(DtEvent_1.DtEventType.MainPhaseStart, DtEffectType_1.DtEffectType.TriggerMainPhaseStart, this.TriggerMainPhaseStart);
        this.SetListenr(DtEvent_1.DtEventType.BlockerSelect, DtEffectType_1.DtEffectType.TriggerBlockerSelect, this.TriggerBlockerSelect);
        this.SetListenr(DtEvent_1.DtEventType.BlockerSelectOver, DtEffectType_1.DtEffectType.TriggerBlockerSelectOver, this.TriggerBlockerSelectOver);
        this.SetListenr(DtEvent_1.DtEventType.WhenAttacking, DtEffectType_1.DtEffectType.TriggerWhenAttacking, this.TriggerWhenAttacking);
        this.SetListenr(DtEvent_1.DtEventType.WhenOppAttacking, DtEffectType_1.DtEffectType.TriggerWhenOppAttacking, this.TriggerWhenOppAttacking);
        this.SetListenr(DtEvent_1.DtEventType.AttackDeclare, DtEffectType_1.DtEffectType.TriggerAttackDeclare, this.TriggerAttackDeclare);
        this.SetListenr(DtEvent_1.DtEventType.CardBeforeDActEffect, DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect, this.TriggerCardBeforeDActEffect);
        this.SetListenr(DtEvent_1.DtEventType.CardOnActEffect, DtEffectType_1.DtEffectType.TriggerCardOnActEffect, this.TriggerCardOnActEffect);
        this.SetListenr(DtEvent_1.DtEventType.CardBeforeEvolution, DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution, this.TriggerCardBeforeEvolution);
        this.SetListenr(DtEvent_1.DtEventType.PhaseActive, DtEffectType_1.DtEffectType.TriggerPhaseActive, this.TriggerCheckPlayerRound);
        this.SetListenr(DtEvent_1.DtEventType.AfterAtkJudge, DtEffectType_1.DtEffectType.TriggerAfterAtkJudge, this.TriggerAfterAtkJudge);
        this.SetListenr(DtEvent_1.DtEventType.BeforeAtkJudge, DtEffectType_1.DtEffectType.TriggerBeforeAtkJudge, this.TriggerBeforeAtkJudge);
        this.SetListenr(DtEvent_1.DtEventType.CardChangeBattleState, DtEffectType_1.DtEffectType.TriggerCardChangeBattleState, this.TriggerCardChangeBattleState);
        this.SetListenr(DtEvent_1.DtEventType.RoundOver, DtEffectType_1.DtEffectType.TriggerRoundOver, this.TriggerRoundOver);
        this.SetListenr(DtEvent_1.DtEventType.BattleOver, DtEffectType_1.DtEffectType.TriggerBattleOver, this.TriggerBattleOver);
        this.SetListenr(DtEvent_1.DtEventType.CardOnPlay, DtEffectType_1.DtEffectType.TriggerCardOnPlay, this.TriggerCardOnPlayer);
        this.SetListenr(DtEvent_1.DtEventType.BattleFieldInfoChange, DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange, this.TriggerBattleFieldInfoChange);
        this.SetListenr(DtEvent_1.DtEventType.AttackOver, DtEffectType_1.DtEffectType.TriggerAttackOver, this.TriggerAttackOver);
        this.SetListenr(DtEvent_1.DtEventType.OnDiscardEvoOrigin, DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin, this.TriggerDiscardEvoOrigin);
        this.SetListenr(DtEvent_1.DtEventType.BeforeCardChangeCost, DtEffectType_1.DtEffectType.TriggerBeforeCardChangeCost, this.TriggerBeforeCardChangeCost);
        this.SetListenr(DtEvent_1.DtEventType.BrforeAbsorbEffect, DtEffectType_1.DtEffectType.TriggerBeforeAbsorbEffectActive, this.TriggerBeforeAbsorbEffectActive);
        this.SetListenr(DtEvent_1.DtEventType.CardOnHatchPlay, DtEffectType_1.DtEffectType.TriggerCardOnHatchPlay, this.TriggerCardOnHatchPlay);
        this.SetListenr(DtEvent_1.DtEventType.AreaCardsChange, DtEffectType_1.DtEffectType.TriggerAreaCardsChange, this.TriggerAreaCardsChange);
        this.SetListenr(DtEvent_1.DtEventType.CardActivateEffect, DtEffectType_1.DtEffectType.TriggerCardActivateEffect, this.TriggerCardActivateEffect);
        this.SetListenr(DtEvent_1.DtEventType.CardEvolution, DtEffectType_1.DtEffectType.TriggerCardEvolution, this.TriggerCardEvolution);
        this.SetListenr(DtEvent_1.DtEventType.CardMove, DtEffectType_1.DtEffectType.TriggerCardMove, this.TriggerCardMove);
        this.SetListenr(DtEvent_1.DtEventType.PrecalculateCost, DtEffectType_1.DtEffectType.TriggerPrecalculateCost, this.TriggerPrecalculateCost);
        this.SetListenr(DtEvent_1.DtEventType.BeforePlay, DtEffectType_1.DtEffectType.TriggerBeforePlay, this.TriggerBeforePlay);
    }
    SetListenr(gType, eType, func) {
        this.curListeners.push(new CardEffectListener(gType, eType, func));
    }
    CheckEffectListener() {
        for (let i = 0; i < this.curListeners.length; i++) {
            this.curListeners[i].currentCount = 0;
        }
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].CheckCanSetListener(this.whereAreaType)) {
                let listen = this.GetListener(this.effects[i].triggerType);
                if (listen) {
                    listen.currentCount++;
                }
            }
        }
        for (let i = 0; i < this.curListeners.length; i++) {
            if (this.curListeners[i].currentCount > 0) {
                this.AddListener(this.curListeners[i]);
            }
            else if (this.curListeners[i].currentCount == 0) {
                this.RemoveListener(this.curListeners[i]);
            }
        }
    }
    AddListener(listen) {
        if (listen && listen.hasListener == false && listen.currentCount > 0) {
            this.parent.manager.AddListener(listen.gameEventType, this, listen.cardFunction);
            listen.hasListener = true;
        }
    }
    RemoveListener(listen) {
        if (listen && listen.hasListener == true && listen.currentCount <= 0) {
            this.parent.manager.RemoveListener(listen.gameEventType, this, listen.cardFunction);
            listen.hasListener = false;
        }
    }
    GetListener(effType) {
        for (let i = 0; i < this.curListeners.length; i++) {
            if (this.curListeners[i].effectEventType == effType) {
                return this.curListeners[i];
            }
        }
    }
    CreateEffect(creator, cfg) {
        if (this.parent) {
            creator.effCfgId = cfg.skillid;
            creator.Init(this);
        }
    }
    ClientShow(creator) {
        if (this.parent) {
            creator.ClientShow();
        }
    }
    RemoveEffectIndex(effect, index) {
        if (effect.CheckCanSetListener(this.whereAreaType)) {
            let listen = this.GetListener(effect.triggerType);
            if (listen) {
                listen.currentCount--;
                if (listen.currentCount < 0) {
                    listen.currentCount = 0;
                }
                this.RemoveListener(listen);
            }
        }
        this.RemoveBuffWithEffectAdd(effect);
        effect.Clear();
        this.effects.splice(index, 1);
    }
    CreateOriginEffect(creator, cfg) {
        creator.isOrigin = true;
        creator.originCard = this;
        creator.effCfgId = cfg.skillid;
        this.originEffect.push(creator);
    }
    ClearOriginEffect() {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].isOrigion) {
                this.RemoveEffectIndex(this.effects[i], i);
            }
        }
    }
    RegisterEffect(effect) {
        this.effects.push(effect);
    }
    RegisterEffectListener(effect) {
        if (effect.CheckCanSetListener(this.whereAreaType)) {
            let listen = this.GetListener(effect.triggerType);
            if (listen) {
                listen.currentCount++;
                this.AddListener(listen);
            }
        }
    }
    DeleteEffect(effect) {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i] == effect) {
                this.RemoveEffectIndex(this.effects[i], i);
                return;
            }
        }
    }
    CheckHasEffectByCreator(creator) {
        if (creator == null) {
            return false;
        }
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].GetCreateor() == creator) {
                return true;
            }
        }
        return false;
    }
    DeleteEffectWithCreator(creator) {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].GetCreateor() == creator) {
                this.RemoveEffectIndex(this.effects[i], i);
                return;
            }
        }
    }
    CheckHasOfferEffect(creatorClsName, offer, offCreator) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].GetCreateor().EffectCreatorConstructorName == creatorClsName) {
                if (this.effects[i].GetCreateor().offerEffectCard == offer) {
                    if (this.effects[i].GetCreateor().offerEffectCreator == offCreator) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    DeleteOfferEffectCreatorClassName(creatorClsName, offer, offCreator) {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].GetCreateor().EffectCreatorConstructorName == creatorClsName) {
                if (this.effects[i].GetCreateor().offerEffectCard == offer) {
                    if (this.effects[i].GetCreateor().offerEffectCreator == offCreator) {
                        this.RemoveEffectIndex(this.effects[i], i);
                    }
                }
            }
        }
    }
    RemoveUnusedOfferBuff() {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].GetCreateor().offerEffectCard != null && this.effects[i].GetCreateor().offerCardNeedInBattle) {
                if (this.effects[i].GetCreateor().offerEffectCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                    this.RemoveEffectIndex(this.effects[i], i);
                }
                else if (this.effects[i].GetCreateor().offerEffectCard.CheckHasEffectByCreator(this.effects[i].GetCreateor().offerEffectCreator) == false) {
                    this.RemoveEffectIndex(this.effects[i], i);
                }
            }
        }
    }
    RemoveOriginDigimon(card) {
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].isOrigion) {
                if (this.effects[i].GetCreateor().originCard == card) {
                    this.RemoveEffectIndex(this.effects[i], i);
                }
            }
        }
    }
    CanUseEffectInBattleArea() {
        if (this.parent.IsThisPlayerRound() == false) {
            return false;
        }
        if (this.GetPlayer().manager.GetCurrentPahse() != DtEnum_1.DtBattlePhase.MainPhase) {
            return false;
        }
        if (this.GetPlayer().manager.GetSystemChain().IsRunning()) {
            return false;
        }
        if (this.CardTypeIs(DtEnum_1.DtCardType.Magic) && this.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            for (let i = 0; i < this.effects.length; i++) {
                if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.OnDelayUseEffect) {
                    return this.effects[i].CheckAllCondition();
                }
            }
        }
        else {
            for (let i = 0; i < this.effects.length; i++) {
                if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.OnUseEffect) {
                    return this.effects[i].CheckAllCondition();
                }
            }
        }
        return false;
    }
    CanUseEffectInHand() {
        if (this.parent.IsThisPlayerRound() == false) {
            return false;
        }
        if (this.GetPlayer().manager.GetCurrentPahse() != DtEnum_1.DtBattlePhase.MainPhase) {
            return false;
        }
        if (this.GetPlayer().manager.GetSystemChain().IsRunning()) {
            return false;
        }
        if (this.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
            return false;
        }
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.OnUseEffect) {
                if (this.effects[i].CheckActivatePosition()) {
                    return this.effects[i].CheckAllCondition();
                }
            }
        }
        return false;
    }
    CanFusionEvo() {
        if (this.parent.IsThisPlayerRound() == false) {
            return false;
        }
        if (this.GetPlayer().manager.GetCurrentPahse() != DtEnum_1.DtBattlePhase.MainPhase) {
            return false;
        }
        if (this.GetPlayer().manager.GetSystemChain().IsRunning()) {
            return false;
        }
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.PlayerFusion) {
                return this.effects[i].CheckAllCondition();
            }
        }
        return false;
    }
    GetFusionEffect() {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.PlayerFusion) {
                return this.effects[i];
            }
        }
        return null;
    }
    OnPrecalculateCostCheck(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnPrecalculateCost, msg);
    }
    OnBeforePlay(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnBeforePlay, msg);
    }
    TriggerPrecalculateCost(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerPrecalculateCost, msg);
    }
    TriggerBeforePlay(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBeforePlay, msg);
    }
    OnPlay(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnPlay, msg);
    }
    OnInBattleArea() {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.InBattleArea);
    }
    OnEvolution(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnEvolution, msg);
    }
    OnWhenAttacking(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnWhenAttacking, msg);
    }
    OnDestroy(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnDestory, msg);
    }
    OnBeBlock() {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnBeBlocker);
    }
    OnUseEffect() {
        if (this.CardTypeIs(DtEnum_1.DtCardType.Magic) && this.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            this.CheckCardEffect(DtEffectType_1.DtEffectType.OnDelayUseEffect);
        }
        else {
            this.CheckCardEffect(DtEffectType_1.DtEffectType.OnUseEffect);
        }
    }
    OnFusionEvo() {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.PlayerFusion);
    }
    OnDefenseEffect() {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.OnDefenseEffect);
    }
    OnLeaveArea(area) {
        if (area == DtEnum_1.DtAreaType.BATTLE_AREA) {
            this.CheckCardEffect(DtEffectType_1.DtEffectType.OnLeaveBattleArea);
        }
    }
    CheckCardEffect(effType, msg = null) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].triggerType == effType && this.effects[i].CanActiveWithCheckChain()) {
                this.effects[i].SetCardInTrigger();
                if (this.effects[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.Immediately)) {
                    this.effects[i].eventMsg = msg;
                    if (this.effects[i].CheckAllCondition()) {
                        this.effects[i].OnEffect();
                    }
                }
                else {
                    if (this.effects[i].CheckTriggerCondition(msg)) {
                        this.parent.manager.SetEffectTrigger(this.effects[i], msg);
                    }
                }
            }
        }
    }
    CheckCardCanActivateEffect(effType, msg = null) {
        let can = false;
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].triggerType == effType && this.effects[i].CanActiveWithCheckChain()) {
                this.effects[i].eventMsg = msg;
                can = this.effects[i].CheckAllCondition();
                if (can) {
                    break;
                }
            }
        }
        return can;
    }
    OnNewEvoActivateInBattleArea(newEvo) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].GetCreateor().originCard == newEvo) {
                if (this.effects[i].triggerType == DtEffectType_1.DtEffectType.InBattleArea && this.effects[i].CanActiveWithCheckChain()) {
                    this.effects[i].SetCardInTrigger();
                    if (this.effects[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.Immediately)) {
                        this.effects[i].eventMsg = null;
                        if (this.effects[i].CheckAllCondition()) {
                            this.effects[i].OnEffect();
                        }
                    }
                    else {
                        if (this.effects[i].CheckTriggerCondition(null)) {
                            this.parent.manager.SetEffectTrigger(this.effects[i], null);
                        }
                    }
                }
            }
        }
    }
    TriggerRoundStart(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerRoundStart, msg);
    }
    TriggerMainPhaseStart(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerMainPhaseStart, msg);
    }
    TriggerRoundOver(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerRoundOver, msg);
    }
    TriggerBlockerSelect(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBlockerSelect, msg);
    }
    TriggerBlockerSelectOver(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBlockerSelectOver, msg);
    }
    TriggerWhenAttacking(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerWhenAttacking, msg);
    }
    TriggerWhenOppAttacking(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerWhenOppAttacking, msg);
    }
    TriggerAttackDeclare(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerAttackDeclare, msg);
    }
    TriggerCardOnActEffect(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardOnActEffect, msg);
    }
    TriggerCardOnPlayer(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardOnPlay, msg);
    }
    TriggerCardOnHatchPlay(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardOnHatchPlay, msg);
    }
    TriggerAreaCardsChange(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerAreaCardsChange, msg);
    }
    TriggerCardActivateEffect(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardActivateEffect, msg);
    }
    TriggerBattleFieldInfoChange() {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange);
    }
    TriggerCardBeforeEvolution(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution, msg);
    }
    TriggerCardEvolution(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardEvolution, msg);
    }
    TriggerCardMove(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardMove, msg);
    }
    TriggerCardBeforeDActEffect(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect, msg);
    }
    TriggerCheckPlayerRound(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerPhaseActive, msg);
    }
    TriggerAfterAtkJudge(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerAfterAtkJudge, msg);
    }
    TriggerDiscardEvoOrigin(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin, msg);
    }
    TriggerBeforeAtkJudge(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBeforeAtkJudge, msg);
    }
    TriggerCardChangeBattleState(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState, msg);
    }
    TriggerBattleOver(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBattleOver, msg);
    }
    TriggerAttackOver(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerAttackOver, msg);
    }
    TriggerBeforeCardChangeCost(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBeforeCardChangeCost, msg);
    }
    TriggerBeforeAbsorbEffectActive(msg) {
        this.CheckCardEffect(DtEffectType_1.DtEffectType.TriggerBeforeAbsorbEffectActive, msg);
    }
    HasEffect(effName) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].name == effName) {
                return true;
            }
        }
        return false;
    }
    HasOriginEffect() {
        if (this.originEffect != null && this.originEffect.length > 0) {
            return true;
        }
        return false;
    }
    HasEffectWithTriggerType(type) {
        return this.GetFirstEffectWithTrigtgerType(type) != null;
    }
    GetFirstEffectWithTrigtgerType(type) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].GetTriggerType() == type) {
                return this.effects[i];
            }
        }
        return null;
    }
    SetCardEvoOriginSkill() {
        for (let i = 0; i < this.evoOriginList.length; i++) {
            let oCard = this.evoOriginList[i];
            if (oCard) {
                let oriEffects = oCard.originEffect;
                for (let j = 0; j < oriEffects.length; j++) {
                    oriEffects[j].Init(this);
                }
            }
        }
        this.CheckEffectListener();
    }
    ResetState() {
        super.ResetState();
        this.ClearOriginEffect();
        if (this.originEffect && this.originEffect.length > 0) {
            for (let i = 0; i < this.originEffect.length; i++) {
                this.originEffect[i].originCreatorData = null;
            }
        }
    }
    UpdateInheritEffectData(oriEffect) {
        for (let i = 0; i < oriEffect.length; i++) {
            if (oriEffect[i].isOrigion == true) {
                this.UpdateOriginEffectCreator(oriEffect[i]);
                this.UpdateSingleInheritEffectData(oriEffect[i]);
            }
        }
    }
    UpdateOriginEffectCreator(inheritEffect) {
        if (this.originEffect && this.originEffect.length > 0) {
            for (let i = 0; i < this.originEffect.length; i++) {
                if (this.originEffect[i] == inheritEffect.GetCreateor()) {
                    this.originEffect[i].SetOriginCreatorData(inheritEffect);
                }
            }
        }
    }
    UpdateSingleInheritEffectData(inheritEffect) {
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].isOrigion) {
                if (this.effects[i].GetCreateor() == inheritEffect.GetCreateor()) {
                    if (this.effects[i].triggerType == inheritEffect.triggerType) {
                        this.effects[i].UpdateInheritDataBy(inheritEffect);
                    }
                }
            }
        }
    }
    UpdateInheritEffectDataWithOriCreator(ori) {
        if (ori && ori.length > 0) {
            ori.forEach((creator) => {
                if (creator.originCreatorData) {
                    for (let i = 0; i < this.effects.length; i++) {
                        if (this.effects[i].GetCreateor() == creator) {
                            this.effects[i].UpdateInheritDataBy(creator.originCreatorData);
                        }
                    }
                }
            });
        }
    }
    PopInheritEffects() {
        let inheritEffects = new Array();
        for (let i = this.effects.length - 1; i >= 0; i--) {
            if (this.effects[i].isOrigion && this.effects[i].inherit == true) {
                inheritEffects.push(this.effects[i]);
                this.effects.splice(i, 1);
            }
        }
        return inheritEffects;
    }
    SetInheritEffect(inheritEffects) {
        for (let i = 0; i < inheritEffects.length; i++) {
            inheritEffects[i].parent = this;
            inheritEffects[i].GetCreateor().parent = this;
            this.RegisterEffect(inheritEffects[i]);
            this.RegisterEffectListener(inheritEffects[i]);
        }
    }
    Clear() {
        if (this.effects) {
            for (let i = 0; i < this.effects.length; i++) {
                this.effects[i].Clear();
            }
            this.effects = null;
        }
        this.originEffect = null;
        super.Clear();
    }
    GetCardBattleInfo() {
        let info = super.GetCardBattleInfo();
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].name != -1) {
                let data = new protoMsg_1.DcgProto.S_GameBattleCardInfo();
                data.Type = DtMessageData_1.DtProtoEnum_CardInfoType.Effect;
                data.SubType = this.effects[i].name;
                data.Data = 0;
                info.push(data);
            }
        }
        return info;
    }
    GetCardEffectInfo() {
        let info = new Array();
        for (let i = 0; i < this.effects.length; i++) {
            if (this.effects[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnOnce) || this.effects[i].CheckOtherTypeIs(DtEffect_1.DtEffectOtherType.OneTurnMore)) {
                if (this.effects[i].CheckFreLimitCanUse() == false) {
                    let c = this.effects[i].GetCreateor();
                    if (c.originCard) {
                        let data = new protoMsg_1.DcgProto.S_BattleCardEffectInfo();
                        data.CardIID = c.originCard.uid;
                        data.EffectId = c.effCfgId;
                        data.param = 1;
                        info.push(data);
                    }
                    else if (c.parent) {
                        let data = new protoMsg_1.DcgProto.S_BattleCardEffectInfo();
                        data.CardIID = c.parent.uid;
                        data.EffectId = c.effCfgId;
                        data.param = 1;
                        info.push(data);
                    }
                }
            }
        }
        return info;
    }
}
exports.DtCard = DtCard;
//# sourceMappingURL=DtCard.js.map