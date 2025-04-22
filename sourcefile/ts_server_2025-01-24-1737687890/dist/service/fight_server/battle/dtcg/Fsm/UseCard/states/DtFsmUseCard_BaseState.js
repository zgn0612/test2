"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_BaseState = void 0;
const DtFsmBaseState_1 = require("../../Base/DtFsmBaseState");
class DtFsmUseCard_BaseState extends DtFsmBaseState_1.DtFsmBaseState {
    GetMachine() {
        return this.fsmMachine;
    }
    GetPlayer() {
        return this.GetMachine().player;
    }
}
exports.DtFsmUseCard_BaseState = DtFsmUseCard_BaseState;
//# sourceMappingURL=DtFsmUseCard_BaseState.js.map