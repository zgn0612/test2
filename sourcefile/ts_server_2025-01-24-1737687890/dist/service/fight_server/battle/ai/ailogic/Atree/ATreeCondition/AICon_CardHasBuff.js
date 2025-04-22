"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CardHasBuff = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CardHasBuff extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            return this.root.aiCardRoot.HasBuff(this.nParam1);
        }
        return false;
    }
}
exports.AICon_CardHasBuff = AICon_CardHasBuff;
//# sourceMappingURL=AICon_CardHasBuff.js.map