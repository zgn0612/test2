"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffConditionAttribute_1 = require("../Buff/DtBuffConditionAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT6_095_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffConditionAttribute_1.DtBuffConditionAttribute(DtEnum_1.DtBuffType.MAGIC_CARD_USE_IGNORE_COLOR_CONDITION, this.con, this));
    }
    con(buff) {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138);
        });
    }
}
exports.default = EC_BT6_095_1;
//# sourceMappingURL=EC_BT6_095_1.js.map