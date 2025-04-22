"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_085_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Quick_Attack_Digimon));
    }
}
exports.default = EC_BT5_085_2;
//# sourceMappingURL=EC_BT5_085_2.js.map