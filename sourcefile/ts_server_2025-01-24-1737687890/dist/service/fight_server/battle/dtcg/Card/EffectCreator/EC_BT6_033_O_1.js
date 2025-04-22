"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT6_033_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.DISTURB, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.GetPlayer().areaDefense.CardCount() == 3;
    }
}
exports.default = EC_BT6_033_O_1;
//# sourceMappingURL=EC_BT6_033_O_1.js.map