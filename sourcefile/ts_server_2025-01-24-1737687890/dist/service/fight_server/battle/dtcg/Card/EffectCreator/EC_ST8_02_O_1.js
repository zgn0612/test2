"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST8_02_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        let handCount = this.GetPlayer().areaHand.CardCount();
        if (handCount >= 8) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_ST8_02_O_1;
//# sourceMappingURL=EC_ST8_02_O_1.js.map