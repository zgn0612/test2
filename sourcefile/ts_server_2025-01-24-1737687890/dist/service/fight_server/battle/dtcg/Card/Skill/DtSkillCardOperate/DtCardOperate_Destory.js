"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_Destory = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_Destory extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    oneffect;
    constructor(oneffect = true) {
        super();
        this.oneffect = oneffect;
        this.reason = DtEnum_1.DtSkillReason.Destory;
    }
    OnOperateCard(card, effect) {
        let eff = effect.parent.parent.manager.OnCardDestroy(effect.parent, card, this.oneffect);
        eff.SetEndCallBack((success) => {
            if (success == false) {
                if (this.parentSkill) {
                    this.parentSkill.success = false;
                }
            }
        });
        return card;
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.Destory;
        return desc;
    }
}
exports.DtCardOperate_Destory = DtCardOperate_Destory;
//# sourceMappingURL=DtCardOperate_Destory.js.map