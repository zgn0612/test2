"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX2_074_3 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let c = this.GetPlayer().areaGraveyard.CardCount();
        return Math.floor(c / 10);
    }
}
exports.default = EC_EX2_074_3;
//# sourceMappingURL=EC_EX2_074_3.js.map