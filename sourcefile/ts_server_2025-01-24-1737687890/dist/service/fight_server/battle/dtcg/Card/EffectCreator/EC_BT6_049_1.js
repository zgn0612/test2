"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_049_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let buff = this.GetBuff_SpecialEvoCon(this.BuffCon, DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri, false);
        buff.SetSeenData(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Green, 3);
        this.parent.AddBuff(buff);
    }
    BuffCon(buff, card) {
        if (card.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return -1;
        }
        if (card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Green)) {
            return 2;
        }
        return -1;
    }
}
exports.default = EC_BT6_049_1;
//# sourceMappingURL=EC_BT6_049_1.js.map