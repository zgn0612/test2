"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtBuffAttribute_int_1 = require("../Buff/DtBuffAttribute_int");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT9_068_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffAttribute_int_1.DtBuffAttribute_int(DtEnum_1.DtBuffType.NAME_IS, DtCardDigimonType_1.DtCardDigimonType.name_type_10001));
    }
}
exports.default = EC_BT9_068_1;
//# sourceMappingURL=EC_BT9_068_1.js.map