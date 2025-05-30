"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_PlayerCanWinWithOutPowerCal_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal");
const AIAction_Attack_Player_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack_Player");
const AICon_CanHatchToBattle_1 = require("../../Atree/ATreeCondition/AICon_CanHatchToBattle");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AIAction_HatchToBattle_1 = require("../../Atree/ATreeCommandAction/AIAction_HatchToBattle");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC1_BT6_015 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AICon_PlayerCanWinWithOutPowerCal_1.AICon_PlayerCanWinWithOutPowerCal(AIRoot);
        node3.nParam1 = 0;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 0;
        let node4 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node4.priority = 1005;
        let node5 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node6 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node6.nParam1 = 0;
        node6.sParam1 = "None";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node7.nParam1 = 3;
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
        node8.sParam1 = "hand";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 6;
        node9.sParam1 = "hand";
        node9.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.LV;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node10.nParam1 = 1;
        node10.sParam1 = "hand";
        node10.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node11.priority = 980;
        let node12 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node13 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node13.nParam1 = 0;
        node13.sParam1 = "None";
        node13.eCompare1 = ADefine_1.AiFilterCompare.None;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AICon_PlayerCanWinWithOutPowerCal_1.AICon_PlayerCanWinWithOutPowerCal(AIRoot);
        node14.nParam1 = 0;
        node14.sParam1 = "None";
        node14.eCompare1 = ADefine_1.AiFilterCompare.None;
        node14.eArea1 = ADefine_1.AiFilterArea.None;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node15.priority = 11;
        let node16 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node17 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "None";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node18.nParam1 = 0;
        node18.sParam1 = "xiunv";
        node18.eCompare1 = ADefine_1.AiFilterCompare.None;
        node18.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node18.containerType = ADefine_1.AiFilterContainerType.None;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node19.nParam1 = 10637;
        node19.sParam1 = "xiunv";
        node19.eCompare1 = ADefine_1.AiFilterCompare.None;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.NAME_IS;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node20.nParam1 = 1;
        node20.sParam1 = "xiunv";
        node20.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node21.nParam1 = 0;
        node21.sParam1 = "battle";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node22.nParam1 = 4;
        node22.sParam1 = "battle";
        node22.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node22.eArea1 = ADefine_1.AiFilterArea.None;
        node22.containerType = ADefine_1.AiFilterContainerType.LV;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node23.nParam1 = 1;
        node23.sParam1 = "battle";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "ORICOUNT";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node24.nParam1 = 1;
        node24.sParam1 = "battle";
        node24.eCompare1 = ADefine_1.AiFilterCompare.None;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node25.priority = 960;
        let node26 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node27 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node27.nParam1 = 0;
        node27.sParam1 = "None";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node28.nParam1 = 0;
        node28.sParam1 = "hatch";
        node28.eCompare1 = ADefine_1.AiFilterCompare.None;
        node28.eArea1 = ADefine_1.AiFilterArea.Self_Hatch;
        node28.containerType = ADefine_1.AiFilterContainerType.None;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node29.nParam1 = 4;
        node29.sParam1 = "hatch";
        node29.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.LV;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.Monster;
        node29.nParam2 = 0;
        let node30 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node30.nParam1 = 1;
        node30.sParam1 = "hatch";
        node30.eCompare1 = ADefine_1.AiFilterCompare.None;
        node30.eArea1 = ADefine_1.AiFilterArea.None;
        node30.containerType = ADefine_1.AiFilterContainerType.None;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node31.priority = 850;
        let node32 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node33 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node33.nParam1 = 0;
        node33.sParam1 = "None";
        node33.eCompare1 = ADefine_1.AiFilterCompare.None;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node34.nParam1 = 0;
        node34.sParam1 = "battle1";
        node34.eCompare1 = ADefine_1.AiFilterCompare.None;
        node34.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node35.nParam1 = 4;
        node35.sParam1 = "battle1";
        node35.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node35.eArea1 = ADefine_1.AiFilterArea.None;
        node35.containerType = ADefine_1.AiFilterContainerType.LV;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node36.nParam1 = 1;
        node36.sParam1 = "battle1";
        node36.eCompare1 = ADefine_1.AiFilterCompare.None;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.None;
        node36.sParam2 = "ORICOUNT";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node37.nParam1 = 0;
        node37.sParam1 = "battle1";
        node37.eCompare1 = ADefine_1.AiFilterCompare.None;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node38.priority = 750;
        let node39 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node40 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node40.nParam1 = 0;
        node40.sParam1 = "None";
        node40.eCompare1 = ADefine_1.AiFilterCompare.None;
        node40.eArea1 = ADefine_1.AiFilterArea.None;
        node40.containerType = ADefine_1.AiFilterContainerType.None;
        node40.sParam2 = "None";
        node40.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node40.eCardType = ADefine_1.AiCardType.None;
        node40.nParam2 = 0;
        let node41 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node41.nParam1 = 0;
        node41.sParam1 = "cardevo";
        node41.eCompare1 = ADefine_1.AiFilterCompare.None;
        node41.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node42.nParam1 = 1;
        node42.sParam1 = "cardevo";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.None;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "ORICOUNT";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node43.priority = 9;
        let node44 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node45 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node45.nParam1 = 0;
        node45.sParam1 = "None";
        node45.eCompare1 = ADefine_1.AiFilterCompare.None;
        node45.eArea1 = ADefine_1.AiFilterArea.None;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node46.nParam1 = 6;
        node46.sParam1 = "None";
        node46.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node46.eArea1 = ADefine_1.AiFilterArea.None;
        node46.containerType = ADefine_1.AiFilterContainerType.None;
        node46.sParam2 = "None";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node47.priority = 7;
        let node48 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node49 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node49.nParam1 = 0;
        node49.sParam1 = "None";
        node49.eCompare1 = ADefine_1.AiFilterCompare.None;
        node49.eArea1 = ADefine_1.AiFilterArea.None;
        node49.containerType = ADefine_1.AiFilterContainerType.None;
        node49.sParam2 = "None";
        node49.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node49.eCardType = ADefine_1.AiCardType.None;
        node49.nParam2 = 0;
        let node50 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node50.nParam1 = 5;
        node50.sParam1 = "None";
        node50.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node50.eArea1 = ADefine_1.AiFilterArea.None;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 0;
        let node51 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node51.priority = 6;
        let node52 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node53 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node53.nParam1 = 0;
        node53.sParam1 = "None";
        node53.eCompare1 = ADefine_1.AiFilterCompare.None;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.None;
        node53.sParam2 = "None";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node54.nParam1 = 4;
        node54.sParam1 = "None";
        node54.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node54.eArea1 = ADefine_1.AiFilterArea.None;
        node54.containerType = ADefine_1.AiFilterContainerType.None;
        node54.sParam2 = "None";
        node54.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node54.eCardType = ADefine_1.AiCardType.None;
        node54.nParam2 = 0;
        let node55 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node55.priority = 5;
        let node56 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node57 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node57.nParam1 = 0;
        node57.sParam1 = "None";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.None;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node58.priority = 3;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node5);
        AIRoot.AddChildNode(node12);
        AIRoot.AddChildNode(node16);
        AIRoot.AddChildNode(node26);
        AIRoot.AddChildNode(node32);
        AIRoot.AddChildNode(node39);
        AIRoot.AddChildNode(node44);
        AIRoot.AddChildNode(node48);
        AIRoot.AddChildNode(node52);
        AIRoot.AddChildNode(node56);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node5.AddChildNode(node6);
        node5.AddChildNode(node7);
        node5.AddChildNode(node8);
        node5.AddChildNode(node9);
        node5.AddChildNode(node10);
        node5.AddChildNode(node11);
        node12.AddChildNode(node13);
        node12.AddChildNode(node14);
        node12.AddChildNode(node15);
        node16.AddChildNode(node17);
        node16.AddChildNode(node18);
        node16.AddChildNode(node19);
        node16.AddChildNode(node20);
        node16.AddChildNode(node21);
        node16.AddChildNode(node22);
        node16.AddChildNode(node23);
        node16.AddChildNode(node24);
        node16.AddChildNode(node25);
        node26.AddChildNode(node27);
        node26.AddChildNode(node28);
        node26.AddChildNode(node29);
        node26.AddChildNode(node30);
        node26.AddChildNode(node31);
        node32.AddChildNode(node33);
        node32.AddChildNode(node34);
        node32.AddChildNode(node35);
        node32.AddChildNode(node36);
        node32.AddChildNode(node37);
        node32.AddChildNode(node38);
        node39.AddChildNode(node40);
        node39.AddChildNode(node41);
        node39.AddChildNode(node42);
        node39.AddChildNode(node43);
        node44.AddChildNode(node45);
        node44.AddChildNode(node46);
        node44.AddChildNode(node47);
        node48.AddChildNode(node49);
        node48.AddChildNode(node50);
        node48.AddChildNode(node51);
        node52.AddChildNode(node53);
        node52.AddChildNode(node54);
        node52.AddChildNode(node55);
        node56.AddChildNode(node57);
        node56.AddChildNode(node58);
        return AIRoot;
    }
}
exports.default = AICfg_AC1_BT6_015;
//# sourceMappingURL=AICfg_AC1_BT6_015.js.map