"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_JumpToNextTurn = void 0;
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_JumpToNextTurn extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.JUMP_TO_NEXT_TURN);
        return true;
    }
}
exports.AIAction_JumpToNextTurn = AIAction_JumpToNextTurn;
//# sourceMappingURL=AIAction_JumpToNextTurn.js.map