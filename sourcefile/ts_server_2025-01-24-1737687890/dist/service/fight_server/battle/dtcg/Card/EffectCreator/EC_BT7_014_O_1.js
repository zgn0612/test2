"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_014_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        if (this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505) || this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_137)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT7_014_O_1;
//# sourceMappingURL=EC_BT7_014_O_1.js.map