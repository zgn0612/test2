"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_IsChangeHandCards = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_IsChangeHandCards extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let eff = data;
            if (eff) {
                return true;
            }
        }
        return false;
    }
}
exports.AIPlayer_IsChangeHandCards = AIPlayer_IsChangeHandCards;
//# sourceMappingURL=AIPlayer_IsChangeHandCards.js.map