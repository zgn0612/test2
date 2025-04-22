"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSpecialOpType = exports.DtCardOperate_SpecialOperate = void 0;
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_SpecialOperate extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    CustomOperateEvent;
    call;
    type;
    DescEvent;
    constructor(call, func, type, desc = null) {
        super();
        this.call = call;
        this.CustomOperateEvent = func;
        this.type = type;
        this.DescEvent = desc;
    }
    OnOperateCard(card, effect) {
        if (this.CustomOperateEvent) {
            this.CustomOperateEvent.call(this.call, card, effect);
        }
    }
    IsUsefulCard(card) {
        if (this.type == DtSpecialOpType.NEED_NEXT_STEP) {
            let next = this.parentSkill.parentEffect.GetNextSkillWithSkill(this.parentSkill);
            if (next) {
                return next.OpNextUsefulCard(card);
            }
        }
        return true;
    }
    ISNextStepTyoe() {
        return this.type == DtSpecialOpType.NEED_NEXT_STEP;
    }
    GetReasonDesc() {
        if (this.DescEvent) {
            return this.DescEvent.call(this.call);
        }
        return null;
    }
}
exports.DtCardOperate_SpecialOperate = DtCardOperate_SpecialOperate;
var DtSpecialOpType;
(function (DtSpecialOpType) {
    DtSpecialOpType[DtSpecialOpType["NEED_NEXT_STEP"] = 0] = "NEED_NEXT_STEP";
    DtSpecialOpType[DtSpecialOpType["ADD_SKILL_BUFF"] = 1] = "ADD_SKILL_BUFF";
    DtSpecialOpType[DtSpecialOpType["SPECIAL_EFFECT"] = 2] = "SPECIAL_EFFECT";
    DtSpecialOpType[DtSpecialOpType["CAL_NUMBER"] = 3] = "CAL_NUMBER";
})(DtSpecialOpType = exports.DtSpecialOpType || (exports.DtSpecialOpType = {}));
//# sourceMappingURL=DtCardOperate_SpecialOperate.js.map