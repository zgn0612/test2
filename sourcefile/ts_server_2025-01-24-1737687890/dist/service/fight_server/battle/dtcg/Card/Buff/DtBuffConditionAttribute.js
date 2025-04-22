"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffConditionAttribute = void 0;
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffConditionAttribute extends DtBuffBase_1.DtBuffBase {
    func;
    creator;
    constructor(type, func, creator) {
        super();
        this.type = type;
        this.func = func;
        this.creator = creator;
    }
    Condition() {
        if (this.func) {
            return this.func.call(this.creator, this);
        }
        return true;
    }
    IsBuffActive() {
        return this.Condition();
    }
    Clear() {
        super.Clear();
        this.func = null;
        this.creator = null;
    }
}
exports.DtBuffConditionAttribute = DtBuffConditionAttribute;
//# sourceMappingURL=DtBuffConditionAttribute.js.map