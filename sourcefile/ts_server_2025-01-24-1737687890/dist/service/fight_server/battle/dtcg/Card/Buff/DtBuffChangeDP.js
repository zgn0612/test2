"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffChangeDP = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffChangeDP extends DtBuffBase_1.DtBuffBase {
    changeDp = 0;
    constructor(changeDp) {
        super();
        this.changeDp = changeDp;
        this.type = DtEnum_1.DtBuffType.CHANGE_DP;
    }
    GetInt() {
        return this.changeDp;
    }
    GetBuffActiveValue() {
        return this.changeDp;
    }
}
exports.DtBuffChangeDP = DtBuffChangeDP;
//# sourceMappingURL=DtBuffChangeDP.js.map