"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_044_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card != this.parent) {
                if (this.parent.NameIsForceOtherCard(card)) {
                    return true;
                }
            }
            return false;
        });
        return c * 1000;
    }
}
exports.default = EC_EX1_044_O_1;
//# sourceMappingURL=EC_EX1_044_O_1.js.map