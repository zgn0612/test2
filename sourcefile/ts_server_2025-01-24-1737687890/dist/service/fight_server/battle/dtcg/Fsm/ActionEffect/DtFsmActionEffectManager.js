"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffectManager = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtEventMsg_1 = require("../../Data/DtEventMsg");
const DtEvent_1 = require("../../DtEvent");
const DtFsmActionEffect_1 = require("./DtFsmActionEffect");
var AFState;
(function (AFState) {
    AFState[AFState["None"] = 0] = "None";
    AFState[AFState["Active"] = 1] = "Active";
    AFState[AFState["Start"] = 2] = "Start";
    AFState[AFState["Running"] = 3] = "Running";
    AFState[AFState["OneOver"] = 4] = "OneOver";
})(AFState || (AFState = {}));
class DtFsmActionEffectManager {
    manager;
    state;
    pool;
    allFsmActions;
    curFsmAction;
    player;
    caster;
    actionEffectType;
    constructor(manager) {
        this.manager = manager;
        this.allFsmActions = new Array();
        this.pool = new Array();
        this.state = AFState.None;
    }
    CanPushEffect(player, casterCard, effType) {
        if (this.state != AFState.Active) {
            return false;
        }
        if (this.allFsmActions.length == 0) {
            return false;
        }
        if (this.player != player) {
            return false;
        }
        if (this.caster != casterCard) {
            return false;
        }
        if (this.actionEffectType != effType) {
            return false;
        }
        return true;
    }
    SetCardBeEffect(player, casterCard, receiveCard, effType, param) {
        let item = this.PushCardBeEffect(player, casterCard, receiveCard, effType, param);
        this.state = AFState.Active;
        this.player = player;
        this.caster = casterCard;
        this.actionEffectType = effType;
        return item;
    }
    PushCardBeEffect(player, casterCard, receiveCard, effType, param) {
        let item = this.GetFree();
        item.SetCardBeEffect(player, casterCard, receiveCard, effType, param);
        this.allFsmActions.push(item);
        return item;
    }
    GetFree() {
        if (this.pool.length > 0) {
            let item = this.pool.pop();
            return item;
        }
        let t = new DtFsmActionEffect_1.DtFsmActionEffect(this.manager);
        return t;
    }
    OnTick() {
        switch (this.state) {
            case AFState.Active:
                this.state = AFState.Start;
                break;
            case AFState.Start:
                let msg = new DtEventMsg_1.DtMsg_OnBeforeActionEffect(this.allFsmActions, this.actionEffectType);
                msg.casterCard = this.caster;
                this.manager.FireListener(DtEvent_1.DtEventType.CardBeforeDActEffect, msg);
                this.state = AFState.Running;
                break;
            case AFState.Running:
                if (this.curFsmAction == null) {
                    this.state = AFState.OneOver;
                }
                else {
                    if (this.curFsmAction.IsRunning()) {
                        this.curFsmAction.OnTick();
                    }
                    else {
                        this.pool.push(this.curFsmAction);
                        this.curFsmAction = null;
                    }
                }
                break;
            case AFState.OneOver:
                this.SetCurrentActEff();
                if (this.curFsmAction == null) {
                    this.player = null;
                    this.caster = null;
                    this.actionEffectType = DtEnum_1.DtActionEffectType.None;
                    this.state = AFState.None;
                }
                else {
                    this.state = AFState.Running;
                }
                break;
        }
    }
    SetCurrentActEff() {
        if (this.curFsmAction == null && this.allFsmActions.length > 0) {
            this.curFsmAction = this.allFsmActions.shift();
        }
    }
    GetAllReceiveCards() {
        let all = new Array();
        for (let i = 0; i < this.allFsmActions.length; i++) {
            all.push(this.allFsmActions[i].receiveCard);
        }
        return all;
    }
    IsRunning() {
        if (this.curFsmAction != null) {
            return true;
        }
        if (this.allFsmActions.length > 0) {
            return true;
        }
        return false;
    }
    OnPlayerChoose(uid) {
        if (this.curFsmAction && this.curFsmAction.IsRunning()) {
            this.curFsmAction.OnPlayerChoose(uid);
            return true;
        }
        return false;
    }
    ForceOverEffect(receiveCard) {
        for (let i = this.allFsmActions.length - 1; i >= 0; i--) {
            if (this.allFsmActions[i].receiveCard == receiveCard) {
                this.allFsmActions.splice(i, 1);
            }
        }
    }
    ShowLog() {
        if (this.curFsmAction && this.curFsmAction.IsRunning()) {
            this.curFsmAction.ShowLog();
        }
    }
    Clear() {
        this.allFsmActions = null;
        this.pool = null;
    }
}
exports.DtFsmActionEffectManager = DtFsmActionEffectManager;
//# sourceMappingURL=DtFsmActionEffectManager.js.map