"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT8_097_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnGetChangeCost() {
        let c = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        return -c;
    }
    OnBeforePlayCon(msg) {
        return this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        }) > 0;
    }
}
exports.default = EC_BT8_097_1;
//# sourceMappingURL=EC_BT8_097_1.js.map