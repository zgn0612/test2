"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT2_006_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let count = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card != this.parent) {
                    if (card.NameIsForceOtherCard(this.parent)) {
                        return true;
                    }
                }
            }
            return false;
        });
        if (count > 0) {
            return 2000;
        }
        return 0;
    }
}
exports.default = EC_BT2_006_O_1;
//# sourceMappingURL=EC_BT2_006_O_1.js.map