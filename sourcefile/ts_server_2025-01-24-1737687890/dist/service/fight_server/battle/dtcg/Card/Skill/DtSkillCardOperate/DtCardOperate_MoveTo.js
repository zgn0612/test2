"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_MoveTo = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_MoveTo extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    to;
    constructor(to) {
        super();
        this.to = to;
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardMoveTo(effect.parent, card, this.to, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.MoveTo;
        desc.type = this.to;
        return desc;
    }
}
exports.DtCardOperate_MoveTo = DtCardOperate_MoveTo;
//# sourceMappingURL=DtCardOperate_MoveTo.js.map