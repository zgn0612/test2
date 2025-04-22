"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT2_026_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.DISTURB, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        let hasBlueRole = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Blue)) {
                return true;
            }
            return false;
        });
        return hasBlueRole;
    }
}
exports.default = EC_BT2_026_1;
//# sourceMappingURL=EC_BT2_026_1.js.map