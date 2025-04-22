/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtSkillDesc } from "../../Message/DtMessageData";
import { DtEffectResult } from "../Effect/DtEffect";
import { DtSkillBase } from "./DtSkillBase";
export declare class DtSkillCustom extends DtSkillBase {
    OnEffectCall: Function;
    OnChooseCall: Function;
    obj: any;
    private OnDescFunc;
    OnSkillRun(): DtEffectResult;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    CheckSkillNeedChoose(): boolean;
    SetStage(idx: number): this;
    SetSkillDesc(stageIndex: number, fun: () => DtSkillDesc): this;
    GetSkillDesc(): DtSkillDesc;
}
