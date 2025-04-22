"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_EvoCard = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_EvoCard extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        if (this.root.aiCardRoot) {
            if (this.root.aiCardRoot.CardCanEvo()) {
                if (target.CardCanEvoThis(this.root.aiCardRoot)) {
                    this.root.SetServerCammandWithTarget(this.priority, ADefine_1.AICommandType.EVO, target);
                    return true;
                }
            }
        }
        this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_195"));
        return false;
    }
}
exports.AIAction_EvoCard = AIAction_EvoCard;
//# sourceMappingURL=AIAction_EvoCard.js.map