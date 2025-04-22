"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT1_073_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let cards = this.GetOppPlayer().areaInBattle.GetTheCopyCards();
        let restCount = 0;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
                restCount++;
            }
        }
        return restCount * 1000;
    }
}
exports.default = EC_BT1_073_O_1;
//# sourceMappingURL=EC_BT1_073_O_1.js.map