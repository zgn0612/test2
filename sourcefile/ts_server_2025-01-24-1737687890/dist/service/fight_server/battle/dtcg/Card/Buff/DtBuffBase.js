"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffBase = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDurationTimeComponent_1 = require("../DtDurationTimeComponent");
class DtBuffBase {
    inherit = false;
    parent;
    type = DtEnum_1.DtBuffType.None;
    targetCard;
    buffDurationType;
    buffDurationParam = 1;
    durationComponent;
    constructor() {
        this.buffDurationType = DtEnum_1.DtBuffDurationType.None;
    }
    IsAffected() {
        if (this.parent != null) {
            if (this.targetCard != null) {
                if (this.targetCard._NotCheckEffectedBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT)) {
                    if (this.targetCard.GetPlayer() != this.parent.GetPlayer()) {
                        return false;
                    }
                }
                if (this.targetCard._NotCheckEffectedBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON)) {
                    if (this.targetCard.GetPlayer() != this.parent.GetPlayer() && this.parent.parent.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    Condition() {
        return true;
    }
    GetInt() {
        return 0;
    }
    GetAny() {
        return null;
    }
    IsBuffActive() {
        return true;
    }
    GetBuffActiveValue() {
        return 0;
    }
    SetBuffDurationType(type, param) {
        this.buffDurationType = type;
        if (param) {
            this.buffDurationParam = param;
        }
        return this;
    }
    SetBuffListen(manager) {
        if (this.buffDurationType != DtEnum_1.DtBuffDurationType.None) {
            if (this.durationComponent != null) {
                _Dcg_1.gLog.err("this buff has a duration component !!!! pleaseCheck");
            }
            else {
                this.durationComponent = new DtDurationTimeComponent_1.DtDurationTimeComponent(manager, this.GetThisBuffPlayerId(), this.RemoveBuff, this);
            }
            this.durationComponent.SetBuffDuration(this.buffDurationType, this.buffDurationParam);
        }
    }
    GetThisBuffPlayerId() {
        if (this.parent != null) {
            return this.parent.parent.GetPlayer().playerId;
        }
        if (this.targetCard) {
            return this.targetCard.GetPlayer().playerId;
        }
        return null;
    }
    RemoveBuff() {
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
        if (this.targetCard) {
            this.targetCard.RemoveBuff(this);
        }
    }
    Clear() {
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
        this.parent = null;
        this.targetCard = null;
    }
}
exports.DtBuffBase = DtBuffBase;
//# sourceMappingURL=DtBuffBase.js.map