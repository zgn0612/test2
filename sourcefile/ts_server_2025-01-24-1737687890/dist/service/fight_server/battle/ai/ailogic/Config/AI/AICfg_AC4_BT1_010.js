"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AICon_CanHatchToBattle_1 = require("../../Atree/ATreeCondition/AICon_CanHatchToBattle");
const AIAction_HatchToBattle_1 = require("../../Atree/ATreeCommandAction/AIAction_HatchToBattle");
const AICon_PlayerCanWinWithOutPowerCal_ADDHATCH_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal_ADDHATCH");
const AICon_CanAttack_1 = require("../../Atree/ATreeCondition/AICon_CanAttack");
const AICon_PlayerCanWinWithOutPowerCal_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanWinWithOutPowerCal");
const AIAction_Attack_Player_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack_Player");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
const AICon_CheckOpponentDefenseCount_1 = require("../../Atree/ATreeCondition/AICon_CheckOpponentDefenseCount");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_Container_LackCheck_1 = require("../../Atree/ATreeCondition/AICon_Container_LackCheck");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
class AICfg_AC4_BT1_010 extends AIcfgBase_1.AIcfgBase {
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
        let node7 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node7.priority = 5;
        let node8 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node9 = new AICon_CanHatchToBattle_1.AICon_CanHatchToBattle(AIRoot);
        node9.nParam1 = 0;
        node9.sParam1 = "None";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.None;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_PlayerCanWinWithOutPowerCal_ADDHATCH_1.AICon_PlayerCanWinWithOutPowerCal_ADDHATCH(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "None";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AIAction_HatchToBattle_1.AIAction_HatchToBattle(AIRoot);
        node11.priority = 10;
        let node12 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node13 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
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
        node14.nParam1 = 1;
        node14.sParam1 = "None";
        node14.eCompare1 = ADefine_1.AiFilterCompare.None;
        node14.eArea1 = ADefine_1.AiFilterArea.None;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node15.priority = 1030;
        let node16 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node16.nParam1 = 0;
        node16.sParam1 = "mech1";
        node16.eCompare1 = ADefine_1.AiFilterCompare.None;
        node16.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "mech1";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node18.nParam1 = 0;
        node18.sParam1 = "mech1";
        node18.eCompare1 = ADefine_1.AiFilterCompare.None;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node18.sParam2 = "BT1-114";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node19.nParam1 = 0;
        node19.sParam1 = "mech1";
        node19.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node21 = new AICon_CanAttack_1.AICon_CanAttack(AIRoot);
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
        node22.sParam1 = "ori";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.Card_Origins;
        node22.containerType = ADefine_1.AiFilterContainerType.None;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node23.nParam1 = 0;
        node23.sParam1 = "ori";
        node23.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICon_CheckOpponentDefenseCount_1.AICon_CheckOpponentDefenseCount(AIRoot);
        node24.nParam1 = 3;
        node24.sParam1 = "None";
        node24.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node24.eArea1 = ADefine_1.AiFilterArea.None;
        node24.containerType = ADefine_1.AiFilterContainerType.None;
        node24.sParam2 = "None";
        node24.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node24.eCardType = ADefine_1.AiCardType.None;
        node24.nParam2 = 0;
        let node25 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node25.priority = 500;
        let node26 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node26.nParam1 = 0;
        node26.sParam1 = "def";
        node26.eCompare1 = ADefine_1.AiFilterCompare.None;
        node26.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node27.nParam1 = 0;
        node27.sParam1 = "def";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node28.nParam1 = 1;
        node28.sParam1 = "def";
        node28.eCompare1 = ADefine_1.AiFilterCompare.None;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node29.nParam1 = 0;
        node29.sParam1 = "def";
        node29.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node31 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node31.nParam1 = 0;
        node31.sParam1 = "None";
        node31.eCompare1 = ADefine_1.AiFilterCompare.None;
        node31.eArea1 = ADefine_1.AiFilterArea.None;
        node31.containerType = ADefine_1.AiFilterContainerType.None;
        node31.sParam2 = "None";
        node31.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node31.eCardType = ADefine_1.AiCardType.None;
        node31.nParam2 = 0;
        let node32 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node32.nParam1 = 0;
        node32.sParam1 = "canevo";
        node32.eCompare1 = ADefine_1.AiFilterCompare.None;
        node32.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node32.containerType = ADefine_1.AiFilterContainerType.None;
        node32.sParam2 = "None";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node33.nParam1 = 1;
        node33.sParam1 = "canevo";
        node33.eCompare1 = ADefine_1.AiFilterCompare.None;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node34.priority = 832;
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
        node37.nParam1 = 3;
        node37.sParam1 = "None";
        node37.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node38.nParam1 = 0;
        node38.sParam1 = "lock3";
        node38.eCompare1 = ADefine_1.AiFilterCompare.None;
        node38.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node38.containerType = ADefine_1.AiFilterContainerType.None;
        node38.sParam2 = "None";
        node38.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node38.eCardType = ADefine_1.AiCardType.None;
        node38.nParam2 = 0;
        let node39 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node39.nParam1 = 0;
        node39.sParam1 = "lock3";
        node39.eCompare1 = ADefine_1.AiFilterCompare.None;
        node39.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node39.containerType = ADefine_1.AiFilterContainerType.None;
        node39.sParam2 = "None";
        node39.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node39.eCardType = ADefine_1.AiCardType.None;
        node39.nParam2 = 0;
        let node40 = new AICon_Container_LackCheck_1.AICon_Container_LackCheck(AIRoot);
        node40.nParam1 = 0;
        node40.sParam1 = "lock3";
        node40.eCompare1 = ADefine_1.AiFilterCompare.None;
        node40.eArea1 = ADefine_1.AiFilterArea.None;
        node40.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node40.sParam2 = "BT1-085";
        node40.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node40.eCardType = ADefine_1.AiCardType.None;
        node40.nParam2 = 0;
        let node41 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node41.priority = 700;
        let node42 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node43 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node43.nParam1 = 0;
        node43.sParam1 = "None";
        node43.eCompare1 = ADefine_1.AiFilterCompare.None;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.None;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node44.nParam1 = 3;
        node44.sParam1 = "None";
        node44.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.None;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node45.nParam1 = 0;
        node45.sParam1 = "3";
        node45.eCompare1 = ADefine_1.AiFilterCompare.None;
        node45.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node46.nParam1 = 3;
        node46.sParam1 = "3";
        node46.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node46.eArea1 = ADefine_1.AiFilterArea.None;
        node46.containerType = ADefine_1.AiFilterContainerType.LV;
        node46.sParam2 = "None";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node47.nParam1 = 2;
        node47.sParam1 = "3";
        node47.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node47.eArea1 = ADefine_1.AiFilterArea.None;
        node47.containerType = ADefine_1.AiFilterContainerType.None;
        node47.sParam2 = "None";
        node47.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node47.eCardType = ADefine_1.AiCardType.None;
        node47.nParam2 = 0;
        let node48 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node48.priority = 660;
        let node49 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node50 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node50.nParam1 = 0;
        node50.sParam1 = "None";
        node50.eCompare1 = ADefine_1.AiFilterCompare.None;
        node50.eArea1 = ADefine_1.AiFilterArea.None;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 0;
        let node51 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node51.nParam1 = 0;
        node51.sParam1 = "lock33";
        node51.eCompare1 = ADefine_1.AiFilterCompare.None;
        node51.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node51.containerType = ADefine_1.AiFilterContainerType.None;
        node51.sParam2 = "None";
        node51.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node51.eCardType = ADefine_1.AiCardType.None;
        node51.nParam2 = 0;
        let node52 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node52.nParam1 = 0;
        node52.sParam1 = "lock33";
        node52.eCompare1 = ADefine_1.AiFilterCompare.None;
        node52.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node52.containerType = ADefine_1.AiFilterContainerType.None;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AICon_Container_LackCheck_1.AICon_Container_LackCheck(AIRoot);
        node53.nParam1 = 0;
        node53.sParam1 = "lock33";
        node53.eCompare1 = ADefine_1.AiFilterCompare.None;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node53.sParam2 = "BT1-085";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node54.priority = 200;
        let node55 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node56 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node56.nParam1 = 0;
        node56.sParam1 = "None";
        node56.eCompare1 = ADefine_1.AiFilterCompare.None;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node57.nParam1 = 0;
        node57.sParam1 = "33";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node58.nParam1 = 3;
        node58.sParam1 = "33";
        node58.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node58.eArea1 = ADefine_1.AiFilterArea.None;
        node58.containerType = ADefine_1.AiFilterContainerType.LV;
        node58.sParam2 = "None";
        node58.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node58.eCardType = ADefine_1.AiCardType.None;
        node58.nParam2 = 0;
        let node59 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node59.nParam1 = 2;
        node59.sParam1 = "33";
        node59.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node59.eArea1 = ADefine_1.AiFilterArea.None;
        node59.containerType = ADefine_1.AiFilterContainerType.None;
        node59.sParam2 = "None";
        node59.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node59.eCardType = ADefine_1.AiCardType.None;
        node59.nParam2 = 0;
        let node60 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node60.priority = 160;
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
        let node63 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node63.priority = 60;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node5);
        AIRoot.AddChildNode(node8);
        AIRoot.AddChildNode(node12);
        AIRoot.AddChildNode(node20);
        AIRoot.AddChildNode(node30);
        AIRoot.AddChildNode(node35);
        AIRoot.AddChildNode(node42);
        AIRoot.AddChildNode(node49);
        AIRoot.AddChildNode(node55);
        AIRoot.AddChildNode(node61);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node5.AddChildNode(node6);
        node5.AddChildNode(node7);
        node8.AddChildNode(node9);
        node8.AddChildNode(node10);
        node8.AddChildNode(node11);
        node12.AddChildNode(node13);
        node12.AddChildNode(node14);
        node12.AddChildNode(node16);
        node12.AddChildNode(node17);
        node12.AddChildNode(node18);
        node12.AddChildNode(node19);
        node12.AddChildNode(node15);
        node20.AddChildNode(node21);
        node20.AddChildNode(node22);
        node20.AddChildNode(node23);
        node20.AddChildNode(node24);
        node20.AddChildNode(node26);
        node20.AddChildNode(node27);
        node20.AddChildNode(node28);
        node20.AddChildNode(node29);
        node20.AddChildNode(node25);
        node30.AddChildNode(node31);
        node30.AddChildNode(node32);
        node30.AddChildNode(node33);
        node30.AddChildNode(node34);
        node35.AddChildNode(node36);
        node35.AddChildNode(node37);
        node35.AddChildNode(node38);
        node35.AddChildNode(node39);
        node35.AddChildNode(node40);
        node35.AddChildNode(node41);
        node42.AddChildNode(node43);
        node42.AddChildNode(node44);
        node42.AddChildNode(node45);
        node42.AddChildNode(node46);
        node42.AddChildNode(node47);
        node42.AddChildNode(node48);
        node49.AddChildNode(node50);
        node49.AddChildNode(node51);
        node49.AddChildNode(node52);
        node49.AddChildNode(node53);
        node49.AddChildNode(node54);
        node55.AddChildNode(node56);
        node55.AddChildNode(node57);
        node55.AddChildNode(node58);
        node55.AddChildNode(node59);
        node55.AddChildNode(node60);
        node61.AddChildNode(node62);
        node61.AddChildNode(node63);
        return AIRoot;
    }
}
exports.default = AICfg_AC4_BT1_010;
//# sourceMappingURL=AICfg_AC4_BT1_010.js.map