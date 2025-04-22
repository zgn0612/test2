"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT6_057_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        if (this.parent.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER)) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_BT6_057_O_1;
//# sourceMappingURL=EC_BT6_057_O_1.js.map