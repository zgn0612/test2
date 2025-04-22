"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX2_036_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_17) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_11);
        });
        return c * 1000;
    }
}
exports.default = EC_EX2_036_2;
//# sourceMappingURL=EC_EX2_036_2.js.map