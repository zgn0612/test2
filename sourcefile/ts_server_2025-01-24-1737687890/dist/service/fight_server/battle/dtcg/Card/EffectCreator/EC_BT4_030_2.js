"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_030_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_ATTACK, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnBooleanCondition() {
        let oris = this.parent.GetOriginDigimonList();
        for (let i = 0; i < oris.length; i++) {
            if (oris[i].CardTypeIs(DtEnum_1.DtCardType.Role) && oris[i].ColorIs(DtEnum_1.DtCardColor.Blue)) {
                return true;
            }
            if (oris[i].CardTypeIs(DtEnum_1.DtCardType.Monster) && oris[i].FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505)) {
                return true;
            }
        }
        return false;
    }
}
exports.default = EC_BT4_030_2;
//# sourceMappingURL=EC_BT4_030_2.js.map