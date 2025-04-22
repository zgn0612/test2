"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIEffect_ISChooseCard_1 = require("../../Atree/ATreeCondition/AIEffect_ISChooseCard");
const AICon_TakeCardsToContainer_1 = require("../../Atree/ATreeCondition/AICon_TakeCardsToContainer");
const AIEffect_SortSelectCardNumberCheckHand_1 = require("../../Atree/ATreeCondition/AIEffect_SortSelectCardNumberCheckHand");
class AICfg_AC5_BT3_093_effect extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIEffect_ISChooseCard_1.AIEffect_ISChooseCard(AIRoot);
        node3.nParam1 = 11709312;
        node3.sParam1 = "None";
        node3.eCompare1 = ADefine_1.AiFilterCompare.None;
        node3.eArea1 = ADefine_1.AiFilterArea.None;
        node3.containerType = ADefine_1.AiFilterContainerType.None;
        node3.sParam2 = "None";
        node3.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node3.eCardType = ADefine_1.AiCardType.None;
        node3.nParam2 = 1;
        let node4 = new AICon_TakeCardsToContainer_1.AICon_TakeCardsToContainer(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "monster";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.Self_HAND_BATTLE_HATCH;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        let node5 = new AIEffect_SortSelectCardNumberCheckHand_1.AIEffect_SortSelectCardNumberCheckHand(AIRoot);
        node5.nParam1 = 0;
        node5.sParam1 = "BT6-030|BT6-019|ST8-02|BT1-029|BT4-023|BT6-022|BT4-025|BT1-037|BT4-027|BT5-026";
        node5.eCompare1 = ADefine_1.AiFilterCompare.None;
        node5.eArea1 = ADefine_1.AiFilterArea.None;
        node5.containerType = ADefine_1.AiFilterContainerType.None;
        node5.sParam2 = "monster";
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
exports.default = AICfg_AC5_BT3_093_effect;
//# sourceMappingURL=AICfg_AC5_BT3_093_effect.js.map