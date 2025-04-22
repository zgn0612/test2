"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT7_058_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10589) || this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10942)) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT7_058_O_1;
//# sourceMappingURL=EC_BT7_058_O_1.js.map