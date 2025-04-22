"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST13_05_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10287, true);
    }
}
exports.default = EC_ST13_05_O_1;
//# sourceMappingURL=EC_ST13_05_O_1.js.map