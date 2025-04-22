"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_UseEffect = void 0;
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_UseEffect extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.USE_EFFECT);
        return true;
    }
}
exports.AIAction_UseEffect = AIAction_UseEffect;
//# sourceMappingURL=AIAction_UseEffect.js.map