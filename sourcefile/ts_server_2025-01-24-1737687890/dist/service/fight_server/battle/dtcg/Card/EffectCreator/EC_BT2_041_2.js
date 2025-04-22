"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT2_041_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let cards = this.GetPlayer().areaInBattle.GetListWithCondition((card) => { return card.CardTypeIs(DtEnum_1.DtCardType.Role); });
        return cards.length * 1000;
    }
}
exports.default = EC_BT2_041_2;
//# sourceMappingURL=EC_BT2_041_2.js.map