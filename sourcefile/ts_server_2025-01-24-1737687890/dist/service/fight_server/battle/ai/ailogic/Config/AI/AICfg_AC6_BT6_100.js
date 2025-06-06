"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanUseEffect_1 = require("../../Atree/ATreeCondition/AICon_CanUseEffect");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AIAction_UseEffect_1 = require("../../Atree/ATreeCommandAction/AIAction_UseEffect");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC6_BT6_100 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AICon_CanUseEffect_1.AICon_CanUseEffect(AIRoot);
        node3.nParam1 = 0;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 0;
        let node4 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node4.nParam1 = 7;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AIAction_UseEffect_1.AIAction_UseEffect(AIRoot);
        node5.priority = 801;
        let node6 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node7 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node7.nParam1 = 0;
        node7.sParam1 = "None";
        node7.eCompare1 = ADefine_1.AiFilterCompare.None;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node8.nParam1 = 6;
        node8.sParam1 = "None";
        node8.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node8.eArea1 = ADefine_1.AiFilterArea.None;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node9.priority = 770;
        let node10 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node11 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "None";
        node11.eCompare1 = ADefine_1.AiFilterCompare.None;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node12.priority = 270;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node6);
        AIRoot.AddChildNode(node10);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node6.AddChildNode(node7);
        node6.AddChildNode(node8);
        node6.AddChildNode(node9);
        node10.AddChildNode(node11);
        node10.AddChildNode(node12);
        return AIRoot;
    }
}
exports.default = AICfg_AC6_BT6_100;
//# sourceMappingURL=AICfg_AC6_BT6_100.js.map