"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
class EC_BT2_111_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false));
    }
    BuffCon(buff, card) {
        if (card.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return -1;
        }
        if (this.GetPlayer().areaGraveyard.CardCount() < 10) {
            return -1;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10252, true)) {
            return 4;
        }
        return -1;
    }
}
exports.default = EC_BT2_111_1;
//# sourceMappingURL=EC_BT2_111_1.js.map