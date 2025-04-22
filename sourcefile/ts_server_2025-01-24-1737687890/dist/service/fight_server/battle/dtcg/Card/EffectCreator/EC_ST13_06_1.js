"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFusionEffectCreator_1 = require("../Effect/DtFusionEffectCreator");
class EC_ST13_06_1 extends DtFusionEffectCreator_1.default {
    SetEffect() {
        this.SetFusionCost(0);
        this.SetFusionEffect();
    }
    CheckTopCardCondition(card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 6) && card.ColorIs(DtEnum_1.DtCardColor.Red);
    }
    CheckBottomCardCondition(card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 6) && card.ColorIs(DtEnum_1.DtCardColor.Black);
    }
}
exports.default = EC_ST13_06_1;
//# sourceMappingURL=EC_ST13_06_1.js.map