"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_MoveTo_Defense = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_MoveTo_Defense extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardMoveTo(effect.parent, card, DtEnum_1.DtAreaType.DEFENSE, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.MoveTo;
        desc.type = DtEnum_1.DtAreaType.DEFENSE;
        return desc;
    }
}
exports.DtCardOperate_MoveTo_Defense = DtCardOperate_MoveTo_Defense;
//# sourceMappingURL=DtCardOperate_MoveTo_Defense.js.map