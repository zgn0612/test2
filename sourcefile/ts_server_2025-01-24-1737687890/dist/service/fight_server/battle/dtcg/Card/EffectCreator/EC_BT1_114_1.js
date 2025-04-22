"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT1_114_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.parent.AddBuff(new DtBuffChangePower_1.DtBuffChangePower(2));
    }
}
exports.default = EC_BT1_114_1;
//# sourceMappingURL=EC_BT1_114_1.js.map