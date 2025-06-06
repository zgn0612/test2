"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST7_10_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffChangePower_1.DtBuffChangePower(1));
    }
}
exports.default = EC_ST7_10_1;
//# sourceMappingURL=EC_ST7_10_1.js.map