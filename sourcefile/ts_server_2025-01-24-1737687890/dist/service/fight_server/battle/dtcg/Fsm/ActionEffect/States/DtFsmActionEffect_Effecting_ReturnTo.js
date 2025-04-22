"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_ReturnTo = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_ReturnTo extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        if (this.GetMachine().IsImmueEffect()) {
            this.GetMachine().ForceOver();
            return;
        }
        this.GetMachine().receiveCard.ClearCardOriginListToGy();
        let player = this.GetMachine().manager.GetPlayer(this.GetMachine().receiveCard.parent.playerId);
        if (this.GetMachine().receiveCard.isToken == true) {
            this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.TOKEN, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
            return;
        }
        if (this.GetMachine().receiveCard.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
            this.GetMachine().manager.OnCardMoveToBottom(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.DIGITAMA, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
            return;
        }
        switch (this.GetMachine().actionEffectType) {
            case DtEnum_1.DtActionEffectType.BattleReturnHand:
                this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnDeck:
                if (this.GetMachine().param == 1) {
                    this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
                else {
                    this.GetMachine().manager.OnCardMoveToBottom(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
                break;
            case DtEnum_1.DtActionEffectType.BattleReturnDefense:
                if (this.GetMachine().param == 1) {
                    this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
                else {
                    this.GetMachine().manager.OnCardMoveToBottom(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
                break;
        }
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_ReturnTo = DtFsmActionEffect_Effecting_ReturnTo;
//# sourceMappingURL=DtFsmActionEffect_Effecting_ReturnTo.js.map