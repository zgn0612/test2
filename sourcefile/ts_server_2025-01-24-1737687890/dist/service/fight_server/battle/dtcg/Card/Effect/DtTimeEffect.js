"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtTimeEffect = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDurationTimeComponent_1 = require("../DtDurationTimeComponent");
const DtEffect_1 = require("./DtEffect");
class DtTimeEffect extends DtEffect_1.DtEffect {
    buffDurationType;
    buffDurationParam;
    OnOverFunc;
    durationComponent;
    TimeSetDurationType(type, time) {
        this.buffDurationType = type;
        this.buffDurationParam = time;
        this.TimeSetListen();
    }
    SetOverFunc(func) {
        this.OnOverFunc = func;
    }
    TimeSetListen() {
        if (this.buffDurationType != DtEnum_1.DtBuffDurationType.None) {
            if (this.durationComponent != null) {
                _Dcg_1.gLog.err("this buff has a duration component !!!! pleaseCheck");
            }
            else {
                this.durationComponent = new DtDurationTimeComponent_1.DtDurationTimeComponent(this.parent.parent.manager, this.GetThisCreatorPlayerId(), this.RemoveEffect, this);
            }
            this.durationComponent.SetBuffDuration(this.buffDurationType, this.buffDurationParam);
        }
    }
    GetThisCreatorPlayerId() {
        if (this.creator != null) {
            if (this.creator.offerEffectCard != null) {
                return this.creator.offerEffectCard.GetPlayer().playerId;
            }
            if (this.creator.parent != null) {
                return this.creator.parent.GetPlayer().playerId;
            }
        }
        return this.parent?.GetPlayer().playerId;
    }
    RemoveEffect() {
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
        if (this.parent) {
            this.parent.DeleteEffect(this);
        }
    }
    Clear() {
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
        if (this.OnOverFunc) {
            this.OnOverFunc.call(this.GetCreateor(), this);
        }
        this.OnOverFunc = null;
        super.Clear();
    }
}
exports.DtTimeEffect = DtTimeEffect;
//# sourceMappingURL=DtTimeEffect.js.map