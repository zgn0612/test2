"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_016_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let orilist = this.parent.GetOriginDigimonList();
        for (let i = 0; i < orilist.length; i++) {
            let can = false;
            if (orilist[i].CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (orilist[i].FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                    can = true;
                }
            }
            if (orilist[i].CardTypeIs(DtEnum_1.DtCardType.Role)) {
                if (orilist[i].ColorIs(DtEnum_1.DtCardColor.Red)) {
                    can = true;
                }
            }
            if (can) {
                return 4000;
            }
        }
        return 0;
    }
}
exports.default = EC_BT4_016_2;
//# sourceMappingURL=EC_BT4_016_2.js.map