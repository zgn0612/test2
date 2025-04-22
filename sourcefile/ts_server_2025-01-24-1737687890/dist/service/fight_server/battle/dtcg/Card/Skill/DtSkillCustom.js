"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillCustom = void 0;
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillBase_1 = require("./DtSkillBase");
class DtSkillCustom extends DtSkillBase_1.DtSkillBase {
    OnEffectCall;
    OnChooseCall;
    obj;
    OnDescFunc;
    OnSkillRun() {
        if (this.OnEffectCall == null) {
            return DtEffect_1.DtEffectResult.Next;
        }
        return this.OnEffectCall.call(this.obj, this.parentEffect, this);
    }
    OnPlayerChooseOne(uid) {
        if (this.OnChooseCall == null) {
            return;
        }
        this.OnChooseCall.call(this.obj, uid, this.parentEffect);
    }
    OnPlayerChooseMul(uids) {
        if (this.OnChooseCall == null) {
            return;
        }
        this.OnChooseCall.call(this.obj, uids, this.parentEffect);
    }
    CheckSkillNeedChoose() {
        return this.OnChooseCall != null;
    }
    SetStage(idx) {
        this.effectStage = idx;
        return this;
    }
    SetSkillDesc(stageIndex, fun) {
        this.effectStage = stageIndex;
        this.OnDescFunc = fun;
        return this;
    }
    GetSkillDesc() {
        if (this.OnDescFunc) {
            let desc = this.OnDescFunc.call(this.obj);
            if (desc) {
                desc.indexStage = this.effectStage;
                return desc;
            }
        }
        return super.GetSkillDesc();
    }
}
exports.DtSkillCustom = DtSkillCustom;
//# sourceMappingURL=DtSkillCustom.js.map