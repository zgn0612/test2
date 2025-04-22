"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_008_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.PENETRATE, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        if (this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_17) || this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_10)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_EX1_008_O_1;
//# sourceMappingURL=EC_EX1_008_O_1.js.map