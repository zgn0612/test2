"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIEffect_ISChooseCard_1 = require("../../Atree/ATreeCondition/AIEffect_ISChooseCard");
const AIEffect_ConvertToContainer_1 = require("../../Atree/ATreeCondition/AIEffect_ConvertToContainer");
const AICon_Container_Sort_1 = require("../../Atree/ATreeCondition/AICon_Container_Sort");
const AIEffect_ContainerToEffect_1 = require("../../Atree/ATreeCondition/AIEffect_ContainerToEffect");
class AICfg_AC2_BT2_106_effect extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node3.nParam1 = 11610611;
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
        let node5 = new AICon_Container_Sort_1.AICon_Container_Sort(AIRoot);
        node5.nParam1 = 1;
        node5.sParam1 = "effect1";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.None;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "LV|DP|ORICOUNT";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        let node6 = new AIEffect_ContainerToEffect_1.AIEffect_ContainerToEffect(AIRoot);
        node6.nParam1 = 0;
        node6.sParam1 = "effect1";
        node6.eCompare1 = ADefine_1.AiFilterCompare.None;
        node6.eArea1 = ADefine_1.AiFilterArea.None;
        node6.containerType = ADefine_1.AiFilterContainerType.None;
        node6.sParam2 = "None";
        node6.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node6.eCardType = ADefine_1.AiCardType.None;
        node6.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        node2.AddChildNode(node6);
        return AIRoot;
    }
}
exports.default = AICfg_AC2_BT2_106_effect;
//# sourceMappingURL=AICfg_AC2_BT2_106_effect.js.map