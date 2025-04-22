"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST1_11_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.parent) {
            let originCount = this.parent.GetOriginDigimonCount();
            if (originCount > 1) {
                return Math.floor(originCount / 2);
            }
        }
        return 0;
    }
}
exports.default = EC_ST1_11_1;
//# sourceMappingURL=EC_ST1_11_1.js.map