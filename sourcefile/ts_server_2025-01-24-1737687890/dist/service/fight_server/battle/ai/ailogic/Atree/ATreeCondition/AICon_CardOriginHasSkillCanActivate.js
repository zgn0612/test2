"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CardOriginHasSkillCanActivate = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CardOriginHasSkillCanActivate extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            let oris = this.root.aiCardRoot.GetOriginDigimonList();
            for (let i = 0; i < oris.length; i++) {
                if (oris[i].GetCardCfgNumber() == this.sParam1) {
                    if (oris[i].HasActivateEffectInCurrentRound(this.nParam1) == false) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
exports.AICon_CardOriginHasSkillCanActivate = AICon_CardOriginHasSkillCanActivate;
//# sourceMappingURL=AICon_CardOriginHasSkillCanActivate.js.map