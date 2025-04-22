"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT5_045_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Both);
    }
    OnIntBuffCondition() {
        let count = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card != this.parent) {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    return true;
                }
            }
            return false;
        });
        return count * 1000;
    }
}
exports.default = EC_BT5_045_2;
//# sourceMappingURL=EC_BT5_045_2.js.map