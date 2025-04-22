"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT2_023_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() == 0;
        });
        return count > 0;
    }
    OnGetChangeCost() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() == 0;
        });
        return -1 * count;
    }
}
exports.default = EC_BT2_023_1;
//# sourceMappingURL=EC_BT2_023_1.js.map