"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerRoundOver = void 0;
const DtConBase_1 = require("./DtConBase");
class DtConTriggerRoundOver extends DtConBase_1.DtConBase {
    round;
    constructor(round) {
        super();
        this.round = round;
    }
    CheckCon(effect, data) {
        let msg = data;
        if (msg == null) {
            return false;
        }
        if (this.ChechRound(effect, this.round) == false) {
            return false;
        }
        return true;
    }
}
exports.DtConTriggerRoundOver = DtConTriggerRoundOver;
//# sourceMappingURL=DtConTriggerRoundOver.js.map