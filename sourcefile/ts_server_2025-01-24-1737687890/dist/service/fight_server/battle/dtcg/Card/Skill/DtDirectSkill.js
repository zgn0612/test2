"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtDirectSkill = void 0;
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillBase_1 = require("./DtSkillBase");
class DtDirectSkill extends DtSkillBase_1.DtSkillBase {
    operate;
    constructor(effect, stage, operate) {
        super(effect, stage);
        this.operate = operate;
        if (this.operate) {
            this.operate.parentSkill = this;
        }
    }
    OnSkillRun() {
        if (this.operate) {
            this.operate.OnOperateCard(this.parentEffect.parent, this.parentEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.DtDirectSkill = DtDirectSkill;
//# sourceMappingURL=DtDirectSkill.js.map