"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICtrl_Sequece = void 0;
const ANode_1 = require("../ANode");
class AICtrl_Sequece extends ANode_1.ANode {
    _DoEvaluate(data) {
        this.Log(data, "顺序节点 开始");
        for (let i = 0; i < this.childCount; i++) {
            let result = this.childNodes[i].Evaluate(data);
            if (result == false) {
                this.Log(data, "顺序节点 结束 结果 false");
                return false;
            }
        }
        this.Log(data, "顺序节点 结束 结果 true");
        return true;
    }
}
exports.AICtrl_Sequece = AICtrl_Sequece;
//# sourceMappingURL=AICtrl_Sequece.js.map