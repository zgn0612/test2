"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_DiscardOriginCard_ParentDiscard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_DiscardOriginCard_ParentDiscard extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    to;
    constructor(to) {
        super();
        this.to = to;
    }
    OnOperateCard(card, effect) {
        if (this.to == DtEnum_1.DtAreaType.GY) {
            effect.parent.parent.manager.OnCardDiscardEvoOriginCard(effect.parent, effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (this.to == DtEnum_1.DtAreaType.HAND) {
            effect.parent.parent.manager.OnCardDiscardEvoOriginCardToHand(effect.parent, effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        if (this.to == DtEnum_1.DtAreaType.DECK) {
            effect.parent.parent.manager.OnCardDiscardEvoOriginCardToDeckBottom(effect.parent, effect.parent, card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.DiscardOrigin;
        return desc;
    }
}
exports.DtCardOperate_DiscardOriginCard_ParentDiscard = DtCardOperate_DiscardOriginCard_ParentDiscard;
//# sourceMappingURL=DtCardOperate_DiscardOriginCard_ParentDiscard.js.map