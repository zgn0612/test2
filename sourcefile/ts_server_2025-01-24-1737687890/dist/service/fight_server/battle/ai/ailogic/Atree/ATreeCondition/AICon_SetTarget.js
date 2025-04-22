"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_SetTarget = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_SetTarget extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = this.root.GetContainerCards(this.sParam1);
        if (cards && cards.length > 0) {
            let set = new Array();
            for (let i = 0; i < this.nParam1; i++) {
                if (cards.length > i) {
                    set.push(cards[i]);
                }
            }
            this.root.SetTargets(set);
            return true;
        }
        return false;
    }
}
exports.AICon_SetTarget = AICon_SetTarget;
//# sourceMappingURL=AICon_SetTarget.js.map