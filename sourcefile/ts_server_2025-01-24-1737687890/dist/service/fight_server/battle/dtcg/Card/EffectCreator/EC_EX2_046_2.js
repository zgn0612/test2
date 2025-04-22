"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_EX2_046_2 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnGetChangeCost() {
        return -2;
    }
    OnBeforePlayCon(msg) {
        let haso = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10985);
        });
        return haso == false;
    }
}
exports.default = EC_EX2_046_2;
//# sourceMappingURL=EC_EX2_046_2.js.map