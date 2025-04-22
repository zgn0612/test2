"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_AddInheritAttBuff = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtBuffAttribute_1 = require("../../Buff/DtBuffAttribute");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_AddInheritAttBuff extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    bufftype;
    duration;
    constructor(type, duration) {
        super();
        this.bufftype = type;
        this.duration = duration;
    }
    OnOperateCard(card, effect) {
        let buff = new DtBuffAttribute_1.DtBuffAttribute(this.bufftype);
        if (this.duration != DtEnum_1.DtBuffDurationType.None) {
            buff.SetBuffDurationType(this.duration);
        }
        effect.AddInheritBuffTo(buff, card);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.AddBuff;
        desc.type = this.bufftype;
        return desc;
    }
}
exports.DtCardOperate_AddInheritAttBuff = DtCardOperate_AddInheritAttBuff;
//# sourceMappingURL=DtCardOperate_AddInheritAttBuff.js.map