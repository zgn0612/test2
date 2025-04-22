"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT4_115_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.OriCheckEvoCondition, true));
    }
    BuffCon(buff, evoCard) {
        if (evoCard.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10380)) {
            return 1;
        }
        return -1;
    }
}
exports.default = EC_BT4_115_3;
//# sourceMappingURL=EC_BT4_115_3.js.map