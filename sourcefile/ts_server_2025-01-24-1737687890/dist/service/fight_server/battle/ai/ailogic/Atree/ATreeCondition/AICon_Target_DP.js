"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Target_DP = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AICon_Target_DP extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        let dp = target.GetCardLastDP();
        return this.ISInCompare(this.eCompare1, dp, this.nParam1);
    }
}
exports.AICon_Target_DP = AICon_Target_DP;
//# sourceMappingURL=AICon_Target_DP.js.map