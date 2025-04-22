"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX2_002_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        if (this.parent.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 4)) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_EX2_002_O_1;
//# sourceMappingURL=EC_EX2_002_O_1.js.map