"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_PlayerCanHatchToBattle = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_PlayerCanHatchToBattle extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        return this.root.GetAIPlayer().CanHatchOrHatchBattle();
    }
}
exports.AICon_PlayerCanHatchToBattle = AICon_PlayerCanHatchToBattle;
//# sourceMappingURL=AICon_PlayerCanHatchToBattle.js.map