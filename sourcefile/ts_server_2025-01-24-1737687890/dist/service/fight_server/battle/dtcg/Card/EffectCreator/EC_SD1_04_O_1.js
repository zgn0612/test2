"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_SD1_04_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_525)) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_SD1_04_O_1;
//# sourceMappingURL=EC_SD1_04_O_1.js.map