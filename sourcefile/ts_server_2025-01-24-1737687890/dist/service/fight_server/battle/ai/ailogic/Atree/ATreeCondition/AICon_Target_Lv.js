"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Target_Lv = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AICon_Target_Lv extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let target = this.root.GetTarget();
        if (target == null) {
            this.LogError(data, _Dcg_1.gCfg.language.GetLanguage("UIbattlefield_191"));
            return false;
        }
        let lv = target.GetCardLv();
        return this.ISInCompare(this.eCompare1, lv, this.nParam1);
    }
}
exports.AICon_Target_Lv = AICon_Target_Lv;
//# sourceMappingURL=AICon_Target_Lv.js.map