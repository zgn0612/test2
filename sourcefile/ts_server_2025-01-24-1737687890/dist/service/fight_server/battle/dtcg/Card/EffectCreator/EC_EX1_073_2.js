"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_073_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_EX1_073_2;
//# sourceMappingURL=EC_EX1_073_2.js.map