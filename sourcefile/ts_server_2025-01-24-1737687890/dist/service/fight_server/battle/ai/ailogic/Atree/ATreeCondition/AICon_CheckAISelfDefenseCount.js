"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckAISelfDefenseCount = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CheckAISelfDefenseCount extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.ISInCompare(this.eCompare1, this.root.GetAIPlayer().GetDefenseCount(), this.nParam1);
    }
}
exports.AICon_CheckAISelfDefenseCount = AICon_CheckAISelfDefenseCount;
//# sourceMappingURL=AICon_CheckAISelfDefenseCount.js.map