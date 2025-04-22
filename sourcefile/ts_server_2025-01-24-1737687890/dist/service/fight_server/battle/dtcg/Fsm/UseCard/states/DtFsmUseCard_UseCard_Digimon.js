"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_UseCard_Digimon = void 0;
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmUseCard_BaseState_1 = require("./DtFsmUseCard_BaseState");
const DtFsmUseCard_End_1 = require("./DtFsmUseCard_End");
class DtFsmUseCard_UseCard_Digimon extends DtFsmUseCard_BaseState_1.DtFsmUseCard_BaseState {
    Enter() {
        let card = this.GetMachine().card;
        let cost = this.GetMachine().GetPlayCost();
        let reason = this.GetMachine().useReason;
        card.ResetState();
        if (this.GetMachine().stateActiveToBattle) {
            this.GetPlayer().DigimonEffectGoBattle(card, this.GetMachine().cardPlayIndex, reason);
        }
        else {
            this.GetPlayer().DigimonEffectGoBattleAndResetState(card, this.GetMachine().cardPlayIndex, reason);
        }
        if (this.GetMachine().useCost) {
            this.GetMachine().manager.ChangeReduceCost(card, cost, DtMessageData_1.DtProtoEnum_MoveReason.PlayCard);
        }
        card.OnInBattleArea();
    }
    Excute() {
        let card = this.GetMachine().card;
        let reason = this.GetMachine().useReason;
        let where = this.GetMachine().useWhere;
        let msg = new DtEventMsg_1.DtMsg_OnPlay(card, reason, where);
        if (this.GetMachine().onEffect) {
            this.GetMachine().card.OnPlay(msg);
        }
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardOnPlay, msg);
        this.GetMachine().manager.CheckBattlefieldDigimon();
        this.GetMachine().ChangeState(DtFsmUseCard_End_1.DtFsmUseCard_End.name);
    }
}
exports.DtFsmUseCard_UseCard_Digimon = DtFsmUseCard_UseCard_Digimon;
//# sourceMappingURL=DtFsmUseCard_UseCard_Digimon.js.map