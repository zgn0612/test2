"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_032_O_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role);
        })) {
            return 2000;
        }
        return 0;
    }
}
exports.default = EC_BT4_032_O_1;
//# sourceMappingURL=EC_BT4_032_O_1.js.map