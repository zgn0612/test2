"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT8_077_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Quick_Attack_Digimon));
    }
}
exports.default = EC_BT8_077_1;
//# sourceMappingURL=EC_BT8_077_1.js.map