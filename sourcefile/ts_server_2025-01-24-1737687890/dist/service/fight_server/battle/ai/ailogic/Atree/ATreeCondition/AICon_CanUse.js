"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanUse = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CanUse extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.root.aiCardRoot.CardCanPlay();
        }
        return false;
    }
}
exports.AICon_CanUse = AICon_CanUse;
//# sourceMappingURL=AICon_CanUse.js.map