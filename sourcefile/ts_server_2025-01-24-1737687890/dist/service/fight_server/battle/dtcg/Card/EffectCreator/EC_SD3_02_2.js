"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_SD3_02_2 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnBooleanCondition() {
        let odigimon = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card != this.parent;
        });
        return odigimon == false;
    }
}
exports.default = EC_SD3_02_2;
//# sourceMappingURL=EC_SD3_02_2.js.map