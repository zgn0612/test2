"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST7_10_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.PENETRATE));
    }
}
exports.default = EC_ST7_10_2;
//# sourceMappingURL=EC_ST7_10_2.js.map