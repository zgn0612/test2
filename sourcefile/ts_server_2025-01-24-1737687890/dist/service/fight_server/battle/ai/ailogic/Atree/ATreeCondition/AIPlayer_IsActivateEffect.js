"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_IsActivateEffect = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_IsActivateEffect extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let effects = data?.data;
            if (effects) {
                return true;
            }
        }
        return false;
    }
}
exports.AIPlayer_IsActivateEffect = AIPlayer_IsActivateEffect;
//# sourceMappingURL=AIPlayer_IsActivateEffect.js.map