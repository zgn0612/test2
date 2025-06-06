"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
class AICfg_AC10_ST2_13 extends AIcfgBase_1.AIcfgBase {
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
        node4.nParam1 = 2;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node5.priority = 1449;
        let node6 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node6.nParam1 = 0;
        node6.sParam1 = "Hand-check";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node7.nParam1 = 2;
        node7.sParam1 = "Hand-check";
        node7.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.COST;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node8.nParam1 = 1;
        node8.sParam1 = "Hand-check";
        node8.eCompare1 = ADefine_1.AiFilterCompare.GREATER;
        node8.eArea1 = ADefine_1.AiFilterArea.None;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node10 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "None";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "None";
        node11.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node12.nParam1 = 0;
        node12.sParam1 = "hand2";
        node12.eCompare1 = ADefine_1.AiFilterCompare.None;
        node12.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node12.containerType = ADefine_1.AiFilterContainerType.None;
        node12.sParam2 = "None";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node13.nParam1 = 0;
        node13.sParam1 = "hand2";
        node13.eCompare1 = ADefine_1.AiFilterCompare.None;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node13.sParam2 = "ST2-08";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node14.nParam1 = 1;
        node14.sParam1 = "hand2";
        node14.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node14.eArea1 = ADefine_1.AiFilterArea.None;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node15.nParam1 = 0;
        node15.sParam1 = "selffield1";
        node15.eCompare1 = ADefine_1.AiFilterCompare.None;
        node15.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node15.containerType = ADefine_1.AiFilterContainerType.None;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 0;
        let node16 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node16.nParam1 = 4;
        node16.sParam1 = "selffield1";
        node16.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.LV;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node17.nParam1 = 1;
        node17.sParam1 = "selffield1";
        node17.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node18.priority = 1449;
        let node19 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node20 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "None";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node21.nParam1 = 1;
        node21.sParam1 = "None";
        node21.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node22.nParam1 = 0;
        node22.sParam1 = "hand1";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node22.containerType = ADefine_1.AiFilterContainerType.None;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node23.nParam1 = 0;
        node23.sParam1 = "hand1";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node23.sParam2 = "ST2-08";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node24.nParam1 = 1;
        node24.sParam1 = "hand1";
        node24.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node25.nParam1 = 0;
        node25.sParam1 = "selffield";
        node25.eCompare1 = ADefine_1.AiFilterCompare.None;
        node25.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node25.containerType = ADefine_1.AiFilterContainerType.None;
        node25.sParam2 = "None";
        node25.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node25.eCardType = ADefine_1.AiCardType.None;
        node25.nParam2 = 0;
        let node26 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node26.nParam1 = 4;
        node26.sParam1 = "selffield";
        node26.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node26.eArea1 = ADefine_1.AiFilterArea.None;
        node26.containerType = ADefine_1.AiFilterContainerType.LV;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node27.priority = 1449;
        let node28 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node29 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node29.nParam1 = 0;
        node29.sParam1 = "None";
        node29.eCompare1 = ADefine_1.AiFilterCompare.None;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node30.nParam1 = 2;
        node30.sParam1 = "None";
        node30.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node30.eArea1 = ADefine_1.AiFilterArea.None;
        node30.containerType = ADefine_1.AiFilterContainerType.None;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node31.nParam1 = 0;
        node31.sParam1 = "FIeld-check";
        node31.eCompare1 = ADefine_1.AiFilterCompare.None;
        node31.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node31.containerType = ADefine_1.AiFilterContainerType.None;
        node31.sParam2 = "None";
        node31.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node31.eCardType = ADefine_1.AiCardType.None;
        node31.nParam2 = 0;
        let node32 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node32.nParam1 = 5;
        node32.sParam1 = "FIeld-check";
        node32.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node32.eArea1 = ADefine_1.AiFilterArea.None;
        node32.containerType = ADefine_1.AiFilterContainerType.LV;
        node32.sParam2 = "None";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node33.nParam1 = 1;
        node33.sParam1 = "FIeld-check";
        node33.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node34.priority = 1449;
        let node35 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node35.nParam1 = 0;
        node35.sParam1 = "Hand-check-ace";
        node35.eCompare1 = ADefine_1.AiFilterCompare.None;
        node35.eArea1 = ADefine_1.AiFilterArea.None;
        node35.containerType = ADefine_1.AiFilterContainerType.None;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node36.nParam1 = 0;
        node36.sParam1 = "Hand-check-ace";
        node36.eCompare1 = ADefine_1.AiFilterCompare.None;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node36.sParam2 = "ST2-11";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node37.nParam1 = 1;
        node37.sParam1 = "Hand-check-ace";
        node37.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node39 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node39.nParam1 = 0;
        node39.sParam1 = "None";
        node39.eCompare1 = ADefine_1.AiFilterCompare.None;
        node39.eArea1 = ADefine_1.AiFilterArea.None;
        node39.containerType = ADefine_1.AiFilterContainerType.None;
        node39.sParam2 = "None";
        node39.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node39.eCardType = ADefine_1.AiCardType.None;
        node39.nParam2 = 0;
        let node40 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node40.nParam1 = 2;
        node40.sParam1 = "None";
        node40.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node40.eArea1 = ADefine_1.AiFilterArea.None;
        node40.containerType = ADefine_1.AiFilterContainerType.None;
        node40.sParam2 = "None";
        node40.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node40.eCardType = ADefine_1.AiCardType.None;
        node40.nParam2 = 0;
        let node41 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node41.nParam1 = 0;
        node41.sParam1 = "FIeld-check1";
        node41.eCompare1 = ADefine_1.AiFilterCompare.None;
        node41.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node42.nParam1 = 5;
        node42.sParam1 = "FIeld-check1";
        node42.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node42.eArea1 = ADefine_1.AiFilterArea.None;
        node42.containerType = ADefine_1.AiFilterContainerType.LV;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node43.nParam1 = 1;
        node43.sParam1 = "FIeld-check1";
        node43.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.None;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node44.priority = 1449;
        let node45 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node45.nParam1 = 0;
        node45.sParam1 = "Hand-check-ace1";
        node45.eCompare1 = ADefine_1.AiFilterCompare.None;
        node45.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node46.nParam1 = 0;
        node46.sParam1 = "Hand-check-ace1";
        node46.eCompare1 = ADefine_1.AiFilterCompare.None;
        node46.eArea1 = ADefine_1.AiFilterArea.None;
        node46.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node46.sParam2 = "ST2-10";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node47.nParam1 = 1;
        node47.sParam1 = "Hand-check-ace1";
        node47.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node47.eArea1 = ADefine_1.AiFilterArea.None;
        node47.containerType = ADefine_1.AiFilterContainerType.None;
        node47.sParam2 = "None";
        node47.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node47.eCardType = ADefine_1.AiCardType.None;
        node47.nParam2 = 0;
        let node48 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node48.nParam1 = 0;
        node48.sParam1 = "Hand-check-cost2";
        node48.eCompare1 = ADefine_1.AiFilterCompare.None;
        node48.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node48.containerType = ADefine_1.AiFilterContainerType.None;
        node48.sParam2 = "None";
        node48.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node48.eCardType = ADefine_1.AiCardType.None;
        node48.nParam2 = 0;
        let node49 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node49.nParam1 = 2;
        node49.sParam1 = "Hand-check-cost2";
        node49.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node49.eArea1 = ADefine_1.AiFilterArea.None;
        node49.containerType = ADefine_1.AiFilterContainerType.COST;
        node49.sParam2 = "ST2-10";
        node49.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node49.eCardType = ADefine_1.AiCardType.None;
        node49.nParam2 = 0;
        let node50 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node50.nParam1 = 1;
        node50.sParam1 = "Hand-check-cost2";
        node50.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node50.eArea1 = ADefine_1.AiFilterArea.None;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 0;
        let node51 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node52 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node52.nParam1 = 0;
        node52.sParam1 = "None";
        node52.eCompare1 = ADefine_1.AiFilterCompare.None;
        node52.eArea1 = ADefine_1.AiFilterArea.None;
        node52.containerType = ADefine_1.AiFilterContainerType.None;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node53.nParam1 = 2;
        node53.sParam1 = "None";
        node53.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.None;
        node53.sParam2 = "None";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node54.nParam1 = 0;
        node54.sParam1 = "FIeld-check1";
        node54.eCompare1 = ADefine_1.AiFilterCompare.None;
        node54.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node54.containerType = ADefine_1.AiFilterContainerType.None;
        node54.sParam2 = "None";
        node54.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node54.eCardType = ADefine_1.AiCardType.None;
        node54.nParam2 = 0;
        let node55 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node55.nParam1 = 5;
        node55.sParam1 = "FIeld-check1";
        node55.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node55.eArea1 = ADefine_1.AiFilterArea.None;
        node55.containerType = ADefine_1.AiFilterContainerType.LV;
        node55.sParam2 = "None";
        node55.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node55.eCardType = ADefine_1.AiCardType.None;
        node55.nParam2 = 0;
        let node56 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node56.nParam1 = 1;
        node56.sParam1 = "FIeld-check1";
        node56.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node57.nParam1 = 0;
        node57.sParam1 = "Hand-check-ace1";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node58.nParam1 = 0;
        node58.sParam1 = "Hand-check-ace1";
        node58.eCompare1 = ADefine_1.AiFilterCompare.None;
        node58.eArea1 = ADefine_1.AiFilterArea.None;
        node58.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node58.sParam2 = "ST2-10";
        node58.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node58.eCardType = ADefine_1.AiCardType.None;
        node58.nParam2 = 0;
        let node59 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node59.nParam1 = 1;
        node59.sParam1 = "Hand-check-ace1";
        node59.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node59.eArea1 = ADefine_1.AiFilterArea.None;
        node59.containerType = ADefine_1.AiFilterContainerType.None;
        node59.sParam2 = "None";
        node59.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node59.eCardType = ADefine_1.AiCardType.None;
        node59.nParam2 = 0;
        let node60 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node60.priority = 1449;
        AIRoot.AddChildNode(node51);
        AIRoot.AddChildNode(node38);
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node28);
        AIRoot.AddChildNode(node9);
        AIRoot.AddChildNode(node19);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node6);
        node2.AddChildNode(node7);
        node2.AddChildNode(node8);
        node2.AddChildNode(node5);
        node9.AddChildNode(node10);
        node9.AddChildNode(node11);
        node9.AddChildNode(node12);
        node9.AddChildNode(node13);
        node9.AddChildNode(node14);
        node9.AddChildNode(node15);
        node9.AddChildNode(node16);
        node9.AddChildNode(node17);
        node9.AddChildNode(node18);
        node19.AddChildNode(node20);
        node19.AddChildNode(node21);
        node19.AddChildNode(node22);
        node19.AddChildNode(node23);
        node19.AddChildNode(node24);
        node19.AddChildNode(node25);
        node19.AddChildNode(node26);
        node19.AddChildNode(node27);
        node28.AddChildNode(node29);
        node28.AddChildNode(node30);
        node28.AddChildNode(node31);
        node28.AddChildNode(node32);
        node28.AddChildNode(node33);
        node28.AddChildNode(node35);
        node28.AddChildNode(node36);
        node28.AddChildNode(node37);
        node28.AddChildNode(node34);
        node38.AddChildNode(node39);
        node38.AddChildNode(node40);
        node38.AddChildNode(node41);
        node38.AddChildNode(node42);
        node38.AddChildNode(node43);
        node38.AddChildNode(node45);
        node38.AddChildNode(node46);
        node38.AddChildNode(node47);
        node38.AddChildNode(node48);
        node38.AddChildNode(node49);
        node38.AddChildNode(node50);
        node38.AddChildNode(node44);
        node51.AddChildNode(node52);
        node51.AddChildNode(node53);
        node51.AddChildNode(node54);
        node51.AddChildNode(node55);
        node51.AddChildNode(node56);
        node51.AddChildNode(node57);
        node51.AddChildNode(node58);
        node51.AddChildNode(node59);
        node51.AddChildNode(node60);
        return AIRoot;
    }
}
exports.default = AICfg_AC10_ST2_13;
//# sourceMappingURL=AICfg_AC10_ST2_13.js.map