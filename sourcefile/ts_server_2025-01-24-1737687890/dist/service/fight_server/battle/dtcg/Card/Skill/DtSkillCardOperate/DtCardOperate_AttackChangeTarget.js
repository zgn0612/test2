"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardOperate_AttackChangeTarget = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtSkillCardOperateBase_1 = require("./DtSkillCardOperateBase");
class DtCardOperate_AttackChangeTarget extends DtSkillCardOperateBase_1.DtSkillCardOperateBase {
    constructor() {
        super();
    }
    OnOperateCard(card, effect) {
        effect.parent.parent.manager.OnForceAttackChangeTarget(effect.parent, card);
    }
    GetReasonDesc() {
        let desc = new DtMessageData_1.DtSkillReasonDesc();
        desc.reason = DtEnum_1.DtSkillReason.ChangeBattleTarget;
        return desc;
    }
}
exports.DtCardOperate_AttackChangeTarget = DtCardOperate_AttackChangeTarget;
//# sourceMappingURL=DtCardOperate_AttackChangeTarget.js.map