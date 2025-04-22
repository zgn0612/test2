"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanEvo = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CanEvo extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.root.aiCardRoot.CardCanEvo();
        }
        return false;
    }
}
exports.AICon_CanEvo = AICon_CanEvo;
//# sourceMappingURL=AICon_CanEvo.js.map