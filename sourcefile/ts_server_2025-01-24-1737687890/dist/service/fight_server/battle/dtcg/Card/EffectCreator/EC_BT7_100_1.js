"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffConditionInt_1 = require("../Buff/DtBuffConditionInt");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_100_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffConditionInt_1.DtBuffCommonInt(DtEnum_1.DtBuffType.SET_COST, this.Buff, this));
    }
    Buff(buff) {
        if (this.parent.whereAreaType == DtEnum_1.DtAreaType.HAND) {
            return this.GetPlayer().areaDefense.CardCount();
        }
        return -1;
    }
}
exports.default = EC_BT7_100_1;
//# sourceMappingURL=EC_BT7_100_1.js.map