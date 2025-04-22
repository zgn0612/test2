"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
class AICfg_testttt extends AIcfgBase_1.AIcfgBase {
    eCompare1;
    eArea1;
    containerType;
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        AICon_CanUse_1.AICon_CanUse;
        let seqNode = AIRoot.AddChildNode(new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot));
        seqNode.AddChildNode(new AICon_CanUse_1.AICon_CanUse(AIRoot));
        seqNode.AddChildNode(new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot));
        AIRoot.AddChildNode(node2);
        return AIRoot;
    }
}
exports.default = AICfg_testttt;
//# sourceMappingURL=AICfg_testttt.js.map