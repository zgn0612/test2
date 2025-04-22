"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_SD3_01_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnIntBuffCondition() {
        if (this.parent.FeatureHas(DtConst_1.DtConst.FEATURE_HAS_BIRD)) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_SD3_01_O_1;
//# sourceMappingURL=EC_SD3_01_O_1.js.map