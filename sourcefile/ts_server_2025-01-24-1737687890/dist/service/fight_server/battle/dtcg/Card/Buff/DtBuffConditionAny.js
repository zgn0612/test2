"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffCommonAny = void 0;
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffCommonAny extends DtBuffBase_1.DtBuffBase {
    func;
    creator;
    constructor(type, func, creator) {
        super();
        this.type = type;
        this.func = func;
        this.creator = creator;
    }
    GetAny() {
        if (this.func) {
            return this.func.call(this.creator, this);
        }
        return 0;
    }
    IsBuffActive() {
        return this.GetAny() != 0;
    }
    GetBuffActiveValue() {
        return this.GetAny();
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
}
exports.DtBuffCommonAny = DtBuffCommonAny;
//# sourceMappingURL=DtBuffConditionAny.js.map