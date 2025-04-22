/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtcgMessage2Client } from "../../Message/DtcgMessage2Client";
import { DtSkillDesc } from "../../Message/DtMessageData";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
export declare enum DtSkillRunType {
    None = 0,
    Perv_Fail_Then_Over = 1,
    Perv_Fail_Then_Skip = 2,
    Activate_Then_Over = 3,
    Perv_SUCCESS_Then_Over = 4
}
export declare class DtSkillBase {
    type: DtSkillRunType;
    parentEffect: DtEffect;
    effectStage: number;
    success: boolean;
    constructor(effect: DtEffect, stage: number);
    OnSkillRun(): DtEffectResult;
    CheckSkilliMakeSenese(): boolean;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    CheckSkillNeedChoose(): boolean;
    OpNextUsefulCard(card: DtCardBase): boolean;
    Get2ClientMessageMgr(): DtcgMessage2Client;
    GetParentCard(): DtCardBase;
    GetParentPlayer(): DtPlayer;
    GetSkillDesc(): DtSkillDesc;
}
