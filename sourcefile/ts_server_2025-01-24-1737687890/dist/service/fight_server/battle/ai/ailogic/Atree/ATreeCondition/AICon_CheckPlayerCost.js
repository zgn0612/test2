"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckPlayerCost = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CheckPlayerCost extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.ISInCompare(this.eCompare1, this.root.GetBattleScene().currentCost, this.nParam1);
    }
}
exports.AICon_CheckPlayerCost = AICon_CheckPlayerCost;
//# sourceMappingURL=AICon_CheckPlayerCost.js.map