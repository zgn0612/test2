"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffCommonInt = void 0;
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffCommonInt extends DtBuffBase_1.DtBuffBase {
    func;
    creator;
    constructor(type, func, creator) {
        super();
        this.type = type;
        this.func = func;
        this.creator = creator;
    }
    GetInt() {
        if (this.func) {
            return this.func.call(this.creator, this);
        }
        return 0;
    }
    IsBuffActive() {
        return this.GetInt() != 0;
    }
    GetBuffActiveValue() {
        return this.GetInt();
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
}
exports.DtBuffCommonInt = DtBuffCommonInt;
//# sourceMappingURL=DtBuffConditionInt.js.map