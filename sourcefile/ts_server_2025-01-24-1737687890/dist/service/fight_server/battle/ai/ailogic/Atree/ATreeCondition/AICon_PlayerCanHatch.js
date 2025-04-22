"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_PlayerCanHatch = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_PlayerCanHatch extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.root.GetAIPlayer().CanHatch();
    }
}
exports.AICon_PlayerCanHatch = AICon_PlayerCanHatch;
//# sourceMappingURL=AICon_PlayerCanHatch.js.map