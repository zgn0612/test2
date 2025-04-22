"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtPlayerChooseBase = exports.DtPlayerChooseCardInfo = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
class DtPlayerChooseCardInfo {
    card;
    isused;
    constructor(card, used) {
        this.card = card;
        this.isused = used;
    }
}
exports.DtPlayerChooseCardInfo = DtPlayerChooseCardInfo;
class DtPlayerChooseBase {
    parent;
    selectPlayer;
    type;
    compareExtend = DtEnum_1.DtCompareExtend.None;
    typeNum = 0;
    active = true;
    canCancel = false;
    obj;
    initEvent;
    equalModeFailIfNotSatisfield = false;
    constructor(parent, selecter, type, num, canCancel) {
        this.parent = parent;
        this.selectPlayer = selecter;
        this.type = type;
        this.typeNum = num;
        this.active = true;
        this.canCancel = canCancel;
        this.equalModeFailIfNotSatisfield = false;
    }
    OnSendPlayerChoose(chooseCards) {
        if (this.initEvent) {
            this.initEvent.call(this.obj, this);
        }
        if (this.active) {
            if (this.type == DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT) {
                if (chooseCards.length < this.typeNum) {
                    if (this.equalModeFailIfNotSatisfield) {
                        return false;
                    }
                    this.parent.Get2ClientMessageMgr().PlayerChooseCard(this.GetChoosePlayer(), this.parent.GetParentCard(), this.type, chooseCards, chooseCards.length, this.parent.parentEffect, this.parent.effectStage, this.canCancel, this.compareExtend);
                    return true;
                }
            }
            if (this.type == DtMessageData_1.DtProtoEnum_Compare.GREATE_EQUAL) {
                if (chooseCards.length < this.typeNum) {
                    return false;
                }
            }
            this.parent.Get2ClientMessageMgr().PlayerChooseCard(this.GetChoosePlayer(), this.parent.GetParentCard(), this.type, chooseCards, this.typeNum, this.parent.parentEffect, this.parent.effectStage, this.canCancel, this.compareExtend);
            return true;
        }
        return false;
    }
    GetChoosePlayer() {
        if (this.selectPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
            return this.parent.GetParentPlayer();
        }
        else {
            return this.parent.GetParentPlayer().GetOppPlayer();
        }
    }
    GetParentEffect() {
        return this.parent.parentEffect;
    }
    SetInitEvent(obj, func) {
        this.obj = obj;
        this.initEvent = func;
    }
    ChangeTypeNum(num) {
        this.typeNum = num;
    }
    SetActive(active) {
        this.active = active;
    }
    SetCanCancel(can) {
        this.canCancel = can;
    }
    GetCompare() {
        return this.type;
    }
    GetNum() {
        return this.typeNum;
    }
    IsActive() {
        if (this.initEvent) {
            this.initEvent.call(this.obj, this);
        }
        return this.active;
    }
    GetChooseType() {
        return this.selectPlayer;
    }
}
exports.DtPlayerChooseBase = DtPlayerChooseBase;
//# sourceMappingURL=DtPlayerChooseBase.js.map