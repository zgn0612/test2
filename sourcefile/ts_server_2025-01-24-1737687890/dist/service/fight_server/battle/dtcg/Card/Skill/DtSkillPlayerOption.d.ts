/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtSkillTargetToPlayer } from "../../Data/DtEnum";
import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
import { DtSkillBase } from "./DtSkillBase";
export declare class DtSkillPlayerOption extends DtSkillBase {
    private CallObj;
    private count;
    private selecter;
    private runEvent;
    private chooseEvent;
    constructor(effect: DtEffect, stage: number, callobj: any, count: number, selecter: DtSkillTargetToPlayer);
    OnSkillRun(): DtEffectResult;
    private GetChoosePlayer;
    OnPlayerChooseOne(uid: Long): void;
    CheckSkillNeedChoose(): boolean;
    SetChooseNum(num: number): void;
    SetSkillBehavior(run: (effect: DtEffect, skl: DtSkillPlayerOption) => DtEffectResult, choose: (uid: Long, effect: DtEffect, skill: DtSkillPlayerOption) => void): void;
}
