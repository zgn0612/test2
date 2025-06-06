"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIAction_Attack_Player_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack_Player");
const AICon_CanAttack_1 = require("../../Atree/ATreeCondition/AICon_CanAttack");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
class AICfg_BT4_019 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node3.priority = 601;
        let node4 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node6 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node6.nParam1 = 0;
        node6.sParam1 = "None";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node7.nParam1 = 0;
        node7.sParam1 = "evotar";
        node7.eCompare1 = ADefine_1.AiFilterCompare.None;
        node7.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node8.nParam1 = 0;
        node8.sParam1 = "evotar";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.None;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "DP";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node9.nParam1 = 1;
        node9.sParam1 = "evotar";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.None;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node10.priority = 560;
        let node11 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node11.nParam1 = 4;
        node11.sParam1 = "None";
        node11.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        AIRoot.AddChildNode(node5);
        AIRoot.AddChildNode(node2);
        node2.AddChildNode(node4);
        node2.AddChildNode(node3);
        node5.AddChildNode(node6);
        node5.AddChildNode(node11);
        node5.AddChildNode(node7);
        node5.AddChildNode(node8);
        node5.AddChildNode(node9);
        node5.AddChildNode(node10);
        return AIRoot;
    }
}
exports.default = AICfg_BT4_019;
//# sourceMappingURL=AICfg_BT4_019.js.map