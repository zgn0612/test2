"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckOpponentDefenseCount = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CheckOpponentDefenseCount extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.ISInCompare(this.eCompare1, this.root.GetOPPlayer().GetDefenseCount(), this.nParam1);
    }
}
exports.AICon_CheckOpponentDefenseCount = AICon_CheckOpponentDefenseCount;
//# sourceMappingURL=AICon_CheckOpponentDefenseCount.js.map