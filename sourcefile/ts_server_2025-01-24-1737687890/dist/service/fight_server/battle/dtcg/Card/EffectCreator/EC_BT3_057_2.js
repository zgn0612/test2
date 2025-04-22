"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT3_057_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_POWER, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        if (this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.cardBattleState == DtEnum_1.DtCardBattleState.Reset;
        })) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT3_057_2;
//# sourceMappingURL=EC_BT3_057_2.js.map