"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConTriggerMainPhaseStart = void 0;
const DtConBase_1 = require("./DtConBase");
class DtConTriggerMainPhaseStart extends DtConBase_1.DtConBase {
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
exports.DtConTriggerMainPhaseStart = DtConTriggerMainPhaseStart;
//# sourceMappingURL=DtConTriggerMainPhaseStart.js.map