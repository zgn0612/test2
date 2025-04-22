"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckPlayCost = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CheckPlayCost extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.ISInCompare(this.eCompare1, this.root.aiCardRoot.GetCardPlayCost(), this.nParam1);
        }
        return false;
    }
}
exports.AICon_CheckPlayCost = AICon_CheckPlayCost;
//# sourceMappingURL=AICon_CheckPlayCost.js.map