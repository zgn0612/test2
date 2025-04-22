"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffConditionAttribute_1 = require("../Buff/DtBuffConditionAttribute");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_062_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let buff = new DtBuffConditionAttribute_1.DtBuffConditionAttribute(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, this.con, this);
        this.parent.AddBuff(buff);
    }
    con(buff) {
        if (this.GetPlayer().IsThisPlayerRound()) {
            return true;
        }
        return false;
    }
}
exports.default = EC_BT5_062_2;
//# sourceMappingURL=EC_BT5_062_2.js.map