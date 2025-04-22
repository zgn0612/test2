"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT1_060_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let count = this.GetPlayer().areaDefense.CardCount();
        return Math.floor(count / 3) * 1000;
    }
}
exports.default = EC_BT1_060_O_1;
//# sourceMappingURL=EC_BT1_060_O_1.js.map