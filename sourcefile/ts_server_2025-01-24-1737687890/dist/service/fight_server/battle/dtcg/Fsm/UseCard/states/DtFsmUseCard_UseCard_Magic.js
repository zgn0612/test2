"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_UseCard_Magic = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmUseCard_BaseState_1 = require("./DtFsmUseCard_BaseState");
const DtFsmUseCard_UseCard_Magic_process_move_gy_1 = require("./DtFsmUseCard_UseCard_Magic_process_move_gy");
class DtFsmUseCard_UseCard_Magic extends DtFsmUseCard_BaseState_1.DtFsmUseCard_BaseState {
    fsmIndex = 0;
    Enter() {
        this.fsmIndex = 0;
        let card = this.GetMachine().card;
        let cost = this.GetMachine().GetPlayCost();
        this.GetMachine().manager.OnCardMoveTo(null, card, DtEnum_1.DtAreaType.WAIT, DtMessageData_1.DtProtoEnum_MoveReason.CardPlayMagicFromHand);
        if (this.GetMachine().useCost) {
            this.GetMachine().manager.ChangeReduceCost(card, cost, DtMessageData_1.DtProtoEnum_MoveReason.PlayCard);
        }
        if (this.GetMachine().onEffect) {
            card.OnUseEffect();
        }
        this.GetMachine().manager.ImmediatelyCreateCurrentNewChain();
    }
    Excute() {
        this.fsmIndex++;
        switch (this.fsmIndex) {
            case 1:
                let card = this.GetMachine().card;
                let reason = this.GetMachine().useReason;
                let where = this.GetMachine().useWhere;
                this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardOnPlay, new DtEventMsg_1.DtMsg_OnPlay(card, reason, where));
                break;
            case 2:
                this.GetMachine().ChangeState(DtFsmUseCard_UseCard_Magic_process_move_gy_1.DtFsmUseCard_UseCard_Magic_process_move_gy.name);
                break;
        }
    }
}
exports.DtFsmUseCard_UseCard_Magic = DtFsmUseCard_UseCard_Magic;
//# sourceMappingURL=DtFsmUseCard_UseCard_Magic.js.map