"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillBase = exports.DtSkillRunType = void 0;
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
var DtSkillRunType;
(function (DtSkillRunType) {
    DtSkillRunType[DtSkillRunType["None"] = 0] = "None";
    DtSkillRunType[DtSkillRunType["Perv_Fail_Then_Over"] = 1] = "Perv_Fail_Then_Over";
    DtSkillRunType[DtSkillRunType["Perv_Fail_Then_Skip"] = 2] = "Perv_Fail_Then_Skip";
    DtSkillRunType[DtSkillRunType["Activate_Then_Over"] = 3] = "Activate_Then_Over";
    DtSkillRunType[DtSkillRunType["Perv_SUCCESS_Then_Over"] = 4] = "Perv_SUCCESS_Then_Over";
})(DtSkillRunType = exports.DtSkillRunType || (exports.DtSkillRunType = {}));
class DtSkillBase {
    type;
    parentEffect;
    effectStage = 0;
    success = true;
    constructor(effect, stage) {
        this.parentEffect = effect;
        this.effectStage = stage;
        this.type = DtSkillRunType.None;
    }
    OnSkillRun() {
        return DtEffect_1.DtEffectResult.Next;
    }
    CheckSkilliMakeSenese() {
        return true;
    }
    OnPlayerChooseOne(uid) {
    }
    OnPlayerChooseMul(uids) {
    }
    CheckSkillNeedChoose() {
        return false;
    }
    OpNextUsefulCard(card) {
        return true;
    }
    Get2ClientMessageMgr() {
        return this.parentEffect.parent.parent.manager.Get2ClientMessageMgr();
    }
    GetParentCard() {
        return this.parentEffect.parent;
    }
    GetParentPlayer() {
        return this.parentEffect.parent.parent;
    }
    GetSkillDesc() {
        let des = new DtMessageData_1.DtSkillDesc();
        des.indexStage = this.effectStage;
        return des;
    }
}
exports.DtSkillBase = DtSkillBase;
//# sourceMappingURL=DtSkillBase.js.map