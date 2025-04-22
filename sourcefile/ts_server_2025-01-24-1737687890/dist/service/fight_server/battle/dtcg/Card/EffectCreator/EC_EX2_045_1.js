"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_EX2_045_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10109, true) ||
                card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10308, true) ||
                card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10583, true) ||
                card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10252, true)) {
                return true;
            }
            return false;
        });
    }
    OnGetChangeCost() {
        return -2;
    }
}
exports.default = EC_EX2_045_1;
//# sourceMappingURL=EC_EX2_045_1.js.map