"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_UseCard_Magic_process_move_gy = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmUseCard_BaseState_1 = require("./DtFsmUseCard_BaseState");
const DtFsmUseCard_End_1 = require("./DtFsmUseCard_End");
class DtFsmUseCard_UseCard_Magic_process_move_gy extends DtFsmUseCard_BaseState_1.DtFsmUseCard_BaseState {
    Excute() {
        if (this.GetMachine().card.whereAreaType == DtEnum_1.DtAreaType.WAIT) {
            this.GetMachine().manager.OnCardMoveTo(null, this.GetMachine().card, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.MagicHaUseToGy);
        }
        this.GetMachine().ChangeState(DtFsmUseCard_End_1.DtFsmUseCard_End.name);
    }
}
exports.DtFsmUseCard_UseCard_Magic_process_move_gy = DtFsmUseCard_UseCard_Magic_process_move_gy;
//# sourceMappingURL=DtFsmUseCard_UseCard_Magic_process_move_gy.js.map