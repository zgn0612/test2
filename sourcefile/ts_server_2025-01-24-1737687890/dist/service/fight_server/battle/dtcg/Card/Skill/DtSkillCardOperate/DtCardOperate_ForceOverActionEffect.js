"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_ForceOverActionEffect = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_ForceOverActionEffect extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.GetCurrentFsmActionManger().ForceOverEffect(card);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.ForceOverActionEffect;
        desc.type = DtEnum_1.DtSkillReason.Destory;
        return desc;
    }
}
exports.DtCardOperate_ForceOverActionEffect = DtCardOperate_ForceOverActionEffect;
//# sourceMappingURL=DtCardOperate_ForceOverActionEffect.js.map