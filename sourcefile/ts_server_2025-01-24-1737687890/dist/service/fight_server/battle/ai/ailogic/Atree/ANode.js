"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANode = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
class ANode {
    root;
    parent;
    childNodes;
    childCount;
    constructor(root) {
        this.childNodes = new Array();
        this.childCount = 0;
        this.root = root;
    }
    Evaluate(data) {
        return this._DoEvaluate(data);
    }
    AddChildNode(node) {
        node.SetParent(this);
        this.childNodes.push(node);
        this.childCount++;
        return node;
    }
    RemoveNode(node) {
        for (let i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i] == node) {
                this.childNodes.splice(i, 1);
                this.childCount--;
                break;
            }
        }
    }
    SetParent(p) {
        this.parent = p;
    }
    Log(data, log) {
        if (data && data.needLog == true) {
            _Dcg_1.gLog.sys("[AI]" + log);
        }
    }
    LogError(data, log) {
        if (data && data.needLog == true) {
            _Dcg_1.gLog.err("[AI ERROR]" + log);
        }
    }
}
exports.ANode = ANode;
//# sourceMappingURL=ANode.js.map