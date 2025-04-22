"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_ST13_14_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON, DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnBooleanCondition() {
        return this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10287, true);
    }
}
exports.default = EC_ST13_14_O_1;
//# sourceMappingURL=EC_ST13_14_O_1.js.map