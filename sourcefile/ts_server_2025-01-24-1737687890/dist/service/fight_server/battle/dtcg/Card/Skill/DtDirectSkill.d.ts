import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
import { DtSkillBase } from "./DtSkillBase";
import { DtSkillCardOperateBase } from "./DtSkillCardOperate/DtSkillCardOperateBase";
export declare class DtDirectSkill extends DtSkillBase {
    private operate;
    constructor(effect: DtEffect, stage: number, operate: DtSkillCardOperateBase);
    OnSkillRun(): DtEffectResult;
}
