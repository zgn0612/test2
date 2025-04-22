"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX2_046_3 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_PLAYER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_EX2_046_3;
//# sourceMappingURL=EC_EX2_046_3.js.map