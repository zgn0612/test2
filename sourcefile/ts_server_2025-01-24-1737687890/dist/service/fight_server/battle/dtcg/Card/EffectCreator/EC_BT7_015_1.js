"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT7_015_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnGetChangeCost() {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Magic);
        });
        let b = this.GetOppPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Magic);
        });
        return -(c + b);
    }
    OnBeforePlayCon(msg) {
        let c = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Magic);
        });
        let b = this.GetOppPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Magic);
        });
        return c + b > 0;
    }
}
exports.default = EC_BT7_015_1;
//# sourceMappingURL=EC_BT7_015_1.js.map