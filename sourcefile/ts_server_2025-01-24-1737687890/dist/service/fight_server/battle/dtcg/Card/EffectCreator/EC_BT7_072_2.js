"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_072_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10918, true);
        });
        return c * 2000;
    }
}
exports.default = EC_BT7_072_2;
//# sourceMappingURL=EC_BT7_072_2.js.map