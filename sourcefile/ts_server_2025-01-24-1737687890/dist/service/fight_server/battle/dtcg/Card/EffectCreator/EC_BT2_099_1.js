"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT2_099_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        let count = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
        return count > 0;
    }
    OnGetChangeCost() {
        let count = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
        return -1 * count;
    }
}
exports.default = EC_BT2_099_1;
//# sourceMappingURL=EC_BT2_099_1.js.map