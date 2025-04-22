"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Target_FeatureIs = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AICon_Target_FeatureIs extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        return target.FeatureIs(this.nParam1);
    }
}
exports.AICon_Target_FeatureIs = AICon_Target_FeatureIs;
//# sourceMappingURL=AICon_Target_FeatureIs.js.map