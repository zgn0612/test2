"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_HasActivateEffectThisRound = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_HasActivateEffectThisRound extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.root.aiCardRoot.HasActivateEffectInCurrentRound(this.nParam1);
        }
        return false;
    }
}
exports.AICon_HasActivateEffectThisRound = AICon_HasActivateEffectThisRound;
//# sourceMappingURL=AICon_HasActivateEffectThisRound.js.map