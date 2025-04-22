"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConDelayEffectUse = void 0;
const DtConBase_1 = require("./DtConBase");
class DtConDelayEffectUse extends DtConBase_1.DtConBase {
    constructor() {
        super();
    }
    CheckCon(effect, data) {
        if (effect.parent.cardSummonRound == effect.parent.parent.manager.CurRound) {
            return false;
        }
        return true;
    }
}
exports.DtConDelayEffectUse = DtConDelayEffectUse;
//# sourceMappingURL=DtConDelayEffectUse.js.map