"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CardCompareTargetDP = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CardCompareTargetDP extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            if (this.root.GetTarget()) {
                return this.ISInCompare(this.eCompare1, this.root.aiCardRoot.GetCardLastDP(), this.root.GetTarget().GetCardLastDP());
            }
        }
        return false;
    }
}
exports.AICon_CardCompareTargetDP = AICon_CardCompareTargetDP;
//# sourceMappingURL=AICon_CardCompareTargetDP.js.map