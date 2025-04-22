"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
class EC_BT7_111_2 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateBeforePlayChangeCost(false, null);
    }
    OnGetChangeCost() {
        let count = this.GetPlayer().areaGraveyard.CardCount();
        let cx = Math.floor(count / 10);
        return -(cx * 3);
    }
    OnBeforePlayCon(msg) {
        let count = this.GetPlayer().areaGraveyard.CardCount();
        let cx = Math.floor(count / 10);
        return cx > 0;
    }
}
exports.default = EC_BT7_111_2;
//# sourceMappingURL=EC_BT7_111_2.js.map