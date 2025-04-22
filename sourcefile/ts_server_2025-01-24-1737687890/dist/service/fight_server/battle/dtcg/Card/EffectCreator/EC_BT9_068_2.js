"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT9_068_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffChangePower_1.DtBuffChangePower(1));
    }
}
exports.default = EC_BT9_068_2;
//# sourceMappingURL=EC_BT9_068_2.js.map