"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_Attack = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_Attack extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        if (this.root.aiCardRoot) {
            if (this.root.aiCardRoot.CardCanAttack()) {
                if (target.CanBeAttack(this.root.aiCardRoot)) {
                    this.root.SetServerCammandWithTarget(this.priority, ADefine_1.AICommandType.ATTACK, target);
                    return true;
                }
            }
        }
        this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_192"));
        return false;
    }
}
exports.AIAction_Attack = AIAction_Attack;
//# sourceMappingURL=AIAction_Attack.js.map