"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtreeRoot = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const ADefine_1 = require("./ADefine");
class AtreeRoot {
    battleScene;
    aiCardRoot;
    aiId;
    childNodes;
    childCount;
    serverCommands;
    targetKey = "target";
    dataSave;
    target;
    constructor(parent, aiId) {
        this.childNodes = new Array();
        this.serverCommands = new Array();
        this.dataSave = new Map();
        this.childCount = 0;
        this.battleScene = parent;
        this.aiId = aiId;
        this.targetKey = "target";
    }
    Evaluate(data, target = null) {
        if (data && data.needLog) {
            _Dcg_1.gLog.err("开始运行ai树  数量:" + this.childCount);
        }
        this.target = target;
        this.ResetDatas();
        for (let i = 0; i < this.childCount; i++) {
            this.childNodes[i].Evaluate(data);
        }
    }
    AddChildNode(node) {
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
    GetHigPriorityCommand(current) {
        let cur = current;
        if (this.serverCommands && this.serverCommands.length > 0) {
            for (let i = 0; i < this.serverCommands.length; i++) {
                if (cur == null) {
                    cur = this.serverCommands[i];
                }
                if (cur.priority < this.serverCommands[i].priority) {
                    cur = this.serverCommands[i];
                }
            }
        }
        return cur;
    }
    ResetDatas() {
        this.serverCommands.length = 0;
        this.dataSave.clear();
    }
    GetCammands() {
        return this.serverCommands;
    }
    SetServerCammand(priority, type) {
        let c = new ADefine_1.AIServerCammand();
        c.priority = priority;
        c.type = type;
        c.cammandCard = this.aiCardRoot;
        this.serverCommands.push(c);
        return c;
    }
    SetServerCammandWithTarget(priority, type, target) {
        let c = new ADefine_1.AIServerCammand();
        c.priority = priority;
        c.type = type;
        c.target = target;
        c.cammandCard = this.aiCardRoot;
        this.serverCommands.push(c);
        return c;
    }
    SetServerCammandWithTargets(priority, type, targets) {
        let c = new ADefine_1.AIServerCammand();
        c.priority = priority;
        c.type = type;
        c.targets = targets;
        c.cammandCard = this.aiCardRoot;
        this.serverCommands.push(c);
        return c;
    }
    SetContainerCards(key, cards) {
        this.dataSave.set(key, cards);
    }
    GetContainerCards(key) {
        let cards = this.dataSave.get(key);
        if (cards == undefined) {
            return null;
        }
        return cards;
    }
    ClearTargets() {
        this.dataSave.delete(this.targetKey);
    }
    SetTargets(cards) {
        this.SetContainerCards(this.targetKey, cards);
    }
    GetTarget() {
        if (this.target == null) {
            let target = this.dataSave.get(this.targetKey);
            if (target == undefined || target.length == 0) {
                return null;
            }
            return target[0];
        }
        return this.target;
    }
    GetTargets() {
        let target = this.dataSave.get(this.targetKey);
        if (target == undefined || target.length == 0) {
            return null;
        }
        return target;
    }
    GetBattleScene() {
        return this.battleScene;
    }
    GetAIPlayer() {
        return this.battleScene.GetPlayer(this.aiId);
    }
    GetOPPlayer() {
        return this.battleScene.GetOppPlayer(this.aiId);
    }
    GetPlayer(pid) {
        return this.battleScene.GetPlayer(pid);
    }
}
exports.AtreeRoot = AtreeRoot;
//# sourceMappingURL=AtreeRoot.js.map