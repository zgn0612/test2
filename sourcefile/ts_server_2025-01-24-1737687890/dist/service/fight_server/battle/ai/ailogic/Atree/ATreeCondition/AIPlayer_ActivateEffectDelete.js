"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_ActivateEffectDelete = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_ActivateEffectDelete extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let effects = data?.data;
            if (effects) {
                for (let i = 0; i < effects.length; i++) {
                    if (effects[i].EffectCfgId == this.nParam1 && effects[i].AskActivate == true) {
                        effects.splice(i, 1);
                        return true;
                    }
                }
            }
        }
        return true;
    }
}
exports.AIPlayer_ActivateEffectDelete = AIPlayer_ActivateEffectDelete;
//# sourceMappingURL=AIPlayer_ActivateEffectDelete.js.map