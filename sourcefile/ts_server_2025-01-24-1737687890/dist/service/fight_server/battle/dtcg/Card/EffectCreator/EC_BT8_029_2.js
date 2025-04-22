"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT8_029_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        let has = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.GetOriginDigimonCount() > 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        return has;
    }
}
exports.default = EC_BT8_029_2;
//# sourceMappingURL=EC_BT8_029_2.js.map