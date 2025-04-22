"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT8_067_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.ATTACK_ACTIVATE_DIGIMON, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        if (this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_10) || this.parent.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_17)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT8_067_O_1;
//# sourceMappingURL=EC_BT8_067_O_1.js.map