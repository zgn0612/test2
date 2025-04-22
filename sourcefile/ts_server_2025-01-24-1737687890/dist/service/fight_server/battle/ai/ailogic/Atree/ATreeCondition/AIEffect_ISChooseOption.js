"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_ISChooseOption = void 0;
const AICon_base_1 = require("./AICon_base");
class AIEffect_ISChooseOption extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let pEffect = data;
            if (pEffect && pEffect.option && pEffect.option.EffectOriginInfo) {
                if (pEffect.option.EffectOriginInfo.EffectId == this.nParam1) {
                    if (pEffect.option.EffectOriginInfo.Index == this.nParam2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
exports.AIEffect_ISChooseOption = AIEffect_ISChooseOption;
//# sourceMappingURL=AIEffect_ISChooseOption.js.map