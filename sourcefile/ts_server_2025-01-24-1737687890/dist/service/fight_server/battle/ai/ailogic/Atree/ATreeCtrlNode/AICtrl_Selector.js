"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICtrl_Selector = void 0;
const ANode_1 = require("../ANode");
class AICtrl_Selector extends ANode_1.ANode {
    _DoEvaluate(data) {
        this.Log(data, "选择节点 开始");
        for (let i = 0; i < this.childCount; i++) {
            let result = this.childNodes[i].Evaluate(data);
            if (result) {
                this.Log(data, "选择节点 结束 true");
                return true;
            }
        }
        this.Log(data, "选择节点 结束 结果 false");
        return false;
    }
}
exports.AICtrl_Selector = AICtrl_Selector;
//# sourceMappingURL=AICtrl_Selector.js.map