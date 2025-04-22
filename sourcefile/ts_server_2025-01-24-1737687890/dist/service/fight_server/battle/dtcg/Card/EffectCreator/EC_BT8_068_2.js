"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT8_068_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        let con = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card != this.parent && card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10334) && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        if (con) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT8_068_2;
//# sourceMappingURL=EC_BT8_068_2.js.map