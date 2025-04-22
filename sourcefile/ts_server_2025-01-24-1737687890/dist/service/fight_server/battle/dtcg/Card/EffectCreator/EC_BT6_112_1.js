"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT6_112_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        let count = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138);
            }
            else if (card.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
                return card.GetConfigCost() == 7;
            }
        });
        return count > 0;
    }
    OnGetChangeCost() {
        let count = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138);
            }
            else if (card.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
                return card.GetConfigCost() == 7;
            }
        });
        return count * -1;
    }
}
exports.default = EC_BT6_112_1;
//# sourceMappingURL=EC_BT6_112_1.js.map