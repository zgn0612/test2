"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DeckCardBrowseAndDiscard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DeckCardBrowseAndDiscard extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardMoveTo(effect.parent, card, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.Discard);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.Discard;
        return desc;
    }
}
exports.DtCardOperate_DeckCardBrowseAndDiscard = DtCardOperate_DeckCardBrowseAndDiscard;
//# sourceMappingURL=DtCardOperate_DeckCardBrowseAndDiscard.js.map