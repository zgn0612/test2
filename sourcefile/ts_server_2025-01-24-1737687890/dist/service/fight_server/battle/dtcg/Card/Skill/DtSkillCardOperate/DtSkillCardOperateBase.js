"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillCardOperateBase = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
class DtSkillCardOperateBase {
    parentSkill;
    reason = DtEnum_1.DtSkillReason.None;
    OnOperateCard(card, effect) {
    }
    IsUsefulCard(card) {
        return true;
    }
    OpNextUsefulCard(card) {
        return true;
    }
    GetReasonDesc() {
        return null;
    }
}
exports.DtSkillCardOperateBase = DtSkillCardOperateBase;
//# sourceMappingURL=DtSkillCardOperateBase.js.map