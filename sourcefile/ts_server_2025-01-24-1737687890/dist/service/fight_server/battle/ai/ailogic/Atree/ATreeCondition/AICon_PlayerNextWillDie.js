"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_PlayerNextWillDie = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_PlayerNextWillDie extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let player = this.root.GetAIPlayer();
        let opp = this.root.GetOPPlayer();
        if (this.nParam1 == 0) {
            let atkcards = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            let hatch = opp.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
            if (hatch.length > 0) {
                if (hatch[0].GetCfgDP() > 0) {
                    atkcards.push(hatch[0]);
                }
            }
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = player.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                let isinhatch = atkcards[i].areaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH;
                let canatk = atkcards[i].GetCardLastPower() >= 0;
                if (isinhatch || canatk) {
                    if (blockcount > 0) {
                        blockcount--;
                        continue;
                    }
                    if (oppdef > 0) {
                        oppdef -= atkcards[i].GetCardLastPower() + 1;
                        if (oppdef < 0) {
                            oppdef = 0;
                        }
                        continue;
                    }
                    return true;
                }
            }
            return false;
        }
        else if (this.nParam1 == 1) {
            let atkcards = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            let hatch = opp.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
            if (hatch.length > 0) {
                if (hatch[0].GetCfgDP() > 0) {
                    atkcards.push(hatch[0]);
                }
            }
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = player.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                let isinhatch = atkcards[i].areaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH;
                let canatk = atkcards[i].GetCardLastPower() >= 0;
                if (isinhatch || canatk) {
                    if (blockcount > 0) {
                        blockcount--;
                        continue;
                    }
                    if (oppdef > 0) {
                        oppdef -= atkcards[i].GetCardLastPower() + 1;
                        if (oppdef < 0) {
                            oppdef = 0;
                        }
                        continue;
                    }
                    oppdef = -1;
                }
            }
            return this.ISInCompare(this.eCompare1, oppdef + 1, this.nParam2);
        }
        return false;
    }
}
exports.AICon_PlayerNextWillDie = AICon_PlayerNextWillDie;
//# sourceMappingURL=AICon_PlayerNextWillDie.js.map