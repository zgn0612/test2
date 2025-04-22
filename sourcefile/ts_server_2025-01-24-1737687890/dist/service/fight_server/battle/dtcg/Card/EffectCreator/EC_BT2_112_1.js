"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT2_112_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        return this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() >= 10000;
        });
    }
    OnGetChangeCost() {
        return -6;
    }
}
exports.default = EC_BT2_112_1;
//# sourceMappingURL=EC_BT2_112_1.js.map