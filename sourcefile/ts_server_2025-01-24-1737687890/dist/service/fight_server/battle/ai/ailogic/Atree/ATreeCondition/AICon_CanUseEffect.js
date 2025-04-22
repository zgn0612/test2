"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanUseEffect = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_CanUseEffect extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            if (this.root.aiCardRoot.areaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                return this.root.aiCardRoot.CheckEffectInBattle();
            }
            else if (this.root.aiCardRoot.areaType == DtEnum_1.DtAreaType.HAND) {
                return this.root.aiCardRoot.CheckEffectInHand();
            }
        }
        return false;
    }
}
exports.AICon_CanUseEffect = AICon_CanUseEffect;
//# sourceMappingURL=AICon_CanUseEffect.js.map