"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_PlayerCanWinWithOutPowerCal = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const AICon_base_1 = require("./AICon_base");
class AICon_PlayerCanWinWithOutPowerCal extends AICon_base_1.AICon_base {
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
            return atkcount > opp.GetDefenseCount() + blockcount;
        }
        else if (this.nParam1 == 1) {
            let atkcards = player.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = opp.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                if (atkcards[i].CardCanAttack() && atkcards[i].GetCardLastPower() >= 0) {
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
            atkcards.sort((a, b) => {
                return b.GetCardLastPower() - a.GetCardLastPower();
            });
            let blockcount = opp.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetCountWithMeetCondition((card) => {
                return card.CardCanBlock();
            });
            let oppdef = opp.GetDefenseCount();
            for (let i = 0; i < atkcards.length; i++) {
                if (atkcards[i].CardCanAttack() && atkcards[i].GetCardLastPower() >= 0) {
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
exports.AICon_PlayerCanWinWithOutPowerCal = AICon_PlayerCanWinWithOutPowerCal;
//# sourceMappingURL=AICon_PlayerCanWinWithOutPowerCal.js.map