"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_ChangeBattleState = void 0;
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_ChangeBattleState extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        if (this.GetMachine().IsImmueEffect()) {
            this.GetMachine().ForceOver();
            return;
        }
        this.GetMachine().receiveCard.cardBattleState = this.GetMachine().param;
        this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(this.GetMachine().receiveCard.GetPlayer(), this.GetMachine().receiveCard);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardChangeBattleState, new DtEventMsg_1.DtMsg_DigimonChangeBattleState(this.GetMachine().receiveCard, this.GetMachine().param, this.GetMachine().reason));
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_ChangeBattleState = DtFsmActionEffect_Effecting_ChangeBattleState;
//# sourceMappingURL=DtFsmActionEffect_Effecting_ChangeBattleState.js.map