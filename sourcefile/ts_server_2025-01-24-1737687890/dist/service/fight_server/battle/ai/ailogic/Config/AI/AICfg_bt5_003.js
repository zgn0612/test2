"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_Target_NameIs_1 = require("../../Atree/ATreeCondition/AICon_Target_NameIs");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_Target_Lv_1 = require("../../Atree/ATreeCondition/AICon_Target_Lv");
class AICfg_bt5_003 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AICon_Target_NameIs_1.AICon_Target_NameIs(AIRoot);
        node3.nParam1 = 1001;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        let node4 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node4.priority = 200;
        let node5 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node6 = new AICon_Target_Lv_1.AICon_Target_Lv(AIRoot);
        node6.nParam1 = 3;
        node6.sParam1 = "None";
        node6.eCompare1 = ADefine_1.AiFilterCompare.GREATER;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        let node7 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node7.priority = 150;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node5);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node5.AddChildNode(node6);
        node5.AddChildNode(node7);
        return AIRoot;
    }
}
exports.default = AICfg_bt5_003;
//# sourceMappingURL=AICfg_bt5_003.js.map