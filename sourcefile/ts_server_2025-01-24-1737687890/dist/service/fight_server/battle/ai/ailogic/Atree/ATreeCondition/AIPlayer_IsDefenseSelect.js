"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_IsDefenseSelect = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_IsDefenseSelect extends AICon_base_1.AICon_base {
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
exports.AIPlayer_IsDefenseSelect = AIPlayer_IsDefenseSelect;
//# sourceMappingURL=AIPlayer_IsDefenseSelect.js.map