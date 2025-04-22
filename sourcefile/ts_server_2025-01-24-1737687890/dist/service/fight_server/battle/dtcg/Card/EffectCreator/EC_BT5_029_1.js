"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT5_029_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.DISTURB, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.parent.CheckOriginListWithCondition((card) => {
            if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10025)) {
                return true;
            }
            return false;
        });
    }
}
exports.default = EC_BT5_029_1;
//# sourceMappingURL=EC_BT5_029_1.js.map