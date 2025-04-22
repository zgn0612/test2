"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT6_024_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.DISTURB, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        return this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.GetOriginDigimonCount() > 0;
        }) == false;
    }
}
exports.default = EC_BT6_024_1;
//# sourceMappingURL=EC_BT6_024_1.js.map