"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtreeRoot_1 = require("../../Atree/AtreeRoot");
const AIcfgBase_1 = require("../AIcfgBase");
const ADefine_1 = require("../../Atree/ADefine");
const AICon_PlayerCanHatch_1 = require("../../Atree/ATreeCondition/AICon_PlayerCanHatch");
class AICfg_test extends AIcfgBase_1.AIcfgBase {
    GetAITreeRoot(root, playerid) {
        let AIRoot = new AtreeRoot_1.AtreeRoot(root, playerid);
        let node2 = new AICon_PlayerCanHatch_1.AICon_PlayerCanHatch(AIRoot);
        node2.nParam1 = 0;
        node2.sParam1 = "None";
        node2.eCompare1 = ADefine_1.AiFilterCompare.None;
        node2.eArea1 = ADefine_1.AiFilterArea.None;
        node2.containerType = ADefine_1.AiFilterContainerType.None;
        node2.sParam2 = "None";
        node2.eBattleSatate = ADefine_1.AiCardBattleState.None;
        node2.eCardType = ADefine_1.AiCardType.None;
        node2.nParam2 = 0;
        AIRoot.AddChildNode(node2);
        return AIRoot;
    }
}
exports.default = AICfg_test;
//# sourceMappingURL=AICfg_test.js.map