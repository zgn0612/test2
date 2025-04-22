"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAction_Attack_Player = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const ADefine_1 = require("../ADefine");
const ACommandBase_1 = require("./ACommandBase");
class AIAction_Attack_Player extends ACommandBase_1.ACommandBase {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            if (this.root.aiCardRoot.CardCanAttack()) {
                if (this.root.aiCardRoot.CardCanAttackDefense()) {
                    this.root.SetServerCammand(this.priority, ADefine_1.AICommandType.ATTCK_DEFENSE);
                    return true;
                }
            }
        }
        this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_192"));
        return false;
    }
}
exports.AIAction_Attack_Player = AIAction_Attack_Player;
//# sourceMappingURL=AIAction_Attack_Player.js.map