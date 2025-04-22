"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Start = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_Effecting_ChangeBattleState_1 = require("./DtFsmActionEffect_Effecting_ChangeBattleState");
const DtFsmActionEffect_Effecting_Degenerate_Start_1 = require("./DtFsmActionEffect_Effecting_Degenerate_Start");
const DtFsmActionEffect_Effecting_OnAttackDestroy_1 = require("./DtFsmActionEffect_Effecting_OnAttackDestroy");
const DtFsmActionEffect_Effecting_OnCardCannotInBattle_1 = require("./DtFsmActionEffect_Effecting_OnCardCannotInBattle");
const DtFsmActionEffect_Effecting_OnDestroy_1 = require("./DtFsmActionEffect_Effecting_OnDestroy");
const DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon_1 = require("./DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon");
const DtFsmActionEffect_Effecting_ReturnTo_1 = require("./DtFsmActionEffect_Effecting_ReturnTo");
class DtFsmActionEffect_Start extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        if (this.GetMachine().IsImmueEffect()) {
            let receiveCard = this.GetMachine().receiveCard;
            if (receiveCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(receiveCard.GetPlayer(), DtMessageData_1.ClientShowType.IMMUE_EFFECT, [receiveCard.uid], "");
            }
            this.GetMachine().ForceOver();
            return;
        }
    }
    Excute() {
        switch (this.GetMachine().actionEffectType) {
            case DtEnum_1.DtActionEffectType.AttackDestroy:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_OnAttackDestroy_1.DtFsmActionEffect_Effecting_OnAttackDestroy.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.AtkZeroDestroy:
            case DtEnum_1.DtActionEffectType.EffectDestroy:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_OnDestroy_1.DtFsmActionEffect_Effecting_OnDestroy.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnHand:
            case DtEnum_1.DtActionEffectType.BattleReturnDeck:
            case DtEnum_1.DtActionEffectType.BattleReturnDefense:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_ReturnTo_1.DtFsmActionEffect_Effecting_ReturnTo.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.Degenerate:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_Degenerate_Start_1.DtFsmActionEffect_Effecting_Degenerate_Start.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.CardCannotInBattle:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_OnCardCannotInBattle_1.DtFsmActionEffect_Effecting_OnCardCannotInBattle.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.ChangeCardBattleState:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_ChangeBattleState_1.DtFsmActionEffect_Effecting_ChangeBattleState.name);
                }
                break;
            case DtEnum_1.DtActionEffectType.PlaceCardUnderOtherDigimon:
                {
                    this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon_1.DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon.name);
                }
                break;
        }
    }
}
exports.DtFsmActionEffect_Start = DtFsmActionEffect_Start;
//# sourceMappingURL=DtFsmActionEffect_Start.js.map