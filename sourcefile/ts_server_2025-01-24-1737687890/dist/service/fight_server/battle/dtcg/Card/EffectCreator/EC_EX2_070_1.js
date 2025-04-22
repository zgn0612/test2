"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffConditionAttribute_1 = require("../Buff/DtBuffConditionAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_EX2_070_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffConditionAttribute_1.DtBuffConditionAttribute(DtEnum_1.DtBuffType.MAGIC_CARD_USE_IGNORE_COLOR_CONDITION, this.con, this));
    }
    con(buff) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        });
    }
}
exports.default = EC_EX2_070_1;
//# sourceMappingURL=EC_EX2_070_1.js.map