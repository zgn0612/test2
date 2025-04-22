"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_005_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.SET_COLOR, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        return DtEnum_1.DtCardColor.Green;
    }
}
exports.default = EC_EX1_005_2;
//# sourceMappingURL=EC_EX1_005_2.js.map