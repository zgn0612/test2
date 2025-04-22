"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT8_010_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnGetChangeCost() {
        let con = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
        if (con) {
            return -1;
        }
        return 0;
    }
    OnBeforePlayCon(msg) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
    }
}
exports.default = EC_BT8_010_1;
//# sourceMappingURL=EC_BT8_010_1.js.map