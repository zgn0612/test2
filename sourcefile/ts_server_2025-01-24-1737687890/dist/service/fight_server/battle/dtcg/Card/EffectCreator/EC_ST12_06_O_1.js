"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST12_06_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        let hake = this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674);
        let feature = this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116);
        if (hake || feature) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_ST12_06_O_1;
//# sourceMappingURL=EC_ST12_06_O_1.js.map