"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_Standby = void 0;
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_Standby extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.STAND_BY);
        return true;
    }
}
exports.AIAction_Standby = AIAction_Standby;
//# sourceMappingURL=AIAction_Standby.js.map