"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIPlayer_RunGmCmd = void 0;
const AICon_base_1 = require("./AICon_base");
class AIPlayer_RunGmCmd extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let cmds = data?.cmds;
            if (cmds) {
                cmds.push(this.sParam1);
                return true;
            }
        }
        return false;
    }
}
exports.AIPlayer_RunGmCmd = AIPlayer_RunGmCmd;
//# sourceMappingURL=AIPlayer_RunGmCmd.js.map