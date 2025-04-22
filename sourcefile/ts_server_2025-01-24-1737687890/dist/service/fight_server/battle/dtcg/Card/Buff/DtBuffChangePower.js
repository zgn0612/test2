"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtBuffChangePower = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffBase_1 = require("./DtBuffBase");
class DtBuffChangePower extends DtBuffBase_1.DtBuffBase {
    power = 0;
    constructor(power) {
        super();
        this.power = power;
        this.type = DtEnum_1.DtBuffType.CHANGE_POWER;
    }
    GetInt() {
        return this.power;
    }
    GetBuffActiveValue() {
        return this.power;
    }
}
exports.DtBuffChangePower = DtBuffChangePower;
//# sourceMappingURL=DtBuffChangePower.js.map