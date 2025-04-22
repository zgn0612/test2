"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_PlayerCanWinWithOutPowerCal_ADDHATCH = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_PlayerCanWinWithOutPowerCal_ADDHATCH extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let player = this.root.GetAIPlayer();
        let opp = this.root.GetOPPlayer();
        if (this.nParam1 == 0) {
            let atkcount = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanAttack() && card.GetCardLastPower() >= 0;
            });
            let blockcount = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let calHatch = 0;
            if (player.CanHatchOrHatchBattle()) {
                calHatch = 1;
            }
            return atkcount + calHatch > opp.GetDefenseCount() + blockcount;
        }
        else if (this.nParam1 == 1) {
            let atkcards = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            if (player.CanHatchOrHatchBattle()) {
                atkcards.push(player.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).cards[0]);
            }
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = opp.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                let isinhatch = atkcards[i].GetArea() == DtEnum_1.DtAreaType.DIGITAMA_HATCH;
                let canatk = atkcards[i].CardCanAttack() && atkcards[i].GetCardLastPower() >= 0;
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
        else if (this.nParam2 == 2) {
            let atkcards = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            if (player.CanHatchOrHatchBattle()) {
                atkcards.push(player.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).cards[0]);
            }
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = opp.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                let isinhatch = atkcards[i].GetArea() == DtEnum_1.DtAreaType.DIGITAMA_HATCH;
                let canatk = atkcards[i].CardCanAttack() && atkcards[i].GetCardLastPower() >= 0;
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
exports.AICon_PlayerCanWinWithOutPowerCal_ADDHATCH = AICon_PlayerCanWinWithOutPowerCal_ADDHATCH;
//# sourceMappingURL=AICon_PlayerCanWinWithOutPowerCal_ADDHATCH.js.map