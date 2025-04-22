"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_111_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        let buff = this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false);
        this.parent.AddBuff(buff);
    }
    BuffCon(buff, card) {
        if (card.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return -1;
        }
        if (this.parent.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return -1;
        }
        if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10380, true)) {
            return 7;
        }
        return -1;
    }
}
exports.default = EC_BT7_111_1;
//# sourceMappingURL=EC_BT7_111_1.js.map