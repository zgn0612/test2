"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtestNodeFalse = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const ANode_1 = require("../ANode");
class AtestNodeFalse extends ANode_1.ANode {
    log;
    constructor(root, log) {
        super(root);
        this.log = log;
    }
    _DoEvaluate(data) {
        _Dcg_1.gLog.err("test node ==>" + this.log);
        return false;
    }
}
exports.AtestNodeFalse = AtestNodeFalse;
//# sourceMappingURL=AtestNodeFalse.js.map