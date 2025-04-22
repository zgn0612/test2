"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT2_050_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        let power = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            if (card.cardBattleState == DtEnum_1.DtCardBattleState.Reset && card != this.parent) {
                return true;
            }
            return false;
        });
        return power;
    }
}
exports.default = EC_BT2_050_2;
//# sourceMappingURL=EC_BT2_050_2.js.map