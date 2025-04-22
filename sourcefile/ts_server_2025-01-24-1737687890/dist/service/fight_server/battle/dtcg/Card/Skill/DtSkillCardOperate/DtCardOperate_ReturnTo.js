"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_ReturnTo = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_ReturnTo extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    where = 0;
    type;
    constructor(type, where) {
        super();
        this.where = where;
        this.type = type;
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnCardReturnTo(effect.parent, card, this.type, this.where).SetEndCallBack((success) => {
            if (success == false) {
                if (this.parentSkill) {
                    this.parentSkill.success = false;
                }
            }
        });
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.ReturnTo;
        desc.type = this.type;
        desc.num = this.where;
        return desc;
    }
}
exports.DtCardOperate_ReturnTo = DtCardOperate_ReturnTo;
//# sourceMappingURL=DtCardOperate_ReturnTo.js.map