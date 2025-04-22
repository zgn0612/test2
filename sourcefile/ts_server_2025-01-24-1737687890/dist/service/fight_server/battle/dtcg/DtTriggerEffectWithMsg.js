"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtTriggerEffectWithMsg = void 0;
class DtTriggerEffectWithMsg {
    effect;
    msg;
    currentChainId;
    EffectIndex;
    state = 0;
    constructor(eff, msg) {
        this.effect = eff;
        this.msg = msg;
        this.state = 0;
    }
    get parent() {
        return this.effect.parent;
    }
    get effectDirect() {
        return this.effect.effectDirect;
    }
    OnTick() {
        this.effect.eventMsg = this.msg;
        this.effect.OnTick();
    }
    CheckAllCondition() {
        this.effect.eventMsg = this.msg;
        return this.effect.CheckAllCondition();
    }
    ChainCheckCondition() {
        this.effect.eventMsg = this.msg;
        return this.effect.ChainCheckCondition();
    }
    HasCondition() {
        return this.effect.HasCondition();
    }
    PreCheckPlayerUsefulActivate() {
        this.effect.eventMsg = this.msg;
        return this.effect.PreCheckPlayerUsefulActivate();
    }
    OnEffect(canImmediately) {
        this.state = 1;
        this.effect.eventMsg = this.msg;
        return this.effect.OnEffect(canImmediately);
    }
    IsOver() {
        if (this.state == 0 && this.effect.parent != null) {
            return false;
        }
        this.effect.eventMsg = this.msg;
        return this.effect.IsOver();
    }
    GetTriggerType() {
        return this.effect.GetTriggerType();
    }
    GetOtherType() {
        return this.effect.GetOtherType();
    }
    CheckOtherTypeIs(e) {
        return this.effect.CheckOtherTypeIs(e);
    }
    OnPlayerChooseOne(uid) {
        this.effect.eventMsg = this.msg;
        this.effect.OnPlayerChooseOne(uid);
    }
    OnPlayerChooseMul(uids) {
        this.effect.eventMsg = this.msg;
        this.effect.OnPlayerChooseMul(uids);
    }
    CheckActivatePosition() {
        this.effect.eventMsg = this.msg;
        return this.effect.CheckActivatePosition();
    }
    GetActiveNeedAsk() {
        this.effect.eventMsg = this.msg;
        return this.effect.GetActiveNeedAsk();
    }
    GetCreateor() {
        return this.effect.GetCreateor();
    }
    GetActivateCard() {
        return this.effect.GetActivateCard();
    }
    GetRealityOriginCard() {
        return this.effect.GetRealityOriginCard();
    }
    SetCardInTrigger() {
        this.effect.eventMsg = this.msg;
        this.effect.SetCardInTrigger();
    }
    Clear() {
        if (this.effect) {
            this.effect.Clear();
            this.effect = null;
        }
        this.msg = null;
    }
}
exports.DtTriggerEffectWithMsg = DtTriggerEffectWithMsg;
//# sourceMappingURL=DtTriggerEffectWithMsg.js.map