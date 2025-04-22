"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_BT4_016_1 extends DtDigimonPersistenceBuff_1.default {
    SetEffect() {
        this.parent.AddBuff(new DtBuffChangePower_1.DtBuffChangePower(1));
    }
}
exports.default = EC_BT4_016_1;
//# sourceMappingURL=EC_BT4_016_1.js.map