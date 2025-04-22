"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_065_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let c = this.parent.CheckOriginCountWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_33);
        });
        if (c > 0) {
            return c * 1000;
        }
        return 0;
    }
}
exports.default = EC_BT7_065_1;
//# sourceMappingURL=EC_BT7_065_1.js.map