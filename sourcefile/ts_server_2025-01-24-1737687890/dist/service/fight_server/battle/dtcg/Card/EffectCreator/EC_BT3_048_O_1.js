"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT3_048_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
                    return true;
                }
            }
            return false;
        });
        return count * 1000;
    }
}
exports.default = EC_BT3_048_O_1;
//# sourceMappingURL=EC_BT3_048_O_1.js.map