"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CheckBattleRound = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CheckBattleRound extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.ISInCompare(this.eCompare1, this.root.GetBattleScene().curRound, this.nParam1);
    }
}
exports.AICon_CheckBattleRound = AICon_CheckBattleRound;
//# sourceMappingURL=AICon_CheckBattleRound.js.map