"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
class EC_EX2_022_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false));
    }
    BuffCon(buff, card) {
        if (card.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return -1;
        }
        let hasLi = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10972, true);
        });
        if (hasLi == false) {
            return -1;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10150, true)) {
            return 3;
        }
        return -1;
    }
}
exports.default = EC_EX2_022_1;
//# sourceMappingURL=EC_EX2_022_1.js.map