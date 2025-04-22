"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffChangeCost = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffChangeCost extends DtBuffBase_1.DtBuffBase {
    cost = 0;
    constructor(changeDp) {
        super();
        this.cost = changeDp;
        this.type = DtEnum_1.DtBuffType.CHANGE_COST;
    }
    GetInt() {
        return this.cost;
    }
    GetBuffActiveValue() {
        return this.cost;
    }
}
exports.DtBuffChangeCost = DtBuffChangeCost;
//# sourceMappingURL=DtBuffChangeCost.js.map