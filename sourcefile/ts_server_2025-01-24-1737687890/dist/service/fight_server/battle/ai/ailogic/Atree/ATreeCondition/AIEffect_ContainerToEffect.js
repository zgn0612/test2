"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_ContainerToEffect = void 0;
const AICon_base_1 = require("./AICon_base");
class AIEffect_ContainerToEffect extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let container = this.root.GetContainerCards(this.sParam1);
        if (container == null) {
            this.LogError(data, "容器不存在:" + this.sParam1);
            return false;
        }
        if (data && container.length > 0) {
            let effects = data?.data;
            if (effects) {
                for (let i = container.length - 1; i >= 0; i--) {
                    let concard = container[i];
                    for (let j = 0; j < effects.length; j++) {
                        let effcard = effects[j];
                        if (effcard.CardIID.equals(concard.uid)) {
                            effects.splice(j, 1);
                            effects.unshift(effcard);
                        }
                    }
                }
            }
        }
        return true;
    }
}
exports.AIEffect_ContainerToEffect = AIEffect_ContainerToEffect;
//# sourceMappingURL=AIEffect_ContainerToEffect.js.map