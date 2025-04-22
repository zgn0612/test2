"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIEffect_ISChooseCard_1 = require("../../Atree/ATreeCondition/AIEffect_ISChooseCard");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AIEffect_SortSelectCardNumberCheckHand_WithLv_1 = require("../../Atree/ATreeCondition/AIEffect_SortSelectCardNumberCheckHand_WithLv");
class AICfg_AC5_BT4_023_effect extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node3.nParam1 = 0;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 0;
        let node4 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "role";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.Self_HAND_BATTLE_HATCH;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AIEffect_SortSelectCardNumberCheckHand_WithLv_1.AIEffect_SortSelectCardNumberCheckHand_WithLv(AIRoot);
        node5.nParam1 = 0;
        node5.sParam1 = "BT6-088|BT3-093|BT5-088";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.None;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "role";
        node5.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node5.eCardType = ADefine_1.AiCardType.None;
        node5.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        node2.AddChildNode(node3);
        node2.AddChildNode(node4);
        node2.AddChildNode(node5);
        return AIRoot;
    }
}
exports.default = AICfg_AC5_BT4_023_effect;
//# sourceMappingURL=AICfg_AC5_BT4_023_effect.js.map