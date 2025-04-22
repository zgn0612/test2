"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT9_041_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let roleCount = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                return true;
            }
            return false;
        });
        return roleCount * 1000;
    }
}
exports.default = EC_BT9_041_2;
//# sourceMappingURL=EC_BT9_041_2.js.map