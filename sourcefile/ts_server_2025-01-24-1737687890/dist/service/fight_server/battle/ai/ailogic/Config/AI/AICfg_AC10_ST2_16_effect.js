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
const AICon_CheckPlayerCost_1 = require("../../Atree/ATreeCondition/AICon_CheckPlayerCost");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AICon_Container_Count_1 = require("../../Atree/ATreeCondition/AICon_Container_Count");
class AICfg_AC10_ST2_16_effect extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node3.nParam1 = 10201612;
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
        node4.sParam1 = "effect1";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node5.nParam1 = 5;
        node5.sParam1 = "effect1";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.None;
        node5.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node5.sParam2 = "None";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node6.nParam1 = 1;
        node6.sParam1 = "effect1";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "POWER|DP|LV|ORICOUNT";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        let node7 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node7.nParam1 = 0;
        node7.sParam1 = "effect1";
        node7.eCompare1 = ADefine_1.AiFilterCompare.None;
        node7.eArea1 = ADefine_1.AiFilterArea.None;
        node7.containerType = ADefine_1.AiFilterContainerType.None;
        node7.sParam2 = "None";
        node7.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node7.eCardType = ADefine_1.AiCardType.None;
        node7.nParam2 = 0;
        let node8 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node9 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node9.nParam1 = 10201612;
        node9.sParam1 = "None";
        node9.eCompare1 = ADefine_1.AiFilterCompare.None;
        node9.eArea1 = ADefine_1.AiFilterArea.None;
        node9.containerType = ADefine_1.AiFilterContainerType.None;
        node9.sParam2 = "None";
        node9.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node9.eCardType = ADefine_1.AiCardType.None;
        node9.nParam2 = 1;
        let node10 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node10.nParam1 = 0;
        node10.sParam1 = "effect2";
        node10.eCompare1 = ADefine_1.AiFilterCompare.None;
        node10.eArea1 = ADefine_1.AiFilterArea.None;
        node10.containerType = ADefine_1.AiFilterContainerType.None;
        node10.sParam2 = "None";
        node10.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node10.eCardType = ADefine_1.AiCardType.None;
        node10.nParam2 = 0;
        let node11 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node11.nParam1 = 1;
        node11.sParam1 = "effect2";
        node11.eCompare1 = ADefine_1.AiFilterCompare.None;
        node11.eArea1 = ADefine_1.AiFilterArea.None;
        node11.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node11.sParam2 = "None";
        node11.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node11.eCardType = ADefine_1.AiCardType.None;
        node11.nParam2 = 0;
        let node12 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node12.nParam1 = 1;
        node12.sParam1 = "effect2";
        node12.eCompare1 = ADefine_1.AiFilterCompare.None;
        node12.eArea1 = ADefine_1.AiFilterArea.None;
        node12.containerType = ADefine_1.AiFilterContainerType.None;
        node12.sParam2 = "POWER|DP|LV|ORICOUNT";
        node12.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node12.eCardType = ADefine_1.AiCardType.None;
        node12.nParam2 = 0;
        let node13 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node13.nParam1 = 0;
        node13.sParam1 = "effect2";
        node13.eCompare1 = ADefine_1.AiFilterCompare.None;
        node13.eArea1 = ADefine_1.AiFilterArea.None;
        node13.containerType = ADefine_1.AiFilterContainerType.None;
        node13.sParam2 = "None";
        node13.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node13.eCardType = ADefine_1.AiCardType.None;
        node13.nParam2 = 0;
        let node14 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node15 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node15.nParam1 = 10201611;
        node15.sParam1 = "None";
        node15.eCompare1 = ADefine_1.AiFilterCompare.None;
        node15.eArea1 = ADefine_1.AiFilterArea.None;
        node15.containerType = ADefine_1.AiFilterContainerType.None;
        node15.sParam2 = "None";
        node15.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node15.eCardType = ADefine_1.AiCardType.None;
        node15.nParam2 = 1;
        let node16 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node16.nParam1 = 4;
        node16.sParam1 = "None";
        node16.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node16.eArea1 = ADefine_1.AiFilterArea.None;
        node16.containerType = ADefine_1.AiFilterContainerType.None;
        node16.sParam2 = "None";
        node16.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node16.eCardType = ADefine_1.AiCardType.None;
        node16.nParam2 = 0;
        let node17 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node17.nParam1 = 0;
        node17.sParam1 = "Oppba";
        node17.eCompare1 = ADefine_1.AiFilterCompare.None;
        node17.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node17.containerType = ADefine_1.AiFilterContainerType.None;
        node17.sParam2 = "None";
        node17.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node17.eCardType = ADefine_1.AiCardType.None;
        node17.nParam2 = 0;
        let node18 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node18.nParam1 = 5;
        node18.sParam1 = "Oppba";
        node18.eCompare1 = ADefine_1.AiFilterCompare.None;
        node18.eArea1 = ADefine_1.AiFilterArea.None;
        node18.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node18.sParam2 = "None";
        node18.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node18.eCardType = ADefine_1.AiCardType.None;
        node18.nParam2 = 0;
        let node19 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node19.nParam1 = 1;
        node19.sParam1 = "Oppba";
        node19.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node19.eArea1 = ADefine_1.AiFilterArea.None;
        node19.containerType = ADefine_1.AiFilterContainerType.None;
        node19.sParam2 = "None";
        node19.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node19.eCardType = ADefine_1.AiCardType.None;
        node19.nParam2 = 0;
        let node20 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node20.nParam1 = 0;
        node20.sParam1 = "effect3";
        node20.eCompare1 = ADefine_1.AiFilterCompare.None;
        node20.eArea1 = ADefine_1.AiFilterArea.None;
        node20.containerType = ADefine_1.AiFilterContainerType.None;
        node20.sParam2 = "None";
        node20.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node20.eCardType = ADefine_1.AiCardType.None;
        node20.nParam2 = 0;
        let node21 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node21.nParam1 = 1;
        node21.sParam1 = "effect3";
        node21.eCompare1 = ADefine_1.AiFilterCompare.None;
        node21.eArea1 = ADefine_1.AiFilterArea.None;
        node21.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node21.sParam2 = "None";
        node21.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node21.eCardType = ADefine_1.AiCardType.None;
        node21.nParam2 = 0;
        let node22 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node22.nParam1 = 1;
        node22.sParam1 = "effect3";
        node22.eCompare1 = ADefine_1.AiFilterCompare.None;
        node22.eArea1 = ADefine_1.AiFilterArea.None;
        node22.containerType = ADefine_1.AiFilterContainerType.None;
        node22.sParam2 = "ORICOUNT|DP|LV|POWER";
        node22.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node22.eCardType = ADefine_1.AiCardType.None;
        node22.nParam2 = 0;
        let node23 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node23.nParam1 = 0;
        node23.sParam1 = "effect3";
        node23.eCompare1 = ADefine_1.AiFilterCompare.None;
        node23.eArea1 = ADefine_1.AiFilterArea.None;
        node23.containerType = ADefine_1.AiFilterContainerType.None;
        node23.sParam2 = "None";
        node23.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node23.eCardType = ADefine_1.AiCardType.None;
        node23.nParam2 = 0;
        let node24 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node25 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node25.nParam1 = 10201611;
        node25.sParam1 = "None";
        node25.eCompare1 = ADefine_1.AiFilterCompare.None;
        node25.eArea1 = ADefine_1.AiFilterArea.None;
        node25.containerType = ADefine_1.AiFilterContainerType.None;
        node25.sParam2 = "None";
        node25.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node25.eCardType = ADefine_1.AiCardType.None;
        node25.nParam2 = 1;
        let node26 = new AICon_CheckPlayerCost_1.AICon_CheckPlayerCost(AIRoot);
        node26.nParam1 = 4;
        node26.sParam1 = "None";
        node26.eCompare1 = ADefine_1.AiFilterCompare.LESS;
        node26.eArea1 = ADefine_1.AiFilterArea.None;
        node26.containerType = ADefine_1.AiFilterContainerType.None;
        node26.sParam2 = "None";
        node26.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node26.eCardType = ADefine_1.AiCardType.None;
        node26.nParam2 = 0;
        let node27 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node27.nParam1 = 0;
        node27.sParam1 = "Oppba1";
        node27.eCompare1 = ADefine_1.AiFilterCompare.None;
        node27.eArea1 = ADefine_1.AiFilterArea.Opp_Battle;
        node27.containerType = ADefine_1.AiFilterContainerType.None;
        node27.sParam2 = "None";
        node27.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node27.eCardType = ADefine_1.AiCardType.None;
        node27.nParam2 = 0;
        let node28 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node28.nParam1 = 1;
        node28.sParam1 = "Oppba1";
        node28.eCompare1 = ADefine_1.AiFilterCompare.None;
        node28.eArea1 = ADefine_1.AiFilterArea.None;
        node28.containerType = ADefine_1.AiFilterContainerType.HAS_EFFECT;
        node28.sParam2 = "None";
        node28.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node28.eCardType = ADefine_1.AiCardType.None;
        node28.nParam2 = 0;
        let node29 = new AICon_Container_Count_1.AICon_Container_Count(AIRoot);
        node29.nParam1 = 1;
        node29.sParam1 = "Oppba";
        node29.eCompare1 = ADefine_1.AiFilterCompare.GREATE_EQUAL;
        node29.eArea1 = ADefine_1.AiFilterArea.None;
        node29.containerType = ADefine_1.AiFilterContainerType.None;
        node29.sParam2 = "None";
        node29.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node29.eCardType = ADefine_1.AiCardType.None;
        node29.nParam2 = 0;
        let node30 = new AIEffect_ConvertToContainer_1.AIEffect_ConvertToContainer(AIRoot);
        node30.nParam1 = 0;
        node30.sParam1 = "effect4";
        node30.eCompare1 = ADefine_1.AiFilterCompare.None;
        node30.eArea1 = ADefine_1.AiFilterArea.None;
        node30.containerType = ADefine_1.AiFilterContainerType.None;
        node30.sParam2 = "None";
        node30.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node30.eCardType = ADefine_1.AiCardType.None;
        node30.nParam2 = 0;
        let node31 = new AICon_Container_Filter_1.AICon_Container_Filter(AIRoot);
        node31.nParam1 = 1;
        node31.sParam1 = "effect4";
        node31.eCompare1 = ADefine_1.AiFilterCompare.None;
        node31.eArea1 = ADefine_1.AiFilterArea.None;
        node31.containerType = ADefine_1.AiFilterContainerType.HAS_BUFF;
        node31.sParam2 = "None";
        node31.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node31.eCardType = ADefine_1.AiCardType.None;
        node31.nParam2 = 0;
        let node32 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node32.nParam1 = 1;
        node32.sParam1 = "effect4";
        node32.eCompare1 = ADefine_1.AiFilterCompare.None;
        node32.eArea1 = ADefine_1.AiFilterArea.None;
        node32.containerType = ADefine_1.AiFilterContainerType.None;
        node32.sParam2 = "ORICOUNT|DP|LV|POWER";
        node32.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node32.eCardType = ADefine_1.AiCardType.None;
        node32.nParam2 = 0;
        let node33 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node33.nParam1 = 0;
        node33.sParam1 = "effect4";
        node33.eCompare1 = ADefine_1.AiFilterCompare.None;
        node33.eArea1 = ADefine_1.AiFilterArea.None;
        node33.containerType = ADefine_1.AiFilterContainerType.None;
        node33.sParam2 = "None";
        node33.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node33.eCardType = ADefine_1.AiCardType.None;
        node33.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        AIRoot.AddChildNode(node8);
        AIRoot.AddChildNode(node14);
        AIRoot.AddChildNode(node24);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node2.AddChildNode(node6);
        node2.AddChildNode(node7);
        node8.AddChildNode(node9);
        node8.AddChildNode(node10);
        node8.AddChildNode(node11);
        node8.AddChildNode(node12);
        node8.AddChildNode(node13);
        node14.AddChildNode(node15);
        node14.AddChildNode(node16);
        node14.AddChildNode(node17);
        node14.AddChildNode(node18);
        node14.AddChildNode(node19);
        node14.AddChildNode(node20);
        node14.AddChildNode(node21);
        node14.AddChildNode(node22);
        node14.AddChildNode(node23);
        node24.AddChildNode(node25);
        node24.AddChildNode(node26);
        node24.AddChildNode(node27);
        node24.AddChildNode(node28);
        node24.AddChildNode(node29);
        node24.AddChildNode(node30);
        node24.AddChildNode(node31);
        node24.AddChildNode(node32);
        node24.AddChildNode(node33);
        return AIRoot;
    }
}
exports.default = AICfg_AC10_ST2_16_effect;
//# sourceMappingURL=AICfg_AC10_ST2_16_effect.js.map