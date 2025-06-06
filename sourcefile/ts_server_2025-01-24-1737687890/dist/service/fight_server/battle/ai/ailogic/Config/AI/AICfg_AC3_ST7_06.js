"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanHatchToBattle_1 = require("../../Atree/ATreeCondition/AICon_CanHatchToBattle");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AIAction_HatchToBattle_1 = require("../../Atree/ATreeCommandAction/AIAction_HatchToBattle");
const AICon_PlayerCanWinWithOutPowerCal_ADDHATCH_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal_ADDHATCH");
const AICon_CanAttack_1 = require("../../Atree/ATreeCondition/AICon_CanAttack");
const AICon_PlayerCanWinWithOutPowerCal_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal");
const AIAction_Attack_Player_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack_Player");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC3_ST7_06 extends AIcfgBase_1.AIcfgBase {
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
        node5.sParam1 = "hand5";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "None";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node6.nParam1 = 5;
        node6.sParam1 = "hand5";
        node6.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.LV;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node7.nParam1 = 1;
        node7.sParam1 = "hand5";
        node7.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node8.nParam1 = 0;
        node8.sParam1 = "hand6";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 6;
        node9.sParam1 = "hand6";
        node9.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.LV;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node10.nParam1 = 1;
        node10.sParam1 = "hand6";
        node10.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node11.priority = 111;
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
        let node14 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node14.nParam1 = 0;
        node14.sParam1 = "battleori";
        node14.eCompare1 = ADefine_1.AiFilterCompare.None;
        node14.eArea1 = ADefine_1.AiFilterArea.Self_Battle_AND_ALL_ORIGINS;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node15.nParam1 = 2;
        node15.sParam1 = "battleori";
        node15.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node15.eArea1 = ADefine_1.AiFilterArea.None;
        node15.containerType = ADefine_1.AiFilterContainerType.LV;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 0;
        let node16 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node16.nParam1 = 1;
        node16.sParam1 = "battleori";
        node16.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node17.priority = 111;
        let node18 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node19 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node19.nParam1 = 0;
        node19.sParam1 = "None";
        node19.eCompare1 = ADefine_1.AiFilterCompare.None;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICon_PlayerCanWinWithOutPowerCal_ADDHATCH_1.AICon_PlayerCanWinWithOutPowerCal_ADDHATCH(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "None";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node21.priority = 11;
        let node22 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node23 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
        node23.nParam1 = 0;
        node23.sParam1 = "None";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICon_PlayerCanWinWithOutPowerCal_1.AICon_PlayerCanWinWithOutPowerCal(AIRoot);
        node24.nParam1 = 0;
        node24.sParam1 = "None";
        node24.eCompare1 = ADefine_1.AiFilterCompare.None;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node25.priority = 1040;
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
        let node28 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node28.nParam1 = 2;
        node28.sParam1 = "None";
        node28.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.None;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node29.nParam1 = 0;
        node29.sParam1 = "evo4";
        node29.eCompare1 = ADefine_1.AiFilterCompare.None;
        node29.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node30.nParam1 = 1;
        node30.sParam1 = "evo4";
        node30.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node30.eArea1 = ADefine_1.AiFilterArea.None;
        node30.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node31.nParam1 = 1;
        node31.sParam1 = "evo4";
        node31.eCompare1 = ADefine_1.AiFilterCompare.None;
        node31.eArea1 = ADefine_1.AiFilterArea.None;
        node31.containerType = ADefine_1.AiFilterContainerType.None;
        node31.sParam2 = "DP|ORICOUNT";
        node31.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node31.eCardType = ADefine_1.AiCardType.None;
        node31.nParam2 = 0;
        let node32 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node32.nParam1 = 1;
        node32.sParam1 = "evo4";
        node32.eCompare1 = ADefine_1.AiFilterCompare.None;
        node32.eArea1 = ADefine_1.AiFilterArea.None;
        node32.containerType = ADefine_1.AiFilterContainerType.None;
        node32.sParam2 = "None";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node33.priority = 843;
        let node34 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node34.nParam1 = 1;
        node34.sParam1 = "evo4";
        node34.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node34.eArea1 = ADefine_1.AiFilterArea.None;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node36 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node36.nParam1 = 0;
        node36.sParam1 = "None";
        node36.eCompare1 = ADefine_1.AiFilterCompare.None;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.None;
        node36.sParam2 = "None";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node37.nParam1 = 6;
        node37.sParam1 = "None";
        node37.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node38.priority = 30;
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
        node41.nParam1 = 5;
        node41.sParam1 = "None";
        node41.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node42.priority = 20;
        let node43 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node44 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node44.nParam1 = 0;
        node44.sParam1 = "None";
        node44.eCompare1 = ADefine_1.AiFilterCompare.None;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.None;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node45.nParam1 = 4;
        node45.sParam1 = "None";
        node45.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node45.eArea1 = ADefine_1.AiFilterArea.None;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node46.priority = 10;
        let node47 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node48 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
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
        node49.nParam1 = 2;
        node49.sParam1 = "None";
        node49.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node49.eArea1 = ADefine_1.AiFilterArea.None;
        node49.containerType = ADefine_1.AiFilterContainerType.None;
        node49.sParam2 = "None";
        node49.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node49.eCardType = ADefine_1.AiCardType.None;
        node49.nParam2 = 0;
        let node50 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node50.nParam1 = 0;
        node50.sParam1 = "evo44";
        node50.eCompare1 = ADefine_1.AiFilterCompare.None;
        node50.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 0;
        let node51 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node51.nParam1 = 1;
        node51.sParam1 = "evo44";
        node51.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node51.eArea1 = ADefine_1.AiFilterArea.None;
        node51.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node51.sParam2 = "None";
        node51.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node51.eCardType = ADefine_1.AiCardType.None;
        node51.nParam2 = 0;
        let node52 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node52.nParam1 = 1;
        node52.sParam1 = "evo44";
        node52.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node52.eArea1 = ADefine_1.AiFilterArea.None;
        node52.containerType = ADefine_1.AiFilterContainerType.None;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node53.nParam1 = 0;
        node53.sParam1 = "evo44";
        node53.eCompare1 = ADefine_1.AiFilterCompare.None;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.None;
        node53.sParam2 = "DP";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node54.nParam1 = 1;
        node54.sParam1 = "evo44";
        node54.eCompare1 = ADefine_1.AiFilterCompare.None;
        node54.eArea1 = ADefine_1.AiFilterArea.None;
        node54.containerType = ADefine_1.AiFilterContainerType.None;
        node54.sParam2 = "None";
        node54.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node54.eCardType = ADefine_1.AiCardType.None;
        node54.nParam2 = 0;
        let node55 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node55.priority = 343;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node12);
        AIRoot.AddChildNode(node18);
        AIRoot.AddChildNode(node22);
        AIRoot.AddChildNode(node26);
        AIRoot.AddChildNode(node47);
        AIRoot.AddChildNode(node35);
        AIRoot.AddChildNode(node39);
        AIRoot.AddChildNode(node43);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node2.AddChildNode(node6);
        node2.AddChildNode(node7);
        node2.AddChildNode(node8);
        node2.AddChildNode(node9);
        node2.AddChildNode(node10);
        node2.AddChildNode(node11);
        node12.AddChildNode(node13);
        node12.AddChildNode(node14);
        node12.AddChildNode(node15);
        node12.AddChildNode(node16);
        node12.AddChildNode(node17);
        node18.AddChildNode(node19);
        node18.AddChildNode(node20);
        node18.AddChildNode(node21);
        node22.AddChildNode(node23);
        node22.AddChildNode(node24);
        node22.AddChildNode(node25);
        node26.AddChildNode(node27);
        node26.AddChildNode(node28);
        node26.AddChildNode(node29);
        node26.AddChildNode(node30);
        node26.AddChildNode(node34);
        node26.AddChildNode(node31);
        node26.AddChildNode(node32);
        node26.AddChildNode(node33);
        node35.AddChildNode(node36);
        node35.AddChildNode(node37);
        node35.AddChildNode(node38);
        node39.AddChildNode(node40);
        node39.AddChildNode(node41);
        node39.AddChildNode(node42);
        node43.AddChildNode(node44);
        node43.AddChildNode(node45);
        node43.AddChildNode(node46);
        node47.AddChildNode(node48);
        node47.AddChildNode(node49);
        node47.AddChildNode(node50);
        node47.AddChildNode(node51);
        node47.AddChildNode(node52);
        node47.AddChildNode(node53);
        node47.AddChildNode(node54);
        node47.AddChildNode(node55);
        return AIRoot;
    }
}
exports.default = AICfg_AC3_ST7_06;
//# sourceMappingURL=AICfg_AC3_ST7_06.js.map