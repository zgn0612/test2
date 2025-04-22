"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_018_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_EX1_018_2;
//# sourceMappingURL=EC_EX1_018_2.js.map