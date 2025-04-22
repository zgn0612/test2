"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT6_029_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        return count;
    }
}
exports.default = EC_BT6_029_2;
//# sourceMappingURL=EC_BT6_029_2.js.map