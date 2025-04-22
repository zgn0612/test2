"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_033_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_BLOCKER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_BT4_033_2;
//# sourceMappingURL=EC_BT4_033_2.js.map