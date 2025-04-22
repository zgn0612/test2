"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT4_115_1 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnBeforePlayCon(msg) {
        return this.GetPlayer().areaGraveyard.CardCount() >= 10;
    }
    OnGetChangeCost() {
        return -8;
    }
}
exports.default = EC_BT4_115_1;
//# sourceMappingURL=EC_BT4_115_1.js.map