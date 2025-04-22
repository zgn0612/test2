"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_ST7_03_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.OriCheckEvo, false));
    }
    BuffCon(buff, card) {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return -1;
        }
        let oppBattle = this.GetOppPlayer().areaInBattle.GetTheCopyCards();
        let conEvo = false;
        for (let i = 0; i < oppBattle.length; i++) {
            if (oppBattle[i].CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 6)) {
                conEvo = true;
                break;
            }
        }
        if (conEvo == false) {
            return -1;
        }
        if (card.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return -1;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10103, true)) {
            return 4;
        }
        return -1;
    }
}
exports.default = EC_ST7_03_1;
//# sourceMappingURL=EC_ST7_03_1.js.map