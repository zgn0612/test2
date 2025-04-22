"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGroupSkillPlayerBrowse = void 0;
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillPlayerBrowse_1 = require("./DtSkillPlayerBrowse");
class DtGroupSkillPlayerBrowse {
    basicStatge = 100;
    parent;
    effect;
    ShowType;
    area;
    skills;
    constructor(effect, callobj, ShowType, area) {
        this.effect = effect;
        this.parent = callobj;
        this.ShowType = ShowType;
        this.area = area;
    }
    funcGetCars;
    cards;
    initSkill;
    hasNotifyPlayerOverBrowse = false;
    needCheckCardIsBothMeet = false;
    SetCards(func) {
        this.funcGetCars = func;
    }
    GetCards() {
        return this.cards;
    }
    GetHasSelectCards() {
        let cards = new Array();
        for (let i = 0; i < this.skills.length; i++) {
            let op = this.skills[i].GetOpCards();
            if (op && op.length > 0) {
                cards = cards.concat(op);
            }
        }
        return cards;
    }
    GetHasSuccesscards() {
        let cards = new Array();
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].success && this.skills[i].isExecute) {
                let op = this.skills[i].GetOpCards();
                if (op && op.length > 0) {
                    cards = cards.concat(op);
                }
            }
        }
        return cards;
    }
    RegisterToEffect(effect) {
        if (this.skills && this.skills.length > 0) {
            this.initSkill = effect.SetEffect(this.Init, null, this);
            effect.SetEffect(this.InitCardsEffect, null, this);
            for (let i = 0; i < this.skills.length; i++) {
                if (this.skills[i].isExecute == false) {
                    effect.SetEffect(this.NotifyPlayerOverBrowse, null, this);
                }
                effect.RegisterSkill(this.skills[i]);
            }
            effect.SetEffect(this.OverBrowseDoOperate, null, this);
            if (this.skills.length > 2) {
                this.needCheckCardIsBothMeet = true;
                for (let i = 0; i < this.skills.length; i++) {
                    if (this.skills[i].isExecute) {
                        if (this.skills[i].IsNeedCheckCardIsBothMeet() == false) {
                            this.needCheckCardIsBothMeet = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    Init() {
        this.cards = null;
        this.hasNotifyPlayerOverBrowse = false;
        if (this.skills) {
            for (let i = 0; i < this.skills.length; i++) {
                this.skills[i].Reset();
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    SetFirstType(type) {
        if (this.initSkill) {
            this.initSkill.type = type;
        }
    }
    InitCardsEffect() {
        if (this.funcGetCars) {
            this.cards = this.funcGetCars.call(this.parent);
        }
        if (this.cards && this.cards.length > 0) {
            let msg = this.Get2ClientMessageMgr().CardsExcavated(this.GetPlayer(), this.ShowType, this.area, this.cards);
            this.parent.parent.parent.manager.reconnectBrowse = msg;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    NotifyPlayerOverBrowse() {
        this.Get2ClientMessageMgr().ClientShow(this.GetPlayer(), DtMessageData_1.ClientShowType.OverBrowse, null, "");
        this.hasNotifyPlayerOverBrowse = true;
        this.parent.parent.parent.manager.reconnectBrowse = null;
        return DtEffect_1.DtEffectResult.Next;
    }
    OverBrowseDoOperate() {
        if (this.hasNotifyPlayerOverBrowse == false) {
            this.parent.parent.parent.manager.reconnectBrowse = null;
            this.Get2ClientMessageMgr().ClientShow(this.GetPlayer(), DtMessageData_1.ClientShowType.OverBrowse, null, "");
            this.hasNotifyPlayerOverBrowse = true;
        }
        for (let i = 0; i < this.skills.length; i++) {
            this.skills[i].OperateCard();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    Get2ClientMessageMgr() {
        return this.parent.parent.parent.manager.Get2ClientMessageMgr();
    }
    GetPlayer() {
        return this.parent.parent.parent;
    }
    SetOperate(func, isExecute = true) {
        if (this.skills == null) {
            this.skills = new Array();
        }
        this.basicStatge++;
        let browse = new DtSkillPlayerBrowse_1.DtSkillPlayerBrowse(this.effect, this.basicStatge, this);
        browse.isExecute = isExecute;
        func(browse);
        this.skills.push(browse);
    }
    GetNewChooseCardsInfoWithMeetCheck(browse) {
        if (this.needCheckCardIsBothMeet && browse.IsNeedCheckCardIsBothMeet()) {
            if (this.skills[0] != browse) {
                let cards = this.skills[0].GetOpCards();
                if (cards != null && cards.length == 1) {
                    if (browse.ConditionCard(cards[0])) {
                        return this.skills[0].GetPlayerChooseCards();
                    }
                }
            }
        }
        return new Array();
    }
    OnSkillPlayerChooseOne(skill, uid) {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            if (this.cards[i].UidEquals(uid)) {
                skill.SetOperateCard(this.cards[i]);
                this.cards.splice(i, 1);
            }
        }
    }
    OnSkillPlayerChooseMul(skill, uids) {
        for (let j = 0; j < uids.length; j++) {
            let uid = uids[j];
            for (let i = this.cards.length - 1; i >= 0; i--) {
                if (this.cards[i].UidEquals(uid)) {
                    skill.SetOperateCard(this.cards[i]);
                    this.cards.splice(i, 1);
                }
            }
        }
    }
    OnSKillPlayerChooseALL(skill) {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            skill.SetOperateCard(this.cards[i]);
        }
        this.cards.length = 0;
    }
    DisableAllExecuteSkill() {
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].isExecute) {
                this.skills[i].isPlayerCancel = true;
            }
        }
    }
}
exports.DtGroupSkillPlayerBrowse = DtGroupSkillPlayerBrowse;
//# sourceMappingURL=DtGroupSkillPlayerBrowse.js.map