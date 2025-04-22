"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtEffect = exports.DtEffectResult = exports.DtEffectOtherType = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEventMsg_1 = require("../../Data/DtEventMsg");
const DtEvent_1 = require("../../DtEvent");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtSkillCustom_1 = require("../Skill/DtSkillCustom");
const DtEffectBase_1 = require("./DtEffectBase");
const DtEffectType_1 = require("./DtEffectType");
var DtEffectOtherType;
(function (DtEffectOtherType) {
    DtEffectOtherType[DtEffectOtherType["None"] = 0] = "None";
    DtEffectOtherType[DtEffectOtherType["OneTurnOnce"] = 1] = "OneTurnOnce";
    DtEffectOtherType[DtEffectOtherType["Immediately"] = 2] = "Immediately";
    DtEffectOtherType[DtEffectOtherType["OneTurnMore"] = 4] = "OneTurnMore";
    DtEffectOtherType[DtEffectOtherType["OneTimeingMore"] = 8] = "OneTimeingMore";
})(DtEffectOtherType = exports.DtEffectOtherType || (exports.DtEffectOtherType = {}));
var DtEffectResult;
(function (DtEffectResult) {
    DtEffectResult[DtEffectResult["None"] = 0] = "None";
    DtEffectResult[DtEffectResult["WaitForChoose"] = 1] = "WaitForChoose";
    DtEffectResult[DtEffectResult["Next"] = 2] = "Next";
})(DtEffectResult = exports.DtEffectResult || (exports.DtEffectResult = {}));
class SkillGroup {
    groupName;
    con;
    listSkill;
    constructor() {
        this.listSkill = new Array();
    }
}
class DtEffect extends DtEffectBase_1.DtEffectBase {
    useState = 1;
    name = -1;
    creator;
    triggerType;
    otherType;
    otherTypeParam;
    triggerArea = DtEnum_1.DtAreaType.None;
    TriggerConData;
    ConditionFunc;
    InitFunc;
    listSkill;
    currentSetSkillGroup;
    skillGroup;
    state = 0;
    waitForPlayer = false;
    onEffectRound = 0;
    onUseCount = 0;
    isOrigion = false;
    eventMsg;
    activateAsk = false;
    inherit = false;
    bindOnceTurnOnceEffect;
    constructor(parent, creator) {
        super(parent);
        this.creator = creator;
        this.listSkill = new Array();
        this.inherit = false;
        this.activateAsk = false;
        this.TriggerConData = new Array();
        this.ConditionFunc = new Array();
    }
    GetCreateor() {
        return this.creator;
    }
    SetTriggerCondition(data) {
        this.TriggerConData.push(data);
    }
    SetCondition(func) {
        this.ConditionFunc.push(func);
    }
    SetInitFunc(func) {
        this.InitFunc = func;
    }
    CheckTriggerCondition(msg) {
        if (this.triggerArea != DtEnum_1.DtAreaType.None) {
            if ((this.triggerArea & this.parent.whereAreaType) == 0) {
                return false;
            }
        }
        if (this.CheckFreLimitCanUse() == false) {
            return false;
        }
        if (this.TriggerConData) {
            for (let i = 0; i < this.TriggerConData.length; i++) {
                if (this.TriggerConData[i].CheckCon(this, msg) == false) {
                    return false;
                }
            }
        }
        return true;
    }
    BindOnceTurnOnceEffect(effect) {
        this.bindOnceTurnOnceEffect = effect;
    }
    CheckFreLimitCanUse(checkBindCard = true) {
        if (this.CheckOtherTypeIs(DtEffectOtherType.OneTurnOnce)) {
            if (this.onEffectRound == this.GetCurrentRound()) {
                return false;
            }
        }
        if (this.CheckOtherTypeIs(DtEffectOtherType.OneTurnMore)) {
            if (this.onEffectRound == this.GetCurrentRound()) {
                if (this.onUseCount >= this.otherTypeParam) {
                    return false;
                }
            }
        }
        if (this.bindOnceTurnOnceEffect && checkBindCard) {
            return this.bindOnceTurnOnceEffect.CheckFreLimitCanUse(false);
        }
        return true;
    }
    CheckAllCondition() {
        if (this.parent == null) {
            _Dcg_1.gLog.err("why this is clear but used ... effName .. " + this.ClearBug);
            return false;
        }
        let origin = this.GetRealityOriginCard();
        if (origin) {
            if (this.parent.CheckIsImmueEffect(origin)) {
                return false;
            }
        }
        let basicConfition = this.CheckTriggerCondition(this.eventMsg);
        if (basicConfition == false) {
            return false;
        }
        if (this.ConditionFunc && this.ConditionFunc.length > 0) {
            for (let i = 0; i < this.ConditionFunc.length; i++) {
                if (this.ConditionFunc[i].call(this.creator, this) == false) {
                    return false;
                }
            }
        }
        return true;
    }
    ChainCheckCondition() {
        if (this.parent == null) {
            _Dcg_1.gLog.err("why this is clear but used ... effName .. " + this.ClearBug);
            return false;
        }
        if (this.triggerArea != DtEnum_1.DtAreaType.None) {
            if ((this.triggerArea & this.parent.whereAreaType) == 0) {
                return false;
            }
        }
        if (this.CheckFreLimitCanUse() == false) {
            return false;
        }
        if (this.ConditionFunc && this.ConditionFunc.length > 0) {
            for (let i = 0; i < this.ConditionFunc.length; i++) {
                if (this.ConditionFunc[i].call(this.creator, this) == false) {
                    return false;
                }
            }
        }
        return true;
    }
    HasCondition() {
        if (this.ConditionFunc && this.ConditionFunc.length > 0) {
            return true;
        }
        return false;
    }
    PreCheckPlayerUsefulActivate() {
        this.CheckRegisterSkillFromGroup();
        if (this.listSkill == null || this.listSkill.length == 0) {
            return false;
        }
        if (this.InitFunc) {
            this.InitFunc.call(this.creator, this);
        }
        if (this.listSkill.length == 1) {
            return this.listSkill[0].CheckSkilliMakeSenese();
        }
        else if (this.listSkill.length >= 2) {
            let firstskl = this.listSkill[0];
            let sec = this.listSkill[1];
            if (firstskl && firstskl.constructor.name == "DtSkillPlayerChoose" && sec) {
                if (sec.type == DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over) {
                    return this.listSkill[0].CheckSkilliMakeSenese();
                }
            }
        }
        return true;
    }
    SetEffectGroup(groupName, con, func) {
        if (this.skillGroup == null) {
            this.skillGroup = new Array();
        }
        let group = new SkillGroup();
        group.groupName = groupName;
        group.con = con;
        if (this.listSkill && this.listSkill.length > 0) {
            for (let i = 0; i < this.listSkill.length; i++) {
                group.listSkill.push(this.listSkill[i]);
            }
        }
        this.skillGroup.push(group);
        this.currentSetSkillGroup = group;
        func.call(this.creator, this);
        this.currentSetSkillGroup = null;
    }
    SetEffect(onEffect, onChoose, obj = null) {
        let effect = new DtSkillCustom_1.DtSkillCustom(this, 0);
        effect.OnEffectCall = onEffect;
        effect.OnChooseCall = onChoose;
        if (obj != null) {
            effect.obj = obj;
        }
        else {
            effect.obj = this.creator;
        }
        if (this.currentSetSkillGroup != null) {
            this.currentSetSkillGroup.listSkill.push(effect);
        }
        else {
            this.listSkill.push(effect);
        }
        return effect;
    }
    RegisterSkill(skill) {
        if (this.currentSetSkillGroup != null) {
            this.currentSetSkillGroup.listSkill.push(skill);
        }
        else {
            this.listSkill.push(skill);
        }
        return skill;
    }
    CheckRegisterSkillFromGroup() {
        if (this.skillGroup && this.skillGroup.length > 0) {
            for (let i = 0; i < this.skillGroup.length; i++) {
                if (this.skillGroup[i].con && this.skillGroup[i].con.call(this.creator, this) == true) {
                    if (this.skillGroup[i].listSkill && this.skillGroup[i].listSkill.length > 0) {
                        this.listSkill = this.skillGroup[i].listSkill;
                        return;
                    }
                }
            }
        }
    }
    SetEffectActivateAsk() {
        this.activateAsk = true;
    }
    OnEffect(canImmediately = true) {
        this.CheckRegisterSkillFromGroup();
        if (this.listSkill == null || this.listSkill.length == 0) {
            return false;
        }
        this.useState = 1;
        if (this.InitFunc) {
            this.InitFunc.call(this.creator, this);
        }
        this.ClientShow(DtMessageData_1.ClientShowType.CardEffect);
        if (this.onEffectRound != this.GetCurrentRound()) {
            this.onUseCount = 1;
        }
        else {
            this.onUseCount++;
        }
        this.onEffectRound = this.GetCurrentRound();
        if (this.name != -1) {
            this.parent.parent.manager.FireListener(DtEvent_1.DtEventType.CardActivateEffect, new DtEventMsg_1.DtMsg_CardActivateEffect(this.parent, this.name));
        }
        if (this.listSkill.length <= 1 && this.listSkill[0] && this.listSkill[0].CheckSkillNeedChoose() == false && canImmediately) {
            this.listSkill[0].success = true;
            this.listSkill[0].OnSkillRun();
            if (this.useOtherEffect == null) {
                this.ClientShow(DtMessageData_1.ClientShowType.CardEffectOver);
                return false;
            }
            else {
                this.state = 1;
                this.isOver = false;
                this.waitForPlayer = false;
                return true;
            }
        }
        this.state = 0;
        this.isOver = false;
        this.waitForPlayer = false;
        return true;
    }
    OnTick() {
        if (this.OnTickOtherEffect()) {
            return;
        }
        if (this.waitForPlayer) {
            return;
        }
        if (this.listSkill[this.state]) {
            let skill = this.listSkill[this.state];
            if (skill.type == DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over) {
                if (this.GetLastEffectRunResult(skill) == false) {
                    this.ForceOver();
                    return;
                }
            }
            else if (skill.type == DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Skip) {
                if (this.GetLastEffectRunResult(skill) == false) {
                    this.waitForPlayer = false;
                    this.state++;
                    return;
                }
            }
            else if (skill.type == DtSkillBase_1.DtSkillRunType.Perv_SUCCESS_Then_Over) {
                if (this.GetLastEffectRunResult(skill)) {
                    this.ForceOver();
                    return;
                }
            }
            skill.success = true;
            let result = skill.OnSkillRun();
            if (result == DtEffectResult.WaitForChoose) {
                this.waitForPlayer = true;
            }
            else {
                if (this.useOtherEffect != null) {
                    this.state++;
                    return;
                }
                this.waitForPlayer = false;
                this.state++;
                if (skill.type == DtSkillBase_1.DtSkillRunType.Activate_Then_Over) {
                    this.ForceOver();
                }
            }
        }
        else {
            this.isOver = true;
            this.waitForPlayer = true;
            this.ClientShow(DtMessageData_1.ClientShowType.CardEffectOver);
        }
    }
    OnPlayerChooseOne(uid) {
        if (this.useOtherEffect) {
            this.useOtherEffect.OnPlayerChooseOne(uid);
            return;
        }
        let type = this.listSkill[this.state].type;
        this.listSkill[this.state].OnPlayerChooseOne(uid);
        if (type == DtSkillBase_1.DtSkillRunType.Activate_Then_Over) {
            this.ForceOver();
        }
        this.waitForPlayer = false;
        this.state++;
    }
    OnPlayerChooseMul(uids) {
        if (this.useOtherEffect) {
            this.useOtherEffect.OnPlayerChooseMul(uids);
            return;
        }
        let type = this.listSkill[this.state].type;
        this.listSkill[this.state].OnPlayerChooseMul(uids);
        if (type == DtSkillBase_1.DtSkillRunType.Activate_Then_Over) {
            this.ForceOver();
        }
        this.waitForPlayer = false;
        this.state++;
    }
    ReturnToThePreviousStep() {
        this.state--;
    }
    SetToStateStepWithStageId(stageid) {
        for (let i = 0; i < this.listSkill.length; i++) {
            if (this.listSkill[i].effectStage == stageid) {
                this.state = i - 1;
            }
        }
    }
    GetNextSkillWithSkill(skill) {
        let idx = -1;
        for (let i = 0; i < this.listSkill.length; i++) {
            if (this.listSkill[i] == skill) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            if (idx + 1 < this.listSkill.length) {
                return this.listSkill[idx + 1];
            }
        }
        return null;
    }
    GetCurrentRound() {
        if (this.parent) {
            return this.parent.parent.manager.CurRound;
        }
        return 0;
    }
    SetOtherType(type, param = 1) {
        this.otherType = type;
        this.otherTypeParam = param;
    }
    SetTriggerType(type) {
        this.triggerType = type;
        if (this.triggerType == DtEffectType_1.DtEffectType.OnDestory) {
            this.name = DtEnum_1.EFFECT_NAME.Destroy;
        }
    }
    CheckOtherTypeIs(e) {
        return (this.otherType & e) > 0;
    }
    GetOtherType() {
        return this.otherType;
    }
    SetTriggerArea(type) {
        this.triggerArea = type;
    }
    SetTriggerAreaAllExceptDigitama() {
        this.triggerArea = DtEnum_1.DtAreaType.BATTLE_AREA | DtEnum_1.DtAreaType.DECK | DtEnum_1.DtAreaType.DEFENSE | DtEnum_1.DtAreaType.GY | DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.OTHER_EVO | DtEnum_1.DtAreaType.WAIT | DtEnum_1.DtAreaType.GLOBAL;
    }
    ForceOver() {
        this.isOver = true;
        this.ClientShow(DtMessageData_1.ClientShowType.CardEffectOver);
    }
    AddNewBuffTo(buff, card) {
        buff.parent = this;
        buff.inherit = false;
        card.AddBuff(buff);
    }
    AddInheritBuffTo(buff, card) {
        buff.parent = this;
        buff.inherit = true;
        card.AddBuff(buff);
    }
    SetEffectDirect() {
        this.effectDirect = true;
    }
    CheckCanSetListener(cardArea) {
        if (this.triggerArea == DtEnum_1.DtAreaType.None && cardArea == DtEnum_1.DtAreaType.BATTLE_AREA) {
            return true;
        }
        return (cardArea & this.triggerArea) > 0;
    }
    GetTriggerType() {
        return this.triggerType;
    }
    UpdateInheritDataBy(inheritEff) {
        this.onEffectRound = inheritEff.onEffectRound;
        this.onUseCount = inheritEff.onUseCount;
    }
    CheckActivatePosition() {
        if (this.triggerType == DtEffectType_1.DtEffectType.OnDestory) {
            if (this.parent.whereAreaType == DtEnum_1.DtAreaType.GY) {
                return true;
            }
            return false;
        }
        if (this.triggerArea != DtEnum_1.DtAreaType.None) {
            let p = this.triggerArea & this.parent.whereAreaType;
            if (p == 0) {
                return false;
            }
            return true;
        }
        if (this.parent.CardTypeIs(DtEnum_1.DtCardType.Monster) || this.parent.CardTypeIs(DtEnum_1.DtCardType.Role) || this.parent.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
            if (this.triggerArea == DtEnum_1.DtAreaType.None && this.parent.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                return this.CheckMonsterNoneArea();
            }
        }
        if (this.parent.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
            if (this.triggerArea == DtEnum_1.DtAreaType.None && this.parent.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                if (this.triggerType == DtEffectType_1.DtEffectType.OnUseEffect) {
                    return true;
                }
                if (this.triggerType == DtEffectType_1.DtEffectType.OnDefenseEffect) {
                    return true;
                }
            }
        }
        return true;
    }
    CheckMonsterNoneArea() {
        if (this.triggerType == DtEffectType_1.DtEffectType.PlayerFusion) {
            return true;
        }
        if (this.triggerType == DtEffectType_1.DtEffectType.OnPrecalculateCost) {
            return true;
        }
        if (this.triggerType == DtEffectType_1.DtEffectType.OnDestory) {
            return true;
        }
        if (this.triggerType == DtEffectType_1.DtEffectType.OnDefenseEffect) {
            return true;
        }
        if (this.triggerType == DtEffectType_1.DtEffectType.OnLeaveBattleArea) {
            return true;
        }
        return false;
    }
    GetActiveNeedAsk() {
        return this.activateAsk;
    }
    lstShowType = DtMessageData_1.ClientShowType.None;
    ClientShow(type) {
        if (this.useState == 1) {
            if (this.effectDirect == false) {
                this.lstShowType = type;
                let str = "0";
                if (this.creator) {
                    str = this.creator.effCfgId.toString();
                }
                str += "|" + this.triggerType;
                str += "|" + this.name;
                this.parent.parent.manager.Get2ClientMessageMgr().ClientShow(this.GetPlayer(), type, this.GetClientCardArr(), str);
            }
        }
    }
    GetClientCardArr() {
        let cards = new Array();
        let actCard = this.GetActivateCard();
        if (actCard) {
            cards.push(actCard.uid);
        }
        let offcard = this.GetRealityOriginCard();
        if (offcard && offcard != actCard) {
            cards.push(offcard.uid);
        }
        return cards;
    }
    ShowLog() {
        let log = _Dcg_1.gFun.formatString("[DtEffect]==>card cfgId is {0}, creator cls is {1}", this.parent.config?.id, this.GetCreateor().EffectCreatorConstructorName);
        log += "/n";
        log += "current in state =====>" + this.state + "    this.waitForPlayer = " + this.waitForPlayer;
        _Dcg_1.gLog.err(log);
        return log;
    }
    GetLastEffectRunResult(skill) {
        if (this.listSkill.length > 1) {
            for (let i = 1; i < this.listSkill.length; i++) {
                if (this.listSkill[i] == skill) {
                    return this.listSkill[i - 1].success;
                }
            }
        }
        return true;
    }
    ClearBug = "";
    Clear() {
        if (this.creator) {
            this.ClearBug = this.creator.EffectCreatorConstructorName;
        }
        this.isOver = true;
        this.creator = null;
        this.ConditionFunc = null;
        this.TriggerConData = null;
        this.listSkill = null;
        this.eventMsg = null;
        this.bindOnceTurnOnceEffect = null;
        super.Clear();
    }
    GetActivateCard() {
        if (this.parent.config == null) {
            if (this.creator.offerEffectCard) {
                return this.creator.offerEffectCard;
            }
        }
        else {
            return this.parent;
        }
        return null;
    }
    GetRealityOriginCard() {
        if (this.parent.config == null) {
            let offercard = this.GetOfferEffectCard();
            if (offercard) {
                return offercard;
            }
        }
        else {
            if (this.creator.originCard) {
                return this.creator.originCard;
            }
            let offercard = this.GetOfferEffectCard();
            if (offercard) {
                return offercard;
            }
            return this.parent;
        }
        return null;
    }
    GetOfferEffectCard() {
        let card = null;
        if (this.creator.offerEffectCard) {
            let cc = this.creator;
            while (cc != null) {
                if (cc.offerEffectCard.config != null) {
                    card = cc.offerEffectCard;
                    cc = null;
                    break;
                }
                cc = cc.offerEffectCreator;
            }
        }
        return card;
    }
    useOtherEffect;
    UseOtherEffect(effect) {
        if (effect.ForceUseCheckCondition()) {
            if (effect.OnForceUse()) {
                this.useOtherEffect = effect;
            }
        }
    }
    ForceUseCheckCondition() {
        if (this.ConditionFunc && this.ConditionFunc.length > 0) {
            for (let i = 0; i < this.ConditionFunc.length; i++) {
                if (this.ConditionFunc[i].call(this.creator, this) == false) {
                    return false;
                }
            }
        }
        return true;
    }
    OnForceUse() {
        this.CheckRegisterSkillFromGroup();
        if (this.listSkill == null || this.listSkill.length == 0) {
            return false;
        }
        this.useState = 0;
        if (this.InitFunc) {
            this.InitFunc.call(this.creator, this);
        }
        this.state = 0;
        this.isOver = false;
        this.waitForPlayer = false;
        return true;
    }
    OnTickOtherEffect() {
        if (this.useOtherEffect != null) {
            if (this.useOtherEffect.IsOver()) {
                this.useOtherEffect = null;
            }
            else {
                this.useOtherEffect.OnTick();
            }
            return true;
        }
        return false;
    }
    GetSkillDesc() {
        let descList = new Array();
        if (this.listSkill && this.listSkill.length > 0) {
            this.listSkill.forEach((sk) => {
                this.SkillDescCall(sk, () => {
                    let des = sk.GetSkillDesc();
                    descList.push(des);
                });
            });
        }
        if (this.skillGroup && this.skillGroup.length > 0) {
            for (let i = 0; i < this.skillGroup.length; i++) {
                this.skillGroup[i].listSkill.forEach((sk) => {
                    this.SkillDescCall(sk, () => {
                        let des = sk.GetSkillDesc();
                        des.group = this.skillGroup[i].groupName;
                        descList.push(des);
                    });
                });
            }
        }
        return descList;
    }
    CheckLog() {
        let arrRe = new Array();
        if (this.listSkill && this.listSkill.length > 0) {
            this.listSkill.forEach((sk) => {
                this.SkillDescCall(sk, () => {
                    if (sk.effectStage == 0 || this.CheckRepeat(arrRe, sk.effectStage)) {
                        _Dcg_1.gLog.err("repeat " + this.GetCreateor().EffectCreatorConstructorName + "  statge:  " + sk.effectStage);
                    }
                });
                arrRe.push(sk.effectStage);
            });
        }
        if (this.skillGroup && this.skillGroup.length > 0) {
            for (let i = 0; i < this.skillGroup.length; i++) {
                this.skillGroup[i].listSkill.forEach((sk) => {
                    this.SkillDescCall(sk, () => {
                        if (sk.effectStage == 0 || this.CheckRepeat(arrRe, sk.effectStage)) {
                            _Dcg_1.gLog.err("repeat " + this.GetCreateor().EffectCreatorConstructorName + "  statge:  " + sk.effectStage);
                        }
                    });
                    arrRe.push(sk.effectStage);
                });
            }
        }
    }
    SkillDescCall(sk, func) {
        if (sk.constructor.name == "DtSkillCustom") {
            if (sk.OnChooseCall != null) {
                func(sk);
            }
        }
        else if (sk.constructor.name == "DtDirectSkill") {
        }
        else {
            func(sk);
        }
    }
    CheckRepeat(arr, s) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == s) {
                return true;
            }
        }
        return false;
    }
}
exports.DtEffect = DtEffect;
//# sourceMappingURL=DtEffect.js.map