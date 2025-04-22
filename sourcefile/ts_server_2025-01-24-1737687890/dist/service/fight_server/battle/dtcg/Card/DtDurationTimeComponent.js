"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtDurationTimeComponent = void 0;
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../Data/DtEnum");
const DtEvent_1 = require("../DtEvent");
class DtDurationTimeComponent {
    manager;
    playerId;
    buffDurationType;
    buffDurationParam = 1;
    buffOverCallBack;
    callObj;
    constructor(manager, playerId, buffOver, obj) {
        this.manager = manager;
        this.playerId = playerId;
        this.buffDurationParam = 1;
        this.buffOverCallBack = buffOver;
        this.callObj = obj;
    }
    SetBuffDuration(type, param) {
        this.buffDurationType = type;
        if (param) {
            this.buffDurationParam = param;
        }
        if (type == DtEnum_1.DtBuffDurationType.CurrentEffectChainOver) {
            this.buffDurationParam = this.manager.GetCurrentSysChainId();
        }
        this.SetBuffListen();
    }
    SetBuffListen() {
        switch (this.buffDurationType) {
            case DtEnum_1.DtBuffDurationType.RoundOver:
            case DtEnum_1.DtBuffDurationType.RoundOverSelf:
            case DtEnum_1.DtBuffDurationType.RoundOverOpponent:
                this.manager.AddListener(DtEvent_1.DtEventType.BuffRoundOver, this, this.RoundOverCheck);
                break;
            case DtEnum_1.DtBuffDurationType.AfterAtkJudge:
                this.manager.AddListener(DtEvent_1.DtEventType.AfterAtkJudge, this, this.RemoveBuff);
                break;
            case DtEnum_1.DtBuffDurationType.PhaseActiveOver:
            case DtEnum_1.DtBuffDurationType.PhaseActiveOverSelf:
            case DtEnum_1.DtBuffDurationType.PhaseActiveOverOpponent:
                this.manager.AddListener(DtEvent_1.DtEventType.PhaseActiveOver, this, this.PhaseActiveOverCheck);
                break;
            case DtEnum_1.DtBuffDurationType.CurrentEffectChainOver:
                this.manager.AddListener(DtEvent_1.DtEventType.ChainEffectOver, this, this.ChainEffectOver);
                break;
        }
    }
    RoundOverCheck(msg) {
        switch (this.buffDurationType) {
            case DtEnum_1.DtBuffDurationType.RoundOver:
                this.buffDurationParam--;
                break;
            case DtEnum_1.DtBuffDurationType.RoundOverSelf:
                if (msg.playerId.equals(this.playerId)) {
                    this.buffDurationParam--;
                }
                break;
            case DtEnum_1.DtBuffDurationType.RoundOverOpponent:
                if (msg.playerId.equals(this.playerId) == false) {
                    this.buffDurationParam--;
                }
                break;
        }
        if (this.buffDurationParam <= 0) {
            this.RemoveBuff();
        }
    }
    PhaseActiveOverCheck(msg) {
        switch (this.buffDurationType) {
            case DtEnum_1.DtBuffDurationType.PhaseActiveOver:
                this.buffDurationParam--;
                break;
            case DtEnum_1.DtBuffDurationType.PhaseActiveOverSelf:
                if (msg.playerId == this.playerId) {
                    this.buffDurationParam--;
                }
                break;
            case DtEnum_1.DtBuffDurationType.PhaseActiveOverOpponent:
                if (msg.playerId != this.playerId) {
                    this.buffDurationParam--;
                }
                break;
        }
        if (this.buffDurationParam <= 0) {
            this.RemoveBuff();
        }
    }
    ChainEffectOver(msg) {
        if (this.buffDurationParam <= msg.chainId) {
            this.RemoveBuff();
            _Dcg_1.gLog.err("[battle logic test]ChainEffectOver !!!!!!");
        }
    }
    RemoveBuff() {
        this.RemoveBuffListen();
        if (this.buffOverCallBack) {
            this.buffOverCallBack.call(this.callObj);
        }
    }
    RemoveBuffListen() {
        if (this.manager) {
            this.manager.RemoveListener(DtEvent_1.DtEventType.BuffRoundOver, this);
            this.manager.RemoveListener(DtEvent_1.DtEventType.AfterAtkJudge, this);
            this.manager.RemoveListener(DtEvent_1.DtEventType.PhaseActiveOver, this);
            this.manager.RemoveListener(DtEvent_1.DtEventType.ChainEffectOver, this);
        }
    }
    Clear() {
        this.RemoveBuffListen();
        this.buffOverCallBack = null;
    }
}
exports.DtDurationTimeComponent = DtDurationTimeComponent;
//# sourceMappingURL=DtDurationTimeComponent.js.map