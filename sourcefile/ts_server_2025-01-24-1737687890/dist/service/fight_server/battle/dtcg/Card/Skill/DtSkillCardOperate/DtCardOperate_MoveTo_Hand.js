"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_MoveTo_Hand = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_MoveTo_Hand extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardMoveTo(effect.parent, card, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffectMoveToHandAndShowCard);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.MoveTo;
        desc.type = DtEnum_1.DtAreaType.HAND;
        return desc;
    }
}
exports.DtCardOperate_MoveTo_Hand = DtCardOperate_MoveTo_Hand;
//# sourceMappingURL=DtCardOperate_MoveTo_Hand.js.map