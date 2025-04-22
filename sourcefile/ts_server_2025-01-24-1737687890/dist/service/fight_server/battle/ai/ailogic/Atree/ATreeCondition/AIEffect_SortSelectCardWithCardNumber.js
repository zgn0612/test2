"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_SortSelectCardWithCardNumber = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AIEffect_SortSelectCardWithCardNumber extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let effects = data?.data;
            if (effects) {
                let split = this.sParam1.split("|");
                if (split.length > 0) {
                    for (let i = split.length - 1; i >= 0; i--) {
                        for (let k = effects.length - 1; k >= 0; k--) {
                            let cfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(effects[k].CfgId);
                            if (cfg) {
                                if (cfg.card_number == split[i]) {
                                    let card = effects[k];
                                    effects.splice(k, 1);
                                    effects.unshift(card);
                                }
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}
exports.AIEffect_SortSelectCardWithCardNumber = AIEffect_SortSelectCardWithCardNumber;
//# sourceMappingURL=AIEffect_SortSelectCardWithCardNumber.js.map