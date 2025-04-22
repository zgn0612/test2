"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_PlayCard = void 0;
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_PlayCard extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.PLAY_CARD);
        return true;
    }
}
exports.AIAction_PlayCard = AIAction_PlayCard;
//# sourceMappingURL=AIAction_PlayCard.js.map