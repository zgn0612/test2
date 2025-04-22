"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanAttack = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CanAttack extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.root.aiCardRoot.CardCanAttack();
        }
        return false;
    }
}
exports.AICon_CanAttack = AICon_CanAttack;
//# sourceMappingURL=AICon_CanAttack.js.map