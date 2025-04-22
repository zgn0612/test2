"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtEffectBase = void 0;
const DtEffectType_1 = require("./DtEffectType");
class DtEffectBase {
    effectIndex;
    chianId = -1;
    parent;
    isOver;
    effectDirect;
    constructor(parent) {
        this.parent = parent;
        this.isOver = true;
        this.effectDirect = false;
        this.chianId = -1;
        this.effectIndex = -1;
    }
    OnEffect(canImmediately = true) {
        return false;
    }
    OnTick() {
    }
    SetCardInTrigger() {
        this.isOver = false;
    }
    IsOver() {
        return this.isOver;
    }
    OnPlayerChooseOne(uid) {
    }
    OnPlayerChooseMul(uids) {
    }
    CheckActivatePosition() {
        return true;
    }
    GetActiveNeedAsk() {
        return false;
    }
    GetCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                return list[i];
            }
        }
        return null;
    }
    checkSameFunc;
    CheckSameChainMsg(a, b) {
        if (this.checkSameFunc) {
            return this.checkSameFunc(a, b);
        }
        return a;
    }
    SetCheckSameChainCall(func) {
        this.checkSameFunc = func;
    }
    PlayerNotActivate;
    PlayerChooseCancelActivate() {
        if (this.PlayerNotActivate) {
            return this.PlayerNotActivate();
        }
    }
    SetPlayerCancelActivateCall(func) {
        this.PlayerNotActivate = func;
    }
    GetTriggerType() {
        return DtEffectType_1.DtEffectType.Other;
    }
    CanActiveWithCheckChain() {
        if (this.GetTriggerType() == DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect) {
            if (this.chianId == this.GetCurrentSysChainId()) {
                return false;
            }
        }
        return true;
    }
    GetCurrentSysChainId() {
        return this.parent.parent.manager.GetCurrentSysChainId();
    }
    ShowLog() {
        return "";
    }
    GetPlayer() {
        if (this.parent) {
            return this.parent.GetPlayer();
        }
    }
    Clear() {
        this.checkSameFunc = null;
        this.parent = null;
    }
}
exports.DtEffectBase = DtEffectBase;
//# sourceMappingURL=DtEffectBase.js.map