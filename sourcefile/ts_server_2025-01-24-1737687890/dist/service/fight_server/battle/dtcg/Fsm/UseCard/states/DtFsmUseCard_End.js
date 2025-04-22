"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_End = void 0;
const DtFsmUseCard_BaseState_1 = require("./DtFsmUseCard_BaseState");
const DtFsmUseCard_Init_1 = require("./DtFsmUseCard_Init");
class DtFsmUseCard_End extends DtFsmUseCard_BaseState_1.DtFsmUseCard_BaseState {
    Enter() {
    }
    Excute() {
        this.GetMachine().ChangeState(DtFsmUseCard_Init_1.DtFsmUseCard_Init.name);
    }
}
exports.DtFsmUseCard_End = DtFsmUseCard_End;
//# sourceMappingURL=DtFsmUseCard_End.js.map