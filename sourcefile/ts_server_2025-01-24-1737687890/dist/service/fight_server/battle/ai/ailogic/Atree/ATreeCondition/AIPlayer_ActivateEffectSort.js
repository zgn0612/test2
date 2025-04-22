"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_ActivateEffectSort = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_ActivateEffectSort extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let effects = data?.data;
            if (effects) {
                let split = this.sParam1.split("|").map(Number);
                if (split.length > 0) {
                    for (let i = split.length - 1; i >= 0; i--) {
                        for (let k = effects.length - 1; k >= 0; k--) {
                            if (effects[k].EffectCfgId == split[i]) {
                                let card = effects[k];
                                effects.splice(k, 1);
                                effects.unshift(card);
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}
exports.AIPlayer_ActivateEffectSort = AIPlayer_ActivateEffectSort;
//# sourceMappingURL=AIPlayer_ActivateEffectSort.js.map