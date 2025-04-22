"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT5_014_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.parent.HasEffect(DtEnum_1.EFFECT_NAME.EVO_ATTACK)) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT5_014_O_1;
//# sourceMappingURL=EC_BT5_014_O_1.js.map