"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT5_028_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let hasNo = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.GetOriginDigimonCount() == 0 && card.CardTypeIs(DtEnum_1.DtCardType.Monster);
        });
        if (hasNo) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT5_028_O_1;
//# sourceMappingURL=EC_BT5_028_O_1.js.map