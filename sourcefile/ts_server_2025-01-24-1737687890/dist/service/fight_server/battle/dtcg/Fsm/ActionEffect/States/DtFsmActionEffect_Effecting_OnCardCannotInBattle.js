"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_OnCardCannotInBattle = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_OnCardCannotInBattle extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        this.GetMachine().receiveCard.ClearCardOriginListToGy();
        this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().receiveCard, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.CAN_NOT_IN_BATTLE);
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_OnCardCannotInBattle = DtFsmActionEffect_Effecting_OnCardCannotInBattle;
//# sourceMappingURL=DtFsmActionEffect_Effecting_OnCardCannotInBattle.js.map