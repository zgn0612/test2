"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_014_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false));
    }
    BuffCon(buff, card) {
        if (card.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return -1;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10676, true)) {
            return 4;
        }
        return -1;
    }
}
exports.default = EC_BT5_014_1;
//# sourceMappingURL=EC_BT5_014_1.js.map