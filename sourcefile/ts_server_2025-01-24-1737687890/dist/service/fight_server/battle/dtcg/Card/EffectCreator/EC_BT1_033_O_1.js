"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT1_033_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let hasNo = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.GetOriginDigimonCount() == 0) {
                    return true;
                }
            }
            return false;
        });
        if (hasNo) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_BT1_033_O_1;
//# sourceMappingURL=EC_BT1_033_O_1.js.map