"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_AddInheritBuff_Int = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtBuffAttribute_int_1 = require("../../Buff/DtBuffAttribute_int");
const DtBuffChangeDP_1 = require("../../Buff/DtBuffChangeDP");
const DtBuffChangePower_1 = require("../../Buff/DtBuffChangePower");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_AddInheritBuff_Int extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    bufftype;
    num;
    duration;
    constructor(type, num, duration) {
        super();
        this.bufftype = type;
        this.num = num;
        this.duration = duration;
    }
    OnOperateCard(card, effect) {
        let buff = this.GetBuff();
        if (this.duration != DtEnum_1.DtBuffDurationType.None) {
            buff.SetBuffDurationType(this.duration);
        }
        effect.AddInheritBuffTo(buff, card);
    }
    GetBuff() {
        let buff;
        switch (this.bufftype) {
            case DtEnum_1.DtBuffType.CHANGE_DP:
                buff = new DtBuffChangeDP_1.DtBuffChangeDP(this.num);
                break;
            case DtEnum_1.DtBuffType.CHANGE_POWER:
                buff = new DtBuffChangePower_1.DtBuffChangePower(this.num);
                break;
            default:
                buff = new DtBuffAttribute_int_1.DtBuffAttribute_int(this.bufftype, this.num);
                break;
        }
        return buff;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.AddBuff;
        desc.type = this.bufftype;
        desc.num = this.num;
        return desc;
    }
}
exports.DtCardOperate_AddInheritBuff_Int = DtCardOperate_AddInheritBuff_Int;
//# sourceMappingURL=DtCardOperate_AddInheritBuff_Int.js.map