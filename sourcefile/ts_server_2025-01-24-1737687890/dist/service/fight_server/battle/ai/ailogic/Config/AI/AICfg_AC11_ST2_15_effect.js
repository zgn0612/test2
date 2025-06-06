"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIEffect_ISChooseCard_1 = require("../../Atree/ATreeCondition/AIEffect_ISChooseCard");
const AIEffect_ConvertToContainer_1 = require("../../Atree/ATreeCondition/AIEffect_ConvertToContainer");
const AICon_Container_Filter_1 = require("../../Atree/ATreeCondition/AICon_Container_Filter");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AIEffect_ContainerToEffect_1 = require("../../Atree/ATreeCondition/AIEffect_ContainerToEffect");
const AICon_SetTarget_1 = require("../../Atree/ATreeCondition/AICon_SetTarget");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
class AICfg_AC11_ST2_15_effect extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node3.nParam1 = 10201511;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 1;
        let node4 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "select-selfmonster";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node5.nParam1 = 1;
        node5.sParam1 = "select-selfmonster";
        node5.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node5.eArea1 = ADefine_1.AiFilterArea.None;
        node5.containerType = ADefine_1.AiFilterContainerType.ORGIN_COUNT;
        node5.sParam2 = "None";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node6.nParam1 = 1;
        node6.sParam1 = "select-selfmonster";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "ORICOUNT|LV|DP";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node7.nParam1 = 0;
        node7.sParam1 = "select-selfmonster";
        node7.eCompare1 = ADefine_1.AiFilterCompare.None;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node8.nParam1 = 1;
        node8.sParam1 = "select-selfmonster";
        node8.eCompare1 = ADefine_1.AiFilterCompare.None;
        node8.eArea1 = ADefine_1.AiFilterArea.None;
        node8.containerType = ADefine_1.AiFilterContainerType.None;
        node8.sParam2 = "None";
        node8.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node8.eCardType = ADefine_1.AiCardType.None;
        node8.nParam2 = 0;
        let node9 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node10 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node10.nParam1 = 10201511;
        node10.sParam1 = "None";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 2;
        let node11 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node11.nParam1 = 0;
        node11.sParam1 = "hand-LV4-check";
        node11.eCompare1 = ADefine_1.AiFilterCompare.None;
        node11.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node11.containerType = ADefine_1.AiFilterContainerType.None;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node12.nParam1 = 4;
        node12.sParam1 = "hand-LV4-check";
        node12.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node12.eArea1 = ADefine_1.AiFilterArea.None;
        node12.containerType = ADefine_1.AiFilterContainerType.LV;
        node12.sParam2 = "None";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node13.nParam1 = 1;
        node13.sParam1 = "hand-LV4-check";
        node13.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node14.nParam1 = 0;
        node14.sParam1 = "hand-LV3-check";
        node14.eCompare1 = ADefine_1.AiFilterCompare.None;
        node14.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node14.containerType = ADefine_1.AiFilterContainerType.None;
        node14.sParam2 = "None";
        node14.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node14.eCardType = ADefine_1.AiCardType.None;
        node14.nParam2 = 0;
        let node15 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node15.nParam1 = 3;
        node15.sParam1 = "hand-LV3-check";
        node15.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node15.eArea1 = ADefine_1.AiFilterArea.None;
        node15.containerType = ADefine_1.AiFilterContainerType.LV;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 0;
        let node16 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node16.nParam1 = 0;
        node16.sParam1 = "hand-LV3-check";
        node16.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "hand-LV3-field-check";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node18.nParam1 = 3;
        node18.sParam1 = "hand-LV3-field-check";
        node18.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.LV;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node19.nParam1 = 0;
        node19.sParam1 = "hand-LV3-field-check";
        node19.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "effect1";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node21.nParam1 = 1;
        node21.sParam1 = "effect1";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.None;
        node21.sParam2 = "ST2-03|ST2-04|ST2-02|ST2-07";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node22.nParam1 = 0;
        node22.sParam1 = "effect1";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.None;
        node22.containerType = ADefine_1.AiFilterContainerType.None;
        node22.sParam2 = "None";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node23.nParam1 = 1;
        node23.sParam1 = "effect1";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node25 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node25.nParam1 = 10201511;
        node25.sParam1 = "None";
        node25.eCompare1 = ADefine_1.AiFilterCompare.None;
        node25.eArea1 = ADefine_1.AiFilterArea.None;
        node25.containerType = ADefine_1.AiFilterContainerType.None;
        node25.sParam2 = "None";
        node25.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node25.eCardType = ADefine_1.AiCardType.None;
        node25.nParam2 = 2;
        let node26 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node26.nParam1 = 0;
        node26.sParam1 = "self-ba-Lv5";
        node26.eCompare1 = ADefine_1.AiFilterCompare.None;
        node26.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node27.nParam1 = 5;
        node27.sParam1 = "self-ba-Lv5";
        node27.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node27.eArea1 = ADefine_1.AiFilterArea.None;
        node27.containerType = ADefine_1.AiFilterContainerType.LV;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node28.nParam1 = 0;
        node28.sParam1 = "self-ba-Lv5";
        node28.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.None;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node29.nParam1 = 0;
        node29.sParam1 = "self-hand-Lv6";
        node29.eCompare1 = ADefine_1.AiFilterCompare.None;
        node29.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node30.nParam1 = 6;
        node30.sParam1 = "self-hand-Lv6";
        node30.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node30.eArea1 = ADefine_1.AiFilterArea.None;
        node30.containerType = ADefine_1.AiFilterContainerType.LV;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node31.nParam1 = 1;
        node31.sParam1 = "self-hand-Lv6";
        node31.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node31.eArea1 = ADefine_1.AiFilterArea.None;
        node31.containerType = ADefine_1.AiFilterContainerType.None;
        node31.sParam2 = "None";
        node31.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node31.eCardType = ADefine_1.AiCardType.None;
        node31.nParam2 = 0;
        let node32 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node32.nParam1 = 0;
        node32.sParam1 = "effect2";
        node32.eCompare1 = ADefine_1.AiFilterCompare.None;
        node32.eArea1 = ADefine_1.AiFilterArea.None;
        node32.containerType = ADefine_1.AiFilterContainerType.None;
        node32.sParam2 = "None";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node33.nParam1 = 5;
        node33.sParam1 = "effect2";
        node33.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.LV;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        let node34 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node34.nParam1 = 1;
        node34.sParam1 = "effect2";
        node34.eCompare1 = ADefine_1.AiFilterCompare.None;
        node34.eArea1 = ADefine_1.AiFilterArea.None;
        node34.containerType = ADefine_1.AiFilterContainerType.None;
        node34.sParam2 = "ST2-08|ST2-09";
        node34.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node34.eCardType = ADefine_1.AiCardType.None;
        node34.nParam2 = 0;
        let node35 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node35.nParam1 = 0;
        node35.sParam1 = "effect2";
        node35.eCompare1 = ADefine_1.AiFilterCompare.None;
        node35.eArea1 = ADefine_1.AiFilterArea.None;
        node35.containerType = ADefine_1.AiFilterContainerType.None;
        node35.sParam2 = "None";
        node35.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node35.eCardType = ADefine_1.AiCardType.None;
        node35.nParam2 = 0;
        let node36 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node36.nParam1 = 1;
        node36.sParam1 = "effect2";
        node36.eCompare1 = ADefine_1.AiFilterCompare.None;
        node36.eArea1 = ADefine_1.AiFilterArea.None;
        node36.containerType = ADefine_1.AiFilterContainerType.None;
        node36.sParam2 = "None";
        node36.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node36.eCardType = ADefine_1.AiCardType.None;
        node36.nParam2 = 0;
        let node37 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node38 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node38.nParam1 = 10201511;
        node38.sParam1 = "None";
        node38.eCompare1 = ADefine_1.AiFilterCompare.None;
        node38.eArea1 = ADefine_1.AiFilterArea.None;
        node38.containerType = ADefine_1.AiFilterContainerType.None;
        node38.sParam2 = "None";
        node38.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node38.eCardType = ADefine_1.AiCardType.None;
        node38.nParam2 = 2;
        let node39 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node39.nParam1 = 0;
        node39.sParam1 = "self-ba1-Lv3";
        node39.eCompare1 = ADefine_1.AiFilterCompare.None;
        node39.eArea1 = ADefine_1.AiFilterArea.self_battle_hatch;
        node39.containerType = ADefine_1.AiFilterContainerType.None;
        node39.sParam2 = "None";
        node39.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node39.eCardType = ADefine_1.AiCardType.None;
        node39.nParam2 = 0;
        let node40 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node40.nParam1 = 3;
        node40.sParam1 = "self-ba1-Lv3";
        node40.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node40.eArea1 = ADefine_1.AiFilterArea.None;
        node40.containerType = ADefine_1.AiFilterContainerType.LV;
        node40.sParam2 = "None";
        node40.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node40.eCardType = ADefine_1.AiCardType.None;
        node40.nParam2 = 0;
        let node41 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node41.nParam1 = 0;
        node41.sParam1 = "self-ba1-Lv3";
        node41.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node41.eArea1 = ADefine_1.AiFilterArea.None;
        node41.containerType = ADefine_1.AiFilterContainerType.None;
        node41.sParam2 = "None";
        node41.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node41.eCardType = ADefine_1.AiCardType.None;
        node41.nParam2 = 0;
        let node42 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node42.nParam1 = 0;
        node42.sParam1 = "self-hand-Lv4";
        node42.eCompare1 = ADefine_1.AiFilterCompare.None;
        node42.eArea1 = ADefine_1.AiFilterArea.Self_Hand;
        node42.containerType = ADefine_1.AiFilterContainerType.None;
        node42.sParam2 = "None";
        node42.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node42.eCardType = ADefine_1.AiCardType.None;
        node42.nParam2 = 0;
        let node43 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node43.nParam1 = 4;
        node43.sParam1 = "self-hand-Lv4";
        node43.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node43.eArea1 = ADefine_1.AiFilterArea.None;
        node43.containerType = ADefine_1.AiFilterContainerType.LV;
        node43.sParam2 = "None";
        node43.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node43.eCardType = ADefine_1.AiCardType.None;
        node43.nParam2 = 0;
        let node44 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node44.nParam1 = 1;
        node44.sParam1 = "self-hand-Lv4";
        node44.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node44.eArea1 = ADefine_1.AiFilterArea.None;
        node44.containerType = ADefine_1.AiFilterContainerType.None;
        node44.sParam2 = "None";
        node44.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node44.eCardType = ADefine_1.AiCardType.None;
        node44.nParam2 = 0;
        let node45 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node45.nParam1 = 0;
        node45.sParam1 = "effect2-1";
        node45.eCompare1 = ADefine_1.AiFilterCompare.None;
        node45.eArea1 = ADefine_1.AiFilterArea.None;
        node45.containerType = ADefine_1.AiFilterContainerType.None;
        node45.sParam2 = "None";
        node45.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node45.eCardType = ADefine_1.AiCardType.None;
        node45.nParam2 = 0;
        let node46 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node46.nParam1 = 1;
        node46.sParam1 = "effect2-1";
        node46.eCompare1 = ADefine_1.AiFilterCompare.None;
        node46.eArea1 = ADefine_1.AiFilterArea.None;
        node46.containerType = ADefine_1.AiFilterContainerType.None;
        node46.sParam2 = "ST2-03|ST2-02|ST2-04";
        node46.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node46.eCardType = ADefine_1.AiCardType.None;
        node46.nParam2 = 0;
        let node47 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node47.nParam1 = 0;
        node47.sParam1 = "effect2-1";
        node47.eCompare1 = ADefine_1.AiFilterCompare.None;
        node47.eArea1 = ADefine_1.AiFilterArea.None;
        node47.containerType = ADefine_1.AiFilterContainerType.None;
        node47.sParam2 = "None";
        node47.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node47.eCardType = ADefine_1.AiCardType.None;
        node47.nParam2 = 0;
        let node48 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node48.nParam1 = 1;
        node48.sParam1 = "effect2-1";
        node48.eCompare1 = ADefine_1.AiFilterCompare.None;
        node48.eArea1 = ADefine_1.AiFilterArea.None;
        node48.containerType = ADefine_1.AiFilterContainerType.None;
        node48.sParam2 = "None";
        node48.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node48.eCardType = ADefine_1.AiCardType.None;
        node48.nParam2 = 0;
        let node49 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node50 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node50.nParam1 = 10201511;
        node50.sParam1 = "None";
        node50.eCompare1 = ADefine_1.AiFilterCompare.None;
        node50.eArea1 = ADefine_1.AiFilterArea.None;
        node50.containerType = ADefine_1.AiFilterContainerType.None;
        node50.sParam2 = "None";
        node50.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node50.eCardType = ADefine_1.AiCardType.None;
        node50.nParam2 = 2;
        let node51 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node51.nParam1 = 0;
        node51.sParam1 = "self-ba-Lv4";
        node51.eCompare1 = ADefine_1.AiFilterCompare.None;
        node51.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node51.containerType = ADefine_1.AiFilterContainerType.None;
        node51.sParam2 = "None";
        node51.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node51.eCardType = ADefine_1.AiCardType.None;
        node51.nParam2 = 0;
        let node52 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node52.nParam1 = 4;
        node52.sParam1 = "self-ba-Lv4";
        node52.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node52.eArea1 = ADefine_1.AiFilterArea.None;
        node52.containerType = ADefine_1.AiFilterContainerType.LV;
        node52.sParam2 = "None";
        node52.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node52.eCardType = ADefine_1.AiCardType.None;
        node52.nParam2 = 0;
        let node53 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node53.nParam1 = 0;
        node53.sParam1 = "self-ba-Lv4";
        node53.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node53.eArea1 = ADefine_1.AiFilterArea.None;
        node53.containerType = ADefine_1.AiFilterContainerType.None;
        node53.sParam2 = "None";
        node53.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node53.eCardType = ADefine_1.AiCardType.None;
        node53.nParam2 = 0;
        let node54 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node54.nParam1 = 0;
        node54.sParam1 = "self-hand-Lv5";
        node54.eCompare1 = ADefine_1.AiFilterCompare.None;
        node54.eArea1 = ADefine_1.AiFilterArea.Self_Battle;
        node54.containerType = ADefine_1.AiFilterContainerType.None;
        node54.sParam2 = "None";
        node54.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node54.eCardType = ADefine_1.AiCardType.None;
        node54.nParam2 = 0;
        let node55 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node55.nParam1 = 5;
        node55.sParam1 = "self-hand-Lv5";
        node55.eCompare1 = ADefine_1.AiFilterCompare.EQUAL;
        node55.eArea1 = ADefine_1.AiFilterArea.None;
        node55.containerType = ADefine_1.AiFilterContainerType.LV;
        node55.sParam2 = "None";
        node55.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node55.eCardType = ADefine_1.AiCardType.None;
        node55.nParam2 = 0;
        let node56 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node56.nParam1 = 1;
        node56.sParam1 = "self-hand-Lv5";
        node56.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node56.eArea1 = ADefine_1.AiFilterArea.None;
        node56.containerType = ADefine_1.AiFilterContainerType.None;
        node56.sParam2 = "None";
        node56.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node56.eCardType = ADefine_1.AiCardType.None;
        node56.nParam2 = 0;
        let node57 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node57.nParam1 = 0;
        node57.sParam1 = "effect2-2";
        node57.eCompare1 = ADefine_1.AiFilterCompare.None;
        node57.eArea1 = ADefine_1.AiFilterArea.None;
        node57.containerType = ADefine_1.AiFilterContainerType.None;
        node57.sParam2 = "None";
        node57.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node57.eCardType = ADefine_1.AiCardType.None;
        node57.nParam2 = 0;
        let node58 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node58.nParam1 = 1;
        node58.sParam1 = "effect2-2";
        node58.eCompare1 = ADefine_1.AiFilterCompare.None;
        node58.eArea1 = ADefine_1.AiFilterArea.None;
        node58.containerType = ADefine_1.AiFilterContainerType.None;
        node58.sParam2 = "ST2-06|ST2-07|ST2_05";
        node58.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node58.eCardType = ADefine_1.AiCardType.None;
        node58.nParam2 = 0;
        let node59 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node59.nParam1 = 0;
        node59.sParam1 = "effect2-2";
        node59.eCompare1 = ADefine_1.AiFilterCompare.None;
        node59.eArea1 = ADefine_1.AiFilterArea.None;
        node59.containerType = ADefine_1.AiFilterContainerType.None;
        node59.sParam2 = "None";
        node59.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node59.eCardType = ADefine_1.AiCardType.None;
        node59.nParam2 = 0;
        let node60 = new AICon_SetTarget_1.AICon_SetTarget(AIRoot);
        node60.nParam1 = 1;
        node60.sParam1 = "effect2-2";
        node60.eCompare1 = ADefine_1.AiFilterCompare.None;
        node60.eArea1 = ADefine_1.AiFilterArea.None;
        node60.containerType = ADefine_1.AiFilterContainerType.None;
        node60.sParam2 = "None";
        node60.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node60.eCardType = ADefine_1.AiCardType.None;
        node60.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node9);
        AIRoot.AddChildNode(node24);
        AIRoot.AddChildNode(node37);
        AIRoot.AddChildNode(node49);
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
        node9.AddChildNode(node15);
        node9.AddChildNode(node16);
        node9.AddChildNode(node17);
        node9.AddChildNode(node18);
        node9.AddChildNode(node19);
        node9.AddChildNode(node20);
        node9.AddChildNode(node21);
        node9.AddChildNode(node22);
        node9.AddChildNode(node23);
        node24.AddChildNode(node25);
        node24.AddChildNode(node26);
        node24.AddChildNode(node27);
        node24.AddChildNode(node28);
        node24.AddChildNode(node29);
        node24.AddChildNode(node30);
        node24.AddChildNode(node31);
        node24.AddChildNode(node32);
        node24.AddChildNode(node33);
        node24.AddChildNode(node34);
        node24.AddChildNode(node35);
        node24.AddChildNode(node36);
        node37.AddChildNode(node38);
        node37.AddChildNode(node39);
        node37.AddChildNode(node40);
        node37.AddChildNode(node41);
        node37.AddChildNode(node42);
        node37.AddChildNode(node43);
        node37.AddChildNode(node44);
        node37.AddChildNode(node45);
        node37.AddChildNode(node46);
        node37.AddChildNode(node47);
        node37.AddChildNode(node48);
        node49.AddChildNode(node50);
        node49.AddChildNode(node51);
        node49.AddChildNode(node52);
        node49.AddChildNode(node53);
        node49.AddChildNode(node54);
        node49.AddChildNode(node55);
        node49.AddChildNode(node56);
        node49.AddChildNode(node57);
        node49.AddChildNode(node58);
        node49.AddChildNode(node59);
        node49.AddChildNode(node60);
        return AIRoot;
    }
}
exports.default = AICfg_AC11_ST2_15_effect;
//# sourceMappingURL=AICfg_AC11_ST2_15_effect.js.map