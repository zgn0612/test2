"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX2_035_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_PLAYER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        let hasRole = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        });
        return hasRole == false;
    }
}
exports.default = EC_EX2_035_2;
//# sourceMappingURL=EC_EX2_035_2.js.map