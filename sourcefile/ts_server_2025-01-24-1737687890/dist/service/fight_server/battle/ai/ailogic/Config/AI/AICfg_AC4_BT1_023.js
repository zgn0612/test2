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
const AIAction_Attack_Player_1 = require("../../Atree/ATreeCommandAction/AIAction_Attack_Player");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
const AICon_CanEvo_1 = require("../../Atree/ATreeCondition/AICon_CanEvo");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AIAction_EvoCard_1 = require("../../Atree/ATreeCommandAction/AIAction_EvoCard");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
class AICfg_AC4_BT1_023 extends AIcfgBase_1.AIcfgBase {
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
        node4.priority = 10;
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
        node8.sParam1 = "mech1";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node9.nParam1 = 0;
        node9.sParam1 = "mech1";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 0;
        let node10 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "mech1";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.CARD_NUMBER;
        node10.sParam2 = "BT1-114";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "mech1";
        node11.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AIAction_Attack_Player_1.AIAction_Attack_Player(AIRoot);
        node12.priority = 1050;
        let node13 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node14 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
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
        node15.nParam1 = 7;
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
        node16.sParam1 = "selfbattle";
        node16.eCompare1 = ADefine_1.AiFilterCompare.None;
        node16.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "selfbattle";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.None;
        node17.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node18.nParam1 = 6;
        node18.sParam1 = "selfbattle";
        node18.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.LV;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node19.nParam1 = 1;
        node19.sParam1 = "selfbattle";
        node19.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "oppbattle";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node21.nParam1 = 0;
        node21.sParam1 = "oppbattle";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.BATTLE_STATE;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.Activate;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node22.nParam1 = 1;
        node22.sParam1 = "oppbattle";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.None;
        node22.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node23.nParam1 = 1;
        node23.sParam1 = "oppbattle";
        node23.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node24.priority = 960;
        let node25 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node26 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
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
        node27.sParam1 = "hatch";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.Self_Hatch;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node28.nParam1 = 4;
        node28.sParam1 = "hatch";
        node28.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.LV;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node29.nParam1 = 1;
        node29.sParam1 = "hatch";
        node29.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
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
        node31.priority = 854;
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
        let node34 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node34.nParam1 = 3;
        node34.sParam1 = "None";
        node34.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node34.eArea1 = ADefine_1.AiFilterArea.None;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "None";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node35.nParam1 = 0;
        node35.sParam1 = "4";
        node35.eCompare1 = ADefine_1.AiFilterCompare.None;
        node35.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node35.containerType = ADefine_1.AiFilterContainerType.None;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node36.nParam1 = 1;
        node36.sParam1 = "4";
        node36.eCompare1 = ADefine_1.AiFilterCompare.None;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.None;
        node36.sParam2 = "ORICOUNT";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node37.nParam1 = 1;
        node37.sParam1 = "4";
        node37.eCompare1 = ADefine_1.AiFilterCompare.None;
        node37.eArea1 = ADefine_1.AiFilterArea.None;
        node37.containerType = ADefine_1.AiFilterContainerType.None;
        node37.sParam2 = "None";
        node37.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node37.eCardType = ADefine_1.AiCardType.None;
        node37.nParam2 = 0;
        let node38 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node38.priority = 853;
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
        let node41 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node41.nParam1 = 6;
        node41.sParam1 = "None";
        node41.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node42.nParam1 = 0;
        node42.sParam1 = "66";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node43.nParam1 = 6;
        node43.sParam1 = "66";
        node43.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.LV;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node44.nParam1 = 1;
        node44.sParam1 = "66";
        node44.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.None;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node45.nParam1 = 0;
        node45.sParam1 = "battle";
        node45.eCompare1 = ADefine_1.AiFilterCompare.None;
        node45.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node46.nParam1 = 4;
        node46.sParam1 = "battle";
        node46.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node46.eArea1 = ADefine_1.AiFilterArea.None;
        node46.containerType = ADefine_1.AiFilterContainerType.LV;
        node46.sParam2 = "None";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node47.nParam1 = 1;
        node47.sParam1 = "battle";
        node47.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node47.eArea1 = ADefine_1.AiFilterArea.None;
        node47.containerType = ADefine_1.AiFilterContainerType.None;
        node47.sParam2 = "None";
        node47.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node47.eCardType = ADefine_1.AiCardType.None;
        node47.nParam2 = 0;
        let node48 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node48.nParam1 = 1;
        node48.sParam1 = "battle";
        node48.eCompare1 = ADefine_1.AiFilterCompare.None;
        node48.eArea1 = ADefine_1.AiFilterArea.None;
        node48.containerType = ADefine_1.AiFilterContainerType.None;
        node48.sParam2 = "ORICOUNT";
        node48.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node48.eCardType = ADefine_1.AiCardType.None;
        node48.nParam2 = 0;
        let node49 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node49.nParam1 = 1;
        node49.sParam1 = "battle";
        node49.eCompare1 = ADefine_1.AiFilterCompare.None;
        node49.eArea1 = ADefine_1.AiFilterArea.None;
        node49.containerType = ADefine_1.AiFilterContainerType.None;
        node49.sParam2 = "None";
        node49.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node49.eCardType = ADefine_1.AiCardType.None;
        node49.nParam2 = 0;
        let node50 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node50.priority = 858;
        let node51 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node52 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
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
        node53.nParam1 = 3;
        node53.sParam1 = "None";
        node53.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.None;
        node53.sParam2 = "None";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node54.nParam1 = 0;
        node54.sParam1 = "hatch1";
        node54.eCompare1 = ADefine_1.AiFilterCompare.None;
        node54.eArea1 = ADefine_1.AiFilterArea.Self_Hatch;
        node54.containerType = ADefine_1.AiFilterContainerType.None;
        node54.sParam2 = "None";
        node54.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node54.eCardType = ADefine_1.AiCardType.None;
        node54.nParam2 = 0;
        let node55 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node55.nParam1 = 4;
        node55.sParam1 = "hatch1";
        node55.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node55.eArea1 = ADefine_1.AiFilterArea.None;
        node55.containerType = ADefine_1.AiFilterContainerType.LV;
        node55.sParam2 = "None";
        node55.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node55.eCardType = ADefine_1.AiCardType.None;
        node55.nParam2 = 0;
        let node56 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node56.nParam1 = 1;
        node56.sParam1 = "hatch1";
        node56.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node57.nParam1 = 1;
        node57.sParam1 = "hatch1";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.None;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node58.priority = 354;
        let node59 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node60 = new AICon_CanEvo_1.AICon_CanEvo(AIRoot);
        node60.nParam1 = 0;
        node60.sParam1 = "None";
        node60.eCompare1 = ADefine_1.AiFilterCompare.None;
        node60.eArea1 = ADefine_1.AiFilterArea.None;
        node60.containerType = ADefine_1.AiFilterContainerType.None;
        node60.sParam2 = "None";
        node60.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node60.eCardType = ADefine_1.AiCardType.None;
        node60.nParam2 = 0;
        let node61 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node61.nParam1 = 3;
        node61.sParam1 = "None";
        node61.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node61.eArea1 = ADefine_1.AiFilterArea.None;
        node61.containerType = ADefine_1.AiFilterContainerType.None;
        node61.sParam2 = "None";
        node61.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node61.eCardType = ADefine_1.AiCardType.None;
        node61.nParam2 = 0;
        let node62 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node62.nParam1 = 0;
        node62.sParam1 = "44";
        node62.eCompare1 = ADefine_1.AiFilterCompare.None;
        node62.eArea1 = ADefine_1.AiFilterArea.Card_CanEvos;
        node62.containerType = ADefine_1.AiFilterContainerType.None;
        node62.sParam2 = "None";
        node62.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node62.eCardType = ADefine_1.AiCardType.None;
        node62.nParam2 = 0;
        let node63 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node63.nParam1 = 1;
        node63.sParam1 = "44";
        node63.eCompare1 = ADefine_1.AiFilterCompare.None;
        node63.eArea1 = ADefine_1.AiFilterArea.None;
        node63.containerType = ADefine_1.AiFilterContainerType.None;
        node63.sParam2 = "ORICOUNT";
        node63.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node63.eCardType = ADefine_1.AiCardType.None;
        node63.nParam2 = 0;
        let node64 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node64.nParam1 = 1;
        node64.sParam1 = "44";
        node64.eCompare1 = ADefine_1.AiFilterCompare.None;
        node64.eArea1 = ADefine_1.AiFilterArea.None;
        node64.containerType = ADefine_1.AiFilterContainerType.None;
        node64.sParam2 = "None";
        node64.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node64.eCardType = ADefine_1.AiCardType.None;
        node64.nParam2 = 0;
        let node65 = new AIAction_EvoCard_1.AIAction_EvoCard(AIRoot);
        node65.priority = 353;
        let node66 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node67 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node67.nParam1 = 0;
        node67.sParam1 = "None";
        node67.eCompare1 = ADefine_1.AiFilterCompare.None;
        node67.eArea1 = ADefine_1.AiFilterArea.None;
        node67.containerType = ADefine_1.AiFilterContainerType.None;
        node67.sParam2 = "None";
        node67.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node67.eCardType = ADefine_1.AiCardType.None;
        node67.nParam2 = 0;
        let node68 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node68.nParam1 = 0;
        node68.sParam1 = "defe";
        node68.eCompare1 = ADefine_1.AiFilterCompare.None;
        node68.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node68.containerType = ADefine_1.AiFilterContainerType.None;
        node68.sParam2 = "None";
        node68.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node68.eCardType = ADefine_1.AiCardType.None;
        node68.nParam2 = 0;
        let node69 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node69.nParam1 = 1;
        node69.sParam1 = "defe";
        node69.eCompare1 = ADefine_1.AiFilterCompare.None;
        node69.eArea1 = ADefine_1.AiFilterArea.None;
        node69.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node69.sParam2 = "None";
        node69.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node69.eCardType = ADefine_1.AiCardType.None;
        node69.nParam2 = 0;
        let node70 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node70.nParam1 = 1;
        node70.sParam1 = "defe";
        node70.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node70.eArea1 = ADefine_1.AiFilterArea.None;
        node70.containerType = ADefine_1.AiFilterContainerType.None;
        node70.sParam2 = "None";
        node70.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node70.eCardType = ADefine_1.AiCardType.None;
        node70.nParam2 = 0;
        let node71 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node71.priority = 51;
        let node72 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node73 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node73.nParam1 = 0;
        node73.sParam1 = "None";
        node73.eCompare1 = ADefine_1.AiFilterCompare.None;
        node73.eArea1 = ADefine_1.AiFilterArea.None;
        node73.containerType = ADefine_1.AiFilterContainerType.None;
        node73.sParam2 = "None";
        node73.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node73.eCardType = ADefine_1.AiCardType.None;
        node73.nParam2 = 0;
        let node74 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node74.priority = 3;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node5);
        AIRoot.AddChildNode(node13);
        AIRoot.AddChildNode(node25);
        AIRoot.AddChildNode(node32);
        AIRoot.AddChildNode(node39);
        AIRoot.AddChildNode(node51);
        AIRoot.AddChildNode(node59);
        AIRoot.AddChildNode(node66);
        AIRoot.AddChildNode(node72);
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
        node13.AddChildNode(node20);
        node13.AddChildNode(node21);
        node13.AddChildNode(node22);
        node13.AddChildNode(node23);
        node13.AddChildNode(node24);
        node25.AddChildNode(node26);
        node25.AddChildNode(node27);
        node25.AddChildNode(node28);
        node25.AddChildNode(node29);
        node25.AddChildNode(node30);
        node25.AddChildNode(node31);
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
        node39.AddChildNode(node44);
        node39.AddChildNode(node45);
        node39.AddChildNode(node46);
        node39.AddChildNode(node47);
        node39.AddChildNode(node48);
        node39.AddChildNode(node49);
        node39.AddChildNode(node50);
        node51.AddChildNode(node52);
        node51.AddChildNode(node53);
        node51.AddChildNode(node54);
        node51.AddChildNode(node55);
        node51.AddChildNode(node56);
        node51.AddChildNode(node57);
        node51.AddChildNode(node58);
        node59.AddChildNode(node60);
        node59.AddChildNode(node61);
        node59.AddChildNode(node62);
        node59.AddChildNode(node63);
        node59.AddChildNode(node64);
        node59.AddChildNode(node65);
        node66.AddChildNode(node67);
        node66.AddChildNode(node68);
        node66.AddChildNode(node69);
        node66.AddChildNode(node70);
        node66.AddChildNode(node71);
        node72.AddChildNode(node73);
        node72.AddChildNode(node74);
        return AIRoot;
    }
}
exports.default = AICfg_AC4_BT1_023;
//# sourceMappingURL=AICfg_AC4_BT1_023.js.map