"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_053_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnIntBuffCondition() {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10645);
        });
        return c * 1000;
    }
}
exports.default = EC_EX1_053_1;
//# sourceMappingURL=EC_EX1_053_1.js.map