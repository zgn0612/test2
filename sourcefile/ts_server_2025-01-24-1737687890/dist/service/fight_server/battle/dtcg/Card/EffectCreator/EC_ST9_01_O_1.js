"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST9_01_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let cards = this.GetPlayer().areaInBattle.GetTheCopyCards();
        let canBlue = this.CheckListWithCondition(cards, (card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Blue)) {
                return true;
            }
            return false;
        });
        if (canBlue) {
            return 1000;
        }
        return 0;
    }
}
exports.default = EC_ST9_01_O_1;
//# sourceMappingURL=EC_ST9_01_O_1.js.map