"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanHatchToBattle_1 = require("../../Atree/ATreeCondition/AICon_CanHatchToBattle");
const AIAction_HatchToBattle_1 = require("../../Atree/ATreeCommandAction/AIAction_HatchToBattle");
const AICon_CanAttack_1 = require("../../Atree/ATreeCondition/AICon_CanAttack");
const AICon_PlayerCanWinWithOutPowerCal_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AIAction_Attack_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC7_BT5_062 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node3.nParam1 = 0;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 0;
        let node4 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node4.priority = 5;
        let node5 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node6 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
        node6.nParam1 = 0;
        node6.sParam1 = "None";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_PlayerCanWinWithOutPowerCal_1.AICon_PlayerCanWinWithOutPowerCal(AIRoot);
        node7.nParam1 = 1;
        node7.sParam1 = "None";
        node7.eCompare1 = ADefine_1.AiFilterCompare.None;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node8.nParam1 = 0;
        node8.sParam1 = "def";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 1;
        node9.sParam1 = "def";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "def";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node11.nParam1 = 1;
        node11.sParam1 = "def";
        node11.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AIAction_Attack_1.AIAction_Attack(AIRoot);
        node12.priority = 1040;
        let node13 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node14 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node14.nParam1 = 0;
        node14.sParam1 = "None";
        node14.eCompare1 = ADefine_1.AiFilterCompare.None;
        node14.eArea1 = ADefine_1.AiFilterArea.None;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node15.nParam1 = 3;
        node15.sParam1 = "None";
        node15.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node15.eArea1 = ADefine_1.AiFilterArea.None;
        node15.containerType = ADefine_1.AiFilterContainerType.None;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 0;
        let node16 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node16.nParam1 = 0;
        node16.sParam1 = "canevo";
        node16.eCompare1 = ADefine_1.AiFilterCompare.None;
        node16.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node17.nParam1 = 1;
        node17.sParam1 = "canevo";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "ORICOUNT|DP";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node18.nParam1 = 1;
        node18.sParam1 = "canevo";
        node18.eCompare1 = ADefine_1.AiFilterCompare.None;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.None;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node19.priority = 844;
        let node20 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node21 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node21.nParam1 = 0;
        node21.sParam1 = "None";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node22.nParam1 = 0;
        node22.sParam1 = "canevo1";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node22.containerType = ADefine_1.AiFilterContainerType.None;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node23.nParam1 = 1;
        node23.sParam1 = "canevo1";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "ORICOUNT|DP";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node24.nParam1 = 1;
        node24.sParam1 = "canevo1";
        node24.eCompare1 = ADefine_1.AiFilterCompare.None;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node25.priority = 343;
        let node26 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node27 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node27.nParam1 = 0;
        node27.sParam1 = "None";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node28.priority = 100;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node5);
        AIRoot.AddChildNode(node13);
        AIRoot.AddChildNode(node20);
        AIRoot.AddChildNode(node26);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node5.AddChildNode(node6);
        node5.AddChildNode(node7);
        node5.AddChildNode(node8);
        node5.AddChildNode(node9);
        node5.AddChildNode(node10);
        node5.AddChildNode(node11);
        node5.AddChildNode(node12);
        node13.AddChildNode(node14);
        node13.AddChildNode(node15);
        node13.AddChildNode(node16);
        node13.AddChildNode(node17);
        node13.AddChildNode(node18);
        node13.AddChildNode(node19);
        node20.AddChildNode(node21);
        node20.AddChildNode(node22);
        node20.AddChildNode(node23);
        node20.AddChildNode(node24);
        node20.AddChildNode(node25);
        node26.AddChildNode(node27);
        node26.AddChildNode(node28);
        return AIRoot;
    }
}
exports.default = AICfg_AC7_BT5_062;
//# sourceMappingURL=AICfg_AC7_BT5_062.js.map