"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICtrl_Parallel = void 0;
const ANode_1 = require("../ANode");
class AICtrl_Parallel extends ANode_1.ANode {
    _DoEvaluate(data) {
        this.Log(data, "并行节点 开始");
        let result = true;
        for (let i = 0; i < this.childCount; i++) {
            let r = this.childNodes[i].Evaluate(data);
            if (r == false) {
                result = false;
            }
        }
        this.Log(data, "并行节点 结束 结果" + result);
        return result;
    }
}
exports.AICtrl_Parallel = AICtrl_Parallel;
//# sourceMappingURL=AICtrl_Parallel.js.map