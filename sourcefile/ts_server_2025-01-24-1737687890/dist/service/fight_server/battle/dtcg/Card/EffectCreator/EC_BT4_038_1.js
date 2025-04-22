"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffAttribute_1 = require("../Buff/DtBuffAttribute");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_038_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_1.DtBuffAttribute(DtEnum_1.DtBuffType.Quick_Attack_Digimon));
    }
}
exports.default = EC_BT4_038_1;
//# sourceMappingURL=EC_BT4_038_1.js.map