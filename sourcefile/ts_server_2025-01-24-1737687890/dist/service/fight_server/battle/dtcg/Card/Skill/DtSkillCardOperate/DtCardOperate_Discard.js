"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_Discard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_Discard extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardMoveTo(effect.parent, card, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.Discard);
        return card;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.Discard;
        return desc;
    }
}
exports.DtCardOperate_Discard = DtCardOperate_Discard;
//# sourceMappingURL=DtCardOperate_Discard.js.map