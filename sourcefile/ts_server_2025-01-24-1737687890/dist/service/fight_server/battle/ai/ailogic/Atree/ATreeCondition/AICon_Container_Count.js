"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Container_Count = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_Container_Count extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = this.root.GetContainerCards(this.sParam1);
        if (cards == null) {
            this.LogError(data, "容器不存在:" + this.sParam1);
            return false;
        }
        let count = cards.length;
        return this.ISInCompare(this.eCompare1, count, this.nParam1);
    }
}
exports.AICon_Container_Count = AICon_Container_Count;
//# sourceMappingURL=AICon_Container_Count.js.map