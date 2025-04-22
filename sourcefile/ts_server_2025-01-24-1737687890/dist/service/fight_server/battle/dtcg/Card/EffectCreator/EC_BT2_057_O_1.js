"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT2_057_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.DISTURB, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        if (this.parent.HasEffect(DtEnum_1.EFFECT_NAME.RESTART)) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT2_057_O_1;
//# sourceMappingURL=EC_BT2_057_O_1.js.map