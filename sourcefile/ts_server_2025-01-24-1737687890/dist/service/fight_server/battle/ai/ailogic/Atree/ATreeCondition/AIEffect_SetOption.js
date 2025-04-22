"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_SetOption = void 0;
const AICon_base_1 = require("./AICon_base");
class AIEffect_SetOption extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let pEffect = data;
            if (pEffect) {
                if (this.nParam1 < pEffect.option.Num) {
                    pEffect.set = this.nParam1;
                }
            }
        }
        return false;
    }
}
exports.AIEffect_SetOption = AIEffect_SetOption;
//# sourceMappingURL=AIEffect_SetOption.js.map