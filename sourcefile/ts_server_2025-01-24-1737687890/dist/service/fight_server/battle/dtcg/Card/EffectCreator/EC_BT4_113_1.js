"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_113_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let power = 0;
        let oriList = this.parent.GetOriginDigimonList();
        for (let i = 0; i < oriList.length; i++) {
            if (oriList[i].NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10001) || oriList[i].FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                power++;
            }
        }
        return power;
    }
}
exports.default = EC_BT4_113_1;
//# sourceMappingURL=EC_BT4_113_1.js.map