"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACommandBase = void 0;
const ANode_1 = require("../ANode");
class ACommandBase extends ANode_1.ANode {
    priority;
    constructor(root, priority = 0) {
        super(root);
        this.priority = priority;
    }
    Evaluate(data) {
        let result = this._DoEvaluate(data);
        this.root.ClearTargets();
        return result;
    }
    _DoEvaluate(data) {
        return true;
    }
}
exports.ACommandBase = ACommandBase;
//# sourceMappingURL=ACommandBase.js.map