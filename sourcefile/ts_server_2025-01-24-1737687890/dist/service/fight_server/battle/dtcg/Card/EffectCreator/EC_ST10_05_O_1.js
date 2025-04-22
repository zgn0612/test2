"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST10_05_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let cards = this.GetPlayer().areaInBattle.GetTheCopyCards();
        let con = this.CheckListWithCondition(cards, (card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.ColorIs(DtEnum_1.DtCardColor.Purple)) {
                return true;
            }
            return false;
        });
        if (con) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_ST10_05_O_1;
//# sourceMappingURL=EC_ST10_05_O_1.js.map