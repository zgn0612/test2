"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanHatchToBattle = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_CanHatchToBattle extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.GetBattleScene().battleState != DtEnum_1.DtBattlePhase.FosterPhase) {
            return false;
        }
        if (this.root.aiCardRoot) {
            let card = this.root.aiCardRoot;
            if (card.parent.PlayerHasBuff(DtEnum_1.DtBuffType.PLAYER_BATTLE_AREA_IN_LIMIT)) {
                return false;
            }
            if (card.areaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH) {
                if (card && card.GetCfgDP() > 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.AICon_CanHatchToBattle = AICon_CanHatchToBattle;
//# sourceMappingURL=AICon_CanHatchToBattle.js.map