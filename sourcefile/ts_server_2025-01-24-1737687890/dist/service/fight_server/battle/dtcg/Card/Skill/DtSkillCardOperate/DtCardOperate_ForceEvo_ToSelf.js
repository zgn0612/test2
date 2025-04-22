"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_ForceEvo_ToSelf = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_ForceEvo_ToSelf extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    cost = 0;
    isNoCostEvo = false;
    constructor(cost, isNoCostEvo = false) {
        super();
        this.cost = cost;
        this.isNoCostEvo = isNoCostEvo;
    }
    OnOperateCard(card, effect) {
        let fsm = effect.parent.parent.manager.ForceDigimonEvo(effect.parent.GetPlayer(), card, effect.parent, this.cost);
        if (this.isNoCostEvo) {
            fsm.SetNoCost();
        }
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.EffectEvoCard;
        return desc;
    }
}
exports.DtCardOperate_ForceEvo_ToSelf = DtCardOperate_ForceEvo_ToSelf;
//# sourceMappingURL=DtCardOperate_ForceEvo_ToSelf.js.map