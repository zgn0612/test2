"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_CanBlock = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_CanBlock extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (this.root.aiCardRoot) {
            let card = this.root.aiCardRoot;
            return card.CardCanBlock();
        }
        return false;
    }
}
exports.AICon_CanBlock = AICon_CanBlock;
//# sourceMappingURL=AICon_CanBlock.js.map