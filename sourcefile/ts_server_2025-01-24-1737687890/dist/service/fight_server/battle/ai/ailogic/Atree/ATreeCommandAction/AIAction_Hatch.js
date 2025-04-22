"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_Hatch = void 0;
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_Hatch extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.HATCH);
        return true;
    }
}
exports.AIAction_Hatch = AIAction_Hatch;
//# sourceMappingURL=AIAction_Hatch.js.map