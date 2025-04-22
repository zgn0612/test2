"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST13_13_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.Immue_Opponent_destory_effect, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnBooleanCondition() {
        return true;
    }
}
exports.default = EC_ST13_13_1;
//# sourceMappingURL=EC_ST13_13_1.js.map