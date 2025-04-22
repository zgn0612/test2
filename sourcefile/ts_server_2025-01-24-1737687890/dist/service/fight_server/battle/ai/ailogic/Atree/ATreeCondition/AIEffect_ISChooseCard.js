"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_ISChooseCard = void 0;
const AICon_base_1 = require("./AICon_base");
class AIEffect_ISChooseCard extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let pEffect = data;
            if (pEffect && pEffect.choose && pEffect.choose.EffectOriginInfo) {
                if (pEffect.choose.EffectOriginInfo.EffectId == this.nParam1) {
                    if (this.nParam2 == 0) {
                        return true;
                    }
                    if (pEffect.choose.EffectOriginInfo.Index == this.nParam2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
exports.AIEffect_ISChooseCard = AIEffect_ISChooseCard;
//# sourceMappingURL=AIEffect_ISChooseCard.js.map