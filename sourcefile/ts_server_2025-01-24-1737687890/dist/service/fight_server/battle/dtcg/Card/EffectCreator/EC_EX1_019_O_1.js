"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_019_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_BLOCKER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10296);
    }
}
exports.default = EC_EX1_019_O_1;
//# sourceMappingURL=EC_EX1_019_O_1.js.map