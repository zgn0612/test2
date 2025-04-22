"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Target_NameIsForce = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AICon_Target_NameIsForce extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        return target.NameIs(this.nParam1, true);
    }
}
exports.AICon_Target_NameIsForce = AICon_Target_NameIsForce;
//# sourceMappingURL=AICon_Target_NameIsForce.js.map