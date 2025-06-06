"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICon_PlayerNextWillDie_1 = require("../../Atree/ATreeCondition/AICon_PlayerNextWillDie");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AICon_CheckOppPlayHasLock3Card_1 = require("../../Atree/ATreeCondition/AICon_CheckOppPlayHasLock3Card");
class AICfg_AC10_ST2_16 extends AIcfgBase_1.AIcfgBase {
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
        let node4 = new AICon_PlayerNextWillDie_1.AICon_PlayerNextWillDie(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node5.priority = 999;
        let node6 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node7 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node7.nParam1 = 7;
        node7.sParam1 = "None";
        node7.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node8.nParam1 = 0;
        node8.sParam1 = "Opba2";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 1;
        node9.sParam1 = "Opba2";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node10.nParam1 = 1;
        node10.sParam1 = "Opba2";
        node10.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "selfba";
        node11.eCompare1 = ADefine_1.AiFilterCompare.None;
        node11.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node12.nParam1 = 0;
        node12.sParam1 = "selfba";
        node12.eCompare1 = ADefine_1.AiFilterCompare.None;
        node12.eArea1 = ADefine_1.AiFilterArea.None;
        node12.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node12.sParam2 = "ST2-11";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node13.nParam1 = 1;
        node13.sParam1 = "selfba";
        node13.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node14.priority = 1399;
        let node15 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node16 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node16.nParam1 = 0;
        node16.sParam1 = "None";
        node16.eCompare1 = ADefine_1.AiFilterCompare.None;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node17.nParam1 = 3;
        node17.sParam1 = "None";
        node17.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_CheckOppPlayHasLock3Card_1.AICon_CheckOppPlayHasLock3Card(AIRoot);
        node18.nParam1 = 0;
        node18.sParam1 = "None";
        node18.eCompare1 = ADefine_1.AiFilterCompare.None;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.None;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node19.nParam1 = 0;
        node19.sParam1 = "oppbattle";
        node19.eCompare1 = ADefine_1.AiFilterCompare.None;
        node19.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node20.nParam1 = 22;
        node20.sParam1 = "oppbattle";
        node20.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node21.nParam1 = 1;
        node21.sParam1 = "oppbattle";
        node21.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node22.priority = 990;
        let node23 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node24 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node24.nParam1 = 0;
        node24.sParam1 = "None";
        node24.eCompare1 = ADefine_1.AiFilterCompare.None;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node25.nParam1 = 3;
        node25.sParam1 = "None";
        node25.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node25.eArea1 = ADefine_1.AiFilterArea.None;
        node25.containerType = ADefine_1.AiFilterContainerType.None;
        node25.sParam2 = "None";
        node25.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node25.eCardType = ADefine_1.AiCardType.None;
        node25.nParam2 = 0;
        let node26 = new AICon_CheckOppPlayHasLock3Card_1.AICon_CheckOppPlayHasLock3Card(AIRoot);
        node26.nParam1 = 0;
        node26.sParam1 = "None";
        node26.eCompare1 = ADefine_1.AiFilterCompare.None;
        node26.eArea1 = ADefine_1.AiFilterArea.None;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node27.nParam1 = 0;
        node27.sParam1 = "oppbattle1";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node28.nParam1 = 5;
        node28.sParam1 = "oppbattle1";
        node28.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node29.nParam1 = 1;
        node29.sParam1 = "oppbattle1";
        node29.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node30.priority = 990;
        let node31 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node32 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node32.nParam1 = 0;
        node32.sParam1 = "None";
        node32.eCompare1 = ADefine_1.AiFilterCompare.None;
        node32.eArea1 = ADefine_1.AiFilterArea.None;
        node32.containerType = ADefine_1.AiFilterContainerType.None;
        node32.sParam2 = "None";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node33.nParam1 = 4;
        node33.sParam1 = "None";
        node33.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AICon_CheckOppPlayHasLock3Card_1.AICon_CheckOppPlayHasLock3Card(AIRoot);
        node34.nParam1 = 0;
        node34.sParam1 = "None";
        node34.eCompare1 = ADefine_1.AiFilterCompare.None;
        node34.eArea1 = ADefine_1.AiFilterArea.None;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node35.nParam1 = 0;
        node35.sParam1 = "oppbattle2";
        node35.eCompare1 = ADefine_1.AiFilterCompare.None;
        node35.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node35.containerType = ADefine_1.AiFilterContainerType.None;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node36.nParam1 = 5;
        node36.sParam1 = "oppbattle2";
        node36.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node36.sParam2 = "None";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node37.nParam1 = 1;
        node37.sParam1 = "oppbattle2";
        node37.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node38.priority = 780;
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
        node41.nParam1 = 4;
        node41.sParam1 = "None";
        node41.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_CheckOppPlayHasLock3Card_1.AICon_CheckOppPlayHasLock3Card(AIRoot);
        node42.nParam1 = 0;
        node42.sParam1 = "None";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.None;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node43.nParam1 = 0;
        node43.sParam1 = "oppbattle3";
        node43.eCompare1 = ADefine_1.AiFilterCompare.None;
        node43.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node43.containerType = ADefine_1.AiFilterContainerType.None;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node44.nParam1 = 22;
        node44.sParam1 = "oppbattle3";
        node44.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node45.nParam1 = 1;
        node45.sParam1 = "oppbattle3";
        node45.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node45.eArea1 = ADefine_1.AiFilterArea.None;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node46.priority = 780;
        let node47 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node48 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node48.nParam1 = 0;
        node48.sParam1 = "None";
        node48.eCompare1 = ADefine_1.AiFilterCompare.None;
        node48.eArea1 = ADefine_1.AiFilterArea.None;
        node48.containerType = ADefine_1.AiFilterContainerType.None;
        node48.sParam2 = "None";
        node48.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node48.eCardType = ADefine_1.AiCardType.None;
        node48.nParam2 = 0;
        let node49 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node49.nParam1 = 4;
        node49.sParam1 = "None";
        node49.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node49.eArea1 = ADefine_1.AiFilterArea.None;
        node49.containerType = ADefine_1.AiFilterContainerType.None;
        node49.sParam2 = "None";
        node49.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node49.eCardType = ADefine_1.AiCardType.None;
        node49.nParam2 = 0;
        let node50 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node50.nParam1 = 0;
        node50.sParam1 = "oppbattle4";
        node50.eCompare1 = ADefine_1.AiFilterCompare.None;
        node50.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 0;
        let node51 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node51.nParam1 = 22;
        node51.sParam1 = "oppbattle4";
        node51.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node51.eArea1 = ADefine_1.AiFilterArea.None;
        node51.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node51.sParam2 = "BT3-075";
        node51.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node51.eCardType = ADefine_1.AiCardType.None;
        node51.nParam2 = 0;
        let node52 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node52.nParam1 = 1;
        node52.sParam1 = "oppbattle4";
        node52.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node52.eArea1 = ADefine_1.AiFilterArea.None;
        node52.containerType = ADefine_1.AiFilterContainerType.None;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node53.priority = 191;
        let node54 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node55 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node55.nParam1 = 0;
        node55.sParam1 = "None";
        node55.eCompare1 = ADefine_1.AiFilterCompare.None;
        node55.eArea1 = ADefine_1.AiFilterArea.None;
        node55.containerType = ADefine_1.AiFilterContainerType.None;
        node55.sParam2 = "None";
        node55.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node55.eCardType = ADefine_1.AiCardType.None;
        node55.nParam2 = 0;
        let node56 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node56.nParam1 = 4;
        node56.sParam1 = "None";
        node56.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node57.nParam1 = 0;
        node57.sParam1 = "oppbattle5";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node58.nParam1 = 22;
        node58.sParam1 = "oppbattle5";
        node58.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node58.eArea1 = ADefine_1.AiFilterArea.None;
        node58.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node58.sParam2 = "BT3-075";
        node58.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node58.eCardType = ADefine_1.AiCardType.None;
        node58.nParam2 = 0;
        let node59 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node59.nParam1 = 1;
        node59.sParam1 = "oppbattle5";
        node59.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node59.eArea1 = ADefine_1.AiFilterArea.None;
        node59.containerType = ADefine_1.AiFilterContainerType.None;
        node59.sParam2 = "None";
        node59.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node59.eCardType = ADefine_1.AiCardType.None;
        node59.nParam2 = 0;
        let node60 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node60.priority = 191;
        let node61 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node62 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node62.nParam1 = 0;
        node62.sParam1 = "None";
        node62.eCompare1 = ADefine_1.AiFilterCompare.None;
        node62.eArea1 = ADefine_1.AiFilterArea.None;
        node62.containerType = ADefine_1.AiFilterContainerType.None;
        node62.sParam2 = "None";
        node62.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node62.eCardType = ADefine_1.AiCardType.None;
        node62.nParam2 = 0;
        let node63 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node63.nParam1 = 0;
        node63.sParam1 = "oppbattle6";
        node63.eCompare1 = ADefine_1.AiFilterCompare.None;
        node63.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node63.containerType = ADefine_1.AiFilterContainerType.None;
        node63.sParam2 = "None";
        node63.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node63.eCardType = ADefine_1.AiCardType.None;
        node63.nParam2 = 0;
        let node64 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node64.nParam1 = 5;
        node64.sParam1 = "oppbattle6";
        node64.eCompare1 = ADefine_1.AiFilterCompare.None;
        node64.eArea1 = ADefine_1.AiFilterArea.None;
        node64.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node64.sParam2 = "None";
        node64.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node64.eCardType = ADefine_1.AiCardType.None;
        node64.nParam2 = 0;
        let node65 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node65.nParam1 = 4;
        node65.sParam1 = "oppbattle5";
        node65.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node65.eArea1 = ADefine_1.AiFilterArea.None;
        node65.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node65.sParam2 = "BT3-075";
        node65.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node65.eCardType = ADefine_1.AiCardType.None;
        node65.nParam2 = 0;
        let node66 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node66.nParam1 = 1;
        node66.sParam1 = "oppbattle5";
        node66.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node66.eArea1 = ADefine_1.AiFilterArea.None;
        node66.containerType = ADefine_1.AiFilterContainerType.None;
        node66.sParam2 = "None";
        node66.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node66.eCardType = ADefine_1.AiCardType.None;
        node66.nParam2 = 0;
        let node67 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node67.priority = 900;
        let node68 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node69 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node69.nParam1 = 0;
        node69.sParam1 = "None";
        node69.eCompare1 = ADefine_1.AiFilterCompare.None;
        node69.eArea1 = ADefine_1.AiFilterArea.None;
        node69.containerType = ADefine_1.AiFilterContainerType.None;
        node69.sParam2 = "None";
        node69.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node69.eCardType = ADefine_1.AiCardType.None;
        node69.nParam2 = 0;
        let node70 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node70.nParam1 = 3;
        node70.sParam1 = "None";
        node70.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node70.eArea1 = ADefine_1.AiFilterArea.None;
        node70.containerType = ADefine_1.AiFilterContainerType.None;
        node70.sParam2 = "None";
        node70.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node70.eCardType = ADefine_1.AiCardType.None;
        node70.nParam2 = 0;
        let node71 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node71.nParam1 = 0;
        node71.sParam1 = "oppbattle4";
        node71.eCompare1 = ADefine_1.AiFilterCompare.None;
        node71.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node71.containerType = ADefine_1.AiFilterContainerType.None;
        node71.sParam2 = "None";
        node71.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node71.eCardType = ADefine_1.AiCardType.None;
        node71.nParam2 = 0;
        let node72 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node72.nParam1 = 5;
        node72.sParam1 = "oppbattle4";
        node72.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node72.eArea1 = ADefine_1.AiFilterArea.None;
        node72.containerType = ADefine_1.AiFilterContainerType.LV;
        node72.sParam2 = "None";
        node72.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node72.eCardType = ADefine_1.AiCardType.None;
        node72.nParam2 = 0;
        let node73 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node73.nParam1 = 1;
        node73.sParam1 = "oppbattle4";
        node73.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node73.eArea1 = ADefine_1.AiFilterArea.None;
        node73.containerType = ADefine_1.AiFilterContainerType.None;
        node73.sParam2 = "None";
        node73.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node73.eCardType = ADefine_1.AiCardType.None;
        node73.nParam2 = 0;
        let node74 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node74.priority = 100;
        let node75 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node76 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node76.nParam1 = 0;
        node76.sParam1 = "None";
        node76.eCompare1 = ADefine_1.AiFilterCompare.None;
        node76.eArea1 = ADefine_1.AiFilterArea.None;
        node76.containerType = ADefine_1.AiFilterContainerType.None;
        node76.sParam2 = "None";
        node76.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node76.eCardType = ADefine_1.AiCardType.None;
        node76.nParam2 = 0;
        let node77 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node77.nParam1 = 0;
        node77.sParam1 = "oppbattle-baodi";
        node77.eCompare1 = ADefine_1.AiFilterCompare.None;
        node77.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node77.containerType = ADefine_1.AiFilterContainerType.None;
        node77.sParam2 = "None";
        node77.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node77.eCardType = ADefine_1.AiCardType.None;
        node77.nParam2 = 0;
        let node78 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node78.nParam1 = 5;
        node78.sParam1 = "oppbattle-baodi";
        node78.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node78.eArea1 = ADefine_1.AiFilterArea.None;
        node78.containerType = ADefine_1.AiFilterContainerType.LV;
        node78.sParam2 = "None";
        node78.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node78.eCardType = ADefine_1.AiCardType.None;
        node78.nParam2 = 0;
        let node79 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node79.nParam1 = 1;
        node79.sParam1 = "oppbattle-baodi";
        node79.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node79.eArea1 = ADefine_1.AiFilterArea.None;
        node79.containerType = ADefine_1.AiFilterContainerType.None;
        node79.sParam2 = "None";
        node79.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node79.eCardType = ADefine_1.AiCardType.None;
        node79.nParam2 = 0;
        let node80 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node80.priority = 5;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node6);
        AIRoot.AddChildNode(node15);
        AIRoot.AddChildNode(node23);
        AIRoot.AddChildNode(node31);
        AIRoot.AddChildNode(node39);
        AIRoot.AddChildNode(node47);
        AIRoot.AddChildNode(node54);
        AIRoot.AddChildNode(node61);
        AIRoot.AddChildNode(node68);
        AIRoot.AddChildNode(node75);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node6.AddChildNode(node7);
        node6.AddChildNode(node8);
        node6.AddChildNode(node9);
        node6.AddChildNode(node10);
        node6.AddChildNode(node11);
        node6.AddChildNode(node12);
        node6.AddChildNode(node13);
        node6.AddChildNode(node14);
        node15.AddChildNode(node16);
        node15.AddChildNode(node17);
        node15.AddChildNode(node18);
        node15.AddChildNode(node19);
        node15.AddChildNode(node20);
        node15.AddChildNode(node21);
        node15.AddChildNode(node22);
        node23.AddChildNode(node24);
        node23.AddChildNode(node25);
        node23.AddChildNode(node26);
        node23.AddChildNode(node27);
        node23.AddChildNode(node28);
        node23.AddChildNode(node29);
        node23.AddChildNode(node30);
        node31.AddChildNode(node32);
        node31.AddChildNode(node33);
        node31.AddChildNode(node34);
        node31.AddChildNode(node35);
        node31.AddChildNode(node36);
        node31.AddChildNode(node37);
        node31.AddChildNode(node38);
        node39.AddChildNode(node40);
        node39.AddChildNode(node41);
        node39.AddChildNode(node42);
        node39.AddChildNode(node43);
        node39.AddChildNode(node44);
        node39.AddChildNode(node45);
        node39.AddChildNode(node46);
        node47.AddChildNode(node48);
        node47.AddChildNode(node49);
        node47.AddChildNode(node50);
        node47.AddChildNode(node51);
        node47.AddChildNode(node52);
        node47.AddChildNode(node53);
        node54.AddChildNode(node55);
        node54.AddChildNode(node56);
        node54.AddChildNode(node57);
        node54.AddChildNode(node58);
        node54.AddChildNode(node59);
        node54.AddChildNode(node60);
        node61.AddChildNode(node62);
        node61.AddChildNode(node63);
        node61.AddChildNode(node64);
        node61.AddChildNode(node65);
        node61.AddChildNode(node66);
        node61.AddChildNode(node67);
        node68.AddChildNode(node69);
        node68.AddChildNode(node70);
        node68.AddChildNode(node71);
        node68.AddChildNode(node72);
        node68.AddChildNode(node73);
        node68.AddChildNode(node74);
        node75.AddChildNode(node76);
        node75.AddChildNode(node77);
        node75.AddChildNode(node78);
        node75.AddChildNode(node79);
        node75.AddChildNode(node80);
        return AIRoot;
    }
}
exports.default = AICfg_AC10_ST2_16;
//# sourceMappingURL=AICfg_AC10_ST2_16.js.map