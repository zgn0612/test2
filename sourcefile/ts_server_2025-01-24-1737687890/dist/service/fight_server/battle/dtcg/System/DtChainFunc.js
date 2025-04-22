"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtChainFunc = void 0;
class DtChainFunc {
    wait = 0;
    obj;
    func;
    constructor(obj, func) {
        this.obj = obj;
        this.func = func;
        this.wait = 0;
    }
    Run() {
        if (this.func) {
            this.func.call(this.obj);
        }
    }
}
exports.DtChainFunc = DtChainFunc;
//# sourceMappingURL=DtChainFunc.js.map