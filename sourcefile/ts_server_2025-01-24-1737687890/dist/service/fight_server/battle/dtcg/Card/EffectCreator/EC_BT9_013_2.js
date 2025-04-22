"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT9_013_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.ATTACK_ACTIVATE_DIGIMON, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.parent.CheckOriginListWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10717, true) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_11023, true);
        });
    }
}
exports.default = EC_BT9_013_2;
//# sourceMappingURL=EC_BT9_013_2.js.map