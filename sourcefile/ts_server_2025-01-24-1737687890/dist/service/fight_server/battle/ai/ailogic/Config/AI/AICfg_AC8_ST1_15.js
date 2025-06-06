"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC8_ST1_15 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
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
        node4.nParam1 = 6;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node5.nParam1 = 0;
        node5.sParam1 = "oppbattle";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "None";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node6.nParam1 = 4;
        node6.sParam1 = "oppbattle";
        node6.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.LV;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node7.nParam1 = 2;
        node7.sParam1 = "oppbattle";
        node7.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node8.priority = 1000;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 4000;
        node9.sParam1 = "oppbattle";
        node9.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.DP;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
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
        let node12 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node12.nParam1 = 6;
        node12.sParam1 = "None";
        node12.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node12.eArea1 = ADefine_1.AiFilterArea.None;
        node12.containerType = ADefine_1.AiFilterContainerType.None;
        node12.sParam2 = "None";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node13.nParam1 = 0;
        node13.sParam1 = "oppbattle1";
        node13.eCompare1 = ADefine_1.AiFilterCompare.None;
        node13.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node14.nParam1 = 4;
        node14.sParam1 = "oppbattle1";
        node14.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node14.eArea1 = ADefine_1.AiFilterArea.None;
        node14.containerType = ADefine_1.AiFilterContainerType.LV;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node15.nParam1 = 2;
        node15.sParam1 = "oppbattle1";
        node15.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node15.eArea1 = ADefine_1.AiFilterArea.None;
        node15.containerType = ADefine_1.AiFilterContainerType.None;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 0;
        let node16 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node16.priority = 800;
        let node17 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node17.nParam1 = 4000;
        node17.sParam1 = "oppbattle1";
        node17.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.DP;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node19 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node19.nParam1 = 0;
        node19.sParam1 = "None";
        node19.eCompare1 = ADefine_1.AiFilterCompare.None;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node20.nParam1 = 6;
        node20.sParam1 = "None";
        node20.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node21.nParam1 = 0;
        node21.sParam1 = "oppbattle2";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node22.nParam1 = 4000;
        node22.sParam1 = "oppbattle2";
        node22.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node22.eArea1 = ADefine_1.AiFilterArea.None;
        node22.containerType = ADefine_1.AiFilterContainerType.DP;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node23.nParam1 = 2;
        node23.sParam1 = "oppbattle2";
        node23.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node24.priority = 990;
        let node25 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node26 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node26.nParam1 = 0;
        node26.sParam1 = "None";
        node26.eCompare1 = ADefine_1.AiFilterCompare.None;
        node26.eArea1 = ADefine_1.AiFilterArea.None;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node27.nParam1 = 6;
        node27.sParam1 = "None";
        node27.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node28.nParam1 = 1;
        node28.sParam1 = "oppbattle3";
        node28.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.None;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node29.nParam1 = 4000;
        node29.sParam1 = "oppbattle3";
        node29.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.DP;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node30.nParam1 = 0;
        node30.sParam1 = "oppbattle3";
        node30.eCompare1 = ADefine_1.AiFilterCompare.None;
        node30.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node30.containerType = ADefine_1.AiFilterContainerType.None;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node31.priority = 900;
        let node32 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node33 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node33.nParam1 = 6;
        node33.sParam1 = "None";
        node33.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node34.nParam1 = 0;
        node34.sParam1 = "oppbattle4";
        node34.eCompare1 = ADefine_1.AiFilterCompare.None;
        node34.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node35.nParam1 = 0;
        node35.sParam1 = "None";
        node35.eCompare1 = ADefine_1.AiFilterCompare.None;
        node35.eArea1 = ADefine_1.AiFilterArea.None;
        node35.containerType = ADefine_1.AiFilterContainerType.None;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node36.nParam1 = 4000;
        node36.sParam1 = "oppbattle4";
        node36.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.DP;
        node36.sParam2 = "None";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node37.nParam1 = 2;
        node37.sParam1 = "oppbattle4";
        node37.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node38.priority = 600;
        let node39 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node40 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node40.nParam1 = 0;
        node40.sParam1 = "None";
        node40.eCompare1 = ADefine_1.AiFilterCompare.None;
        node40.eArea1 = ADefine_1.AiFilterArea.None;
        node40.containerType = ADefine_1.AiFilterContainerType.None;
        node40.sParam2 = "None";
        node40.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node40.eCardType = ADefine_1.AiCardType.None;
        node40.nParam2 = 0;
        let node41 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node41.nParam1 = 6;
        node41.sParam1 = "None";
        node41.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node42.nParam1 = 0;
        node42.sParam1 = "oppbattle5";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node43.nParam1 = 4000;
        node43.sParam1 = "oppbattle5";
        node43.eCompare1 = ADefine_1.AiFilterCompare.LESS_EQUAL;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.DP;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node44.nParam1 = 1;
        node44.sParam1 = "oppbattle4";
        node44.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.None;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node45.priority = 100;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node10);
        AIRoot.AddChildNode(node18);
        AIRoot.AddChildNode(node25);
        AIRoot.AddChildNode(node32);
        AIRoot.AddChildNode(node39);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node2.AddChildNode(node6);
        node2.AddChildNode(node9);
        node2.AddChildNode(node7);
        node2.AddChildNode(node8);
        node10.AddChildNode(node11);
        node10.AddChildNode(node12);
        node10.AddChildNode(node13);
        node10.AddChildNode(node14);
        node10.AddChildNode(node17);
        node10.AddChildNode(node15);
        node10.AddChildNode(node16);
        node18.AddChildNode(node19);
        node18.AddChildNode(node20);
        node18.AddChildNode(node21);
        node18.AddChildNode(node22);
        node18.AddChildNode(node23);
        node18.AddChildNode(node24);
        node25.AddChildNode(node26);
        node25.AddChildNode(node27);
        node25.AddChildNode(node30);
        node25.AddChildNode(node29);
        node25.AddChildNode(node28);
        node25.AddChildNode(node31);
        node32.AddChildNode(node35);
        node32.AddChildNode(node33);
        node32.AddChildNode(node34);
        node32.AddChildNode(node36);
        node32.AddChildNode(node37);
        node32.AddChildNode(node38);
        node39.AddChildNode(node40);
        node39.AddChildNode(node41);
        node39.AddChildNode(node42);
        node39.AddChildNode(node43);
        node39.AddChildNode(node44);
        node39.AddChildNode(node45);
        return AIRoot;
    }
}
exports.default = AICfg_AC8_ST1_15;
//# sourceMappingURL=AICfg_AC8_ST1_15.js.map