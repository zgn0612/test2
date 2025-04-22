"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_089_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.PENETRATE, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_BT7_089_O_1;
//# sourceMappingURL=EC_BT7_089_O_1.js.map