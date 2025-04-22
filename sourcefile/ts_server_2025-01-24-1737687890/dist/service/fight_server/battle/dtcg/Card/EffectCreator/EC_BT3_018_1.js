"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEnum_1 = require("../../Data/DtEnum");
class EC_BT3_018_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.PENETRATE));
    }
}
exports.default = EC_BT3_018_1;
//# sourceMappingURL=EC_BT3_018_1.js.map