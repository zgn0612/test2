"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_043_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let c = this.parent.CheckOriginCountWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_24);
        });
        return c * 1000;
    }
}
exports.default = EC_EX1_043_2;
//# sourceMappingURL=EC_EX1_043_2.js.map