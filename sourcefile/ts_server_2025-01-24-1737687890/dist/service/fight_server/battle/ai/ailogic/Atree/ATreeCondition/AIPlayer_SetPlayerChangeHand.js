"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_SetPlayerChangeHand = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_SetPlayerChangeHand extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let eff = data;
            if (eff) {
                eff.aidecide = this.nParam1;
            }
        }
        return true;
    }
}
exports.AIPlayer_SetPlayerChangeHand = AIPlayer_SetPlayerChangeHand;
//# sourceMappingURL=AIPlayer_SetPlayerChangeHand.js.map