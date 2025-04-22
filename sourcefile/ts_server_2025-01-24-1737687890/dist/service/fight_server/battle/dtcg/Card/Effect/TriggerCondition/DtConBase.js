"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConBase = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
class DtConBase {
    CheckCon(effect, data) {
        return true;
    }
    ChechRound(effect, round) {
        if (round == DtEnum_1.DtEffectRoundValid.Self) {
            if (effect.parent.GetPlayer().IsThisPlayerRound() == false) {
                return false;
            }
        }
        else if (round == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (effect.parent.GetPlayer().IsThisPlayerRound()) {
                return false;
            }
        }
        return true;
    }
}
exports.DtConBase = DtConBase;
//# sourceMappingURL=DtConBase.js.map