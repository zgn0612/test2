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
class AICfg_AC3_BT1_021 extends AIcfgBase_1.AIcfgBase {
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
        node4.nParam1 = 3;
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
        node5.sParam1 = "hand6";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "None";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node6.nParam1 = 6;
        node6.sParam1 = "hand6";
        node6.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node6.sParam2 = "BT1-025";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node7.nParam1 = 1;
        node7.sParam1 = "hand6";
        node7.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node8.priority = 111;
        let node9 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node10 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "None";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "battleori";
        node11.eCompare1 = ADefine_1.AiFilterCompare.None;
        node11.eArea1 = ADefine_1.AiFilterArea.Self_Battle_AND_ALL_ORIGINS;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node12.nParam1 = 2;
        node12.sParam1 = "battleori";
        node12.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node12.eArea1 = ADefine_1.AiFilterArea.None;
        node12.containerType = ADefine_1.AiFilterContainerType.LV;
        node12.sParam2 = "None";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node13.nParam1 = 1;
        node13.sParam1 = "battleori";
        node13.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node14.priority = 111;
        let node15 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node16 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node16.nParam1 = 0;
        node16.sParam1 = "None";
        node16.eCompare1 = ADefine_1.AiFilterCompare.None;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_PlayerCanWinWithOutPowerCal_ADDHATCH_1.AICon_PlayerCanWinWithOutPowerCal_ADDHATCH(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "None";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node18.priority = 11;
        let node19 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node20 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "None";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_PlayerCanWinWithOutPowerCal_1.AICon_PlayerCanWinWithOutPowerCal(AIRoot);
        node21.nParam1 = 0;
        node21.sParam1 = "None";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node22.priority = 1040;
        let node23 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node24 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
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
        let node26 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node26.nParam1 = 0;
        node26.sParam1 = "evo5";
        node26.eCompare1 = ADefine_1.AiFilterCompare.None;
        node26.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node27.nParam1 = 2;
        node27.sParam1 = "evo5";
        node27.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node28.nParam1 = 1;
        node28.sParam1 = "evo5";
        node28.eCompare1 = ADefine_1.AiFilterCompare.None;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.None;
        node28.sParam2 = "DP|ORICOUNT";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node29.nParam1 = 1;
        node29.sParam1 = "evo5";
        node29.eCompare1 = ADefine_1.AiFilterCompare.None;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node30.priority = 853;
        let node31 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node32 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
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
        node33.nParam1 = 3;
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
        node34.sParam1 = "evo55";
        node34.eCompare1 = ADefine_1.AiFilterCompare.None;
        node34.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node35.nParam1 = 2;
        node35.sParam1 = "evo55";
        node35.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node35.eArea1 = ADefine_1.AiFilterArea.None;
        node35.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node36.nParam1 = 1;
        node36.sParam1 = "evo55";
        node36.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.None;
        node36.sParam2 = "None";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node37.nParam1 = 0;
        node37.sParam1 = "evo55";
        node37.eCompare1 = ADefine_1.AiFilterCompare.None;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "DP";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node38.nParam1 = 1;
        node38.sParam1 = "evo55";
        node38.eCompare1 = ADefine_1.AiFilterCompare.None;
        node38.eArea1 = ADefine_1.AiFilterArea.None;
        node38.containerType = ADefine_1.AiFilterContainerType.None;
        node38.sParam2 = "None";
        node38.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node38.eCardType = ADefine_1.AiCardType.None;
        node38.nParam2 = 0;
        let node39 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node39.priority = 353;
        let node40 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node41 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
        node41.nParam1 = 0;
        node41.sParam1 = "None";
        node41.eCompare1 = ADefine_1.AiFilterCompare.None;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node42.nParam1 = 0;
        node42.sParam1 = "selfbattle";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node43.nParam1 = 0;
        node43.sParam1 = "selfbattle";
        node43.eCompare1 = ADefine_1.AiFilterCompare.None;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node44.nParam1 = 5;
        node44.sParam1 = "selfbattle";
        node44.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.LV;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node45.nParam1 = 2;
        node45.sParam1 = "selfbattle";
        node45.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node45.eArea1 = ADefine_1.AiFilterArea.None;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node46.nParam1 = 0;
        node46.sParam1 = "hand66";
        node46.eCompare1 = ADefine_1.AiFilterCompare.None;
        node46.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node46.containerType = ADefine_1.AiFilterContainerType.None;
        node46.sParam2 = "None";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node47.nParam1 = 0;
        node47.sParam1 = "hand66";
        node47.eCompare1 = ADefine_1.AiFilterCompare.None;
        node47.eArea1 = ADefine_1.AiFilterArea.None;
        node47.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node47.sParam2 = "BT1-025";
        node47.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node47.eCardType = ADefine_1.AiCardType.None;
        node47.nParam2 = 0;
        let node48 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node48.nParam1 = 1;
        node48.sParam1 = "hand66";
        node48.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node48.eArea1 = ADefine_1.AiFilterArea.None;
        node48.containerType = ADefine_1.AiFilterContainerType.None;
        node48.sParam2 = "None";
        node48.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node48.eCardType = ADefine_1.AiCardType.None;
        node48.nParam2 = 0;
        let node49 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node49.priority = 955;
        let node50 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node51 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node51.nParam1 = 0;
        node51.sParam1 = "None";
        node51.eCompare1 = ADefine_1.AiFilterCompare.None;
        node51.eArea1 = ADefine_1.AiFilterArea.None;
        node51.containerType = ADefine_1.AiFilterContainerType.None;
        node51.sParam2 = "None";
        node51.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node51.eCardType = ADefine_1.AiCardType.None;
        node51.nParam2 = 0;
        let node52 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node52.nParam1 = 6;
        node52.sParam1 = "None";
        node52.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node52.eArea1 = ADefine_1.AiFilterArea.None;
        node52.containerType = ADefine_1.AiFilterContainerType.None;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node53.priority = 30;
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
        node56.nParam1 = 5;
        node56.sParam1 = "None";
        node56.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node57.priority = 20;
        let node58 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node59 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node59.nParam1 = 0;
        node59.sParam1 = "None";
        node59.eCompare1 = ADefine_1.AiFilterCompare.None;
        node59.eArea1 = ADefine_1.AiFilterArea.None;
        node59.containerType = ADefine_1.AiFilterContainerType.None;
        node59.sParam2 = "None";
        node59.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node59.eCardType = ADefine_1.AiCardType.None;
        node59.nParam2 = 0;
        let node60 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node60.nParam1 = 4;
        node60.sParam1 = "None";
        node60.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node60.eArea1 = ADefine_1.AiFilterArea.None;
        node60.containerType = ADefine_1.AiFilterContainerType.None;
        node60.sParam2 = "None";
        node60.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node60.eCardType = ADefine_1.AiCardType.None;
        node60.nParam2 = 0;
        let node61 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node61.priority = 10;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node9);
        AIRoot.AddChildNode(node15);
        AIRoot.AddChildNode(node19);
        AIRoot.AddChildNode(node23);
        AIRoot.AddChildNode(node31);
        AIRoot.AddChildNode(node40);
        AIRoot.AddChildNode(node50);
        AIRoot.AddChildNode(node54);
        AIRoot.AddChildNode(node58);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node2.AddChildNode(node6);
        node2.AddChildNode(node7);
        node2.AddChildNode(node8);
        node9.AddChildNode(node10);
        node9.AddChildNode(node11);
        node9.AddChildNode(node12);
        node9.AddChildNode(node13);
        node9.AddChildNode(node14);
        node15.AddChildNode(node16);
        node15.AddChildNode(node17);
        node15.AddChildNode(node18);
        node19.AddChildNode(node20);
        node19.AddChildNode(node21);
        node19.AddChildNode(node22);
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
        node31.AddChildNode(node39);
        node40.AddChildNode(node41);
        node40.AddChildNode(node42);
        node40.AddChildNode(node43);
        node40.AddChildNode(node44);
        node40.AddChildNode(node45);
        node40.AddChildNode(node46);
        node40.AddChildNode(node47);
        node40.AddChildNode(node48);
        node40.AddChildNode(node49);
        node50.AddChildNode(node51);
        node50.AddChildNode(node52);
        node50.AddChildNode(node53);
        node54.AddChildNode(node55);
        node54.AddChildNode(node56);
        node54.AddChildNode(node57);
        node58.AddChildNode(node59);
        node58.AddChildNode(node60);
        node58.AddChildNode(node61);
        return AIRoot;
    }
}
exports.default = AICfg_AC3_BT1_021;
//# sourceMappingURL=AICfg_AC3_BT1_021.js.map