"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffAttribute_int = void 0;
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffAttribute_int extends DtBuffBase_1.DtBuffBase {
    value;
    constructor(type, value) {
        super();
        this.type = type;
        this.value = value;
    }
    GetInt() {
        return this.value;
    }
    GetAny() {
        return this.value;
    }
    GetBuffActiveValue() {
        return this.value;
    }
}
exports.DtBuffAttribute_int = DtBuffAttribute_int;
//# sourceMappingURL=DtBuffAttribute_int.js.map