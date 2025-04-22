"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICtrl_Sequece_1 = require("../../Atree/ATreeCtrlNode/AICtrl_Sequece");
const AIAction_PlayCard_1 = require("../../Atree/ATreeCommandAction/AIAction_PlayCard");
const AICon_CanUse_1 = require("../../Atree/ATreeCondition/AICon_CanUse");
class AICfg_AC5_BT5_088 extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICtrl_Sequece_1.AICtrl_Sequece(AIRoot);
        let node3 = new AIAction_PlayCard_1.AIAction_PlayCard(AIRoot);
        node3.priority = 120;
        let node4 = new AICon_CanUse_1.AICon_CanUse(AIRoot);
        node4.nParam1 = 0;
        node4.sParam1 = "None";
        node4.eCompare1 = ADefine_1.AiFilterCompare.None;
        node4.eArea1 = ADefine_1.AiFilterArea.None;
        node4.containerType = ADefine_1.AiFilterContainerType.None;
        node4.sParam2 = "None";
        node4.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node4.eCardType = ADefine_1.AiCardType.None;
        node4.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        node2.AddChildNode(node4);
        node2.AddChildNode(node3);
        return AIRoot;
    }
}
exports.default = AICfg_AC5_BT5_088;
//# sourceMappingURL=AICfg_AC5_BT5_088.js.map