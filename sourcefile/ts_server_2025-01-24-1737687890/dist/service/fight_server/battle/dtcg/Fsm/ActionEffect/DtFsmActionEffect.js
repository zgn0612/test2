"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmBaseMachine_1 = require("../Base/DtFsmBaseMachine");
const DtFsmActionEffect_Effecting_ChangeBattleState_1 = require("./States/DtFsmActionEffect_Effecting_ChangeBattleState");
const DtFsmActionEffect_Effecting_Degenerate_Effecting_1 = require("./States/DtFsmActionEffect_Effecting_Degenerate_Effecting");
const DtFsmActionEffect_Effecting_Degenerate_Start_1 = require("./States/DtFsmActionEffect_Effecting_Degenerate_Start");
const DtFsmActionEffect_Effecting_OnAttackDestroy_1 = require("./States/DtFsmActionEffect_Effecting_OnAttackDestroy");
const DtFsmActionEffect_Effecting_OnCardCannotInBattle_1 = require("./States/DtFsmActionEffect_Effecting_OnCardCannotInBattle");
const DtFsmActionEffect_Effecting_OnDestroy_1 = require("./States/DtFsmActionEffect_Effecting_OnDestroy");
const DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon_1 = require("./States/DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon");
const DtFsmActionEffect_Effecting_ReturnTo_1 = require("./States/DtFsmActionEffect_Effecting_ReturnTo");
const DtFsmActionEffect_End_1 = require("./States/DtFsmActionEffect_End");
const DtFsmActionEffect_Init_1 = require("./States/DtFsmActionEffect_Init");
const DtFsmActionEffect_Start_1 = require("./States/DtFsmActionEffect_Start");
class DtFsmActionEffect extends DtFsmBaseMachine_1.DtFsmBaseMachine {
    player;
    caster;
    receiveCard;
    actionEffectType;
    param;
    reason;
    extraOtherCard;
    effectParam;
    DegCallBack;
    EndCallBack;
    InitAddStates() {
        this.AddState(DtFsmActionEffect_Init_1.DtFsmActionEffect_Init);
        this.AddState(DtFsmActionEffect_Start_1.DtFsmActionEffect_Start);
        this.AddState(DtFsmActionEffect_Effecting_OnDestroy_1.DtFsmActionEffect_Effecting_OnDestroy);
        this.AddState(DtFsmActionEffect_Effecting_OnAttackDestroy_1.DtFsmActionEffect_Effecting_OnAttackDestroy);
        this.AddState(DtFsmActionEffect_Effecting_ReturnTo_1.DtFsmActionEffect_Effecting_ReturnTo);
        this.AddState(DtFsmActionEffect_Effecting_Degenerate_Start_1.DtFsmActionEffect_Effecting_Degenerate_Start);
        this.AddState(DtFsmActionEffect_Effecting_OnCardCannotInBattle_1.DtFsmActionEffect_Effecting_OnCardCannotInBattle);
        this.AddState(DtFsmActionEffect_Effecting_Degenerate_Effecting_1.DtFsmActionEffect_Effecting_Degenerate_Effecting);
        this.AddState(DtFsmActionEffect_Effecting_ChangeBattleState_1.DtFsmActionEffect_Effecting_ChangeBattleState);
        this.AddState(DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon_1.DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon);
        this.AddState(DtFsmActionEffect_End_1.DtFsmActionEffect_End);
        this.SetInitState(DtFsmActionEffect_Init_1.DtFsmActionEffect_Init.name);
    }
    SetCardBeEffect(player, caster, receive, effType, param) {
        this.player = player;
        this.caster = caster;
        this.receiveCard = receive;
        this.actionEffectType = effType;
        this.param = param;
        receive.CurrentInEffectType = effType;
        this.extraOtherCard = null;
        this.ChangeState(DtFsmActionEffect_Start_1.DtFsmActionEffect_Start.name);
        return this;
    }
    IsRunning() {
        return this.GetCurrentState().stateName != DtFsmActionEffect_Init_1.DtFsmActionEffect_Init.name || this.GetNextState() != null;
    }
    ForceOver() {
        this.ChangeState(DtFsmActionEffect_Init_1.DtFsmActionEffect_Init.name);
        this.receiveCard.CurrentInEffectType = DtEnum_1.DtActionEffectType.None;
        if (this.EndCallBack) {
            this.EndCallBack(false);
            this.EndCallBack = null;
        }
    }
    IsImmueEffect() {
        if (this.caster == null) {
            return false;
        }
        switch (this.actionEffectType) {
            case DtEnum_1.DtActionEffectType.EffectDestroy:
                if (this.receiveCard.HasBuff(DtEnum_1.DtBuffType.Immue_Opponent_destory_effect)) {
                    if (this.caster.GetPlayer() != this.receiveCard.GetPlayer()) {
                        return true;
                    }
                }
                else if (this.receiveCard.HasBuff(DtEnum_1.DtBuffType.Immue_Destory_effect)) {
                    return true;
                }
                else if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                    return true;
                }
                break;
            case DtEnum_1.DtActionEffectType.AttackDestroy:
                {
                    if (this.receiveCard.HasBuff(DtEnum_1.DtBuffType.NOT_DESTROY_WITH_ATTACK)) {
                        return true;
                    }
                }
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnHand:
                {
                    if (this.receiveCard.HasBuff(DtEnum_1.DtBuffType.IMMUE_RETURN_TO_HAN)) {
                        return true;
                    }
                    else if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                        return true;
                    }
                }
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnDeck:
                {
                    if (this.receiveCard.HasBuff(DtEnum_1.DtBuffType.IMMUE_RETURN_TO_DECK)) {
                        return true;
                    }
                    else if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                        return true;
                    }
                }
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnDefense:
                {
                    if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                        return true;
                    }
                }
                break;
            case DtEnum_1.DtActionEffectType.Degenerate:
                {
                    if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                        return true;
                    }
                }
                break;
            case DtEnum_1.DtActionEffectType.ChangeCardBattleState:
                {
                    if (this.receiveCard.CheckIsImmueEffect(this.caster)) {
                        return true;
                    }
                }
                break;
        }
        if (this.receiveCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            if (this.actionEffectType != DtEnum_1.DtActionEffectType.PlaceCardUnderOtherDigimon) {
                return true;
            }
        }
        return false;
    }
    OnPlayerChoose(uid) {
        this.effectParam = uid;
        this.GetCurrentState().OnExternalCall();
    }
    SetEndCallBack(call) {
        this.EndCallBack = call;
    }
    ShowLog() {
        _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtFsmActionEffect] log cuurent state is {0} and type is {1}", this.GetCurrentState().stateName, this.actionEffectType));
    }
}
exports.DtFsmActionEffect = DtFsmActionEffect;
//# sourceMappingURL=DtFsmActionEffect.js.map