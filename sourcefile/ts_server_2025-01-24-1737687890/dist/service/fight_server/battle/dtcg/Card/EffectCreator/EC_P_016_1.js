"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_P_016_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        return this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10012, true)) {
                return true;
            }
        });
    }
}
exports.default = EC_P_016_1;
//# sourceMappingURL=EC_P_016_1.js.map