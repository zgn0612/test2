/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtSkillDesc } from "../../Message/DtMessageData";
import { DtCardBase } from "../DtCardBase";
import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
import { DtSkillBase } from "./DtSkillBase";
import { DtSkillCardFiterBase } from "./DtSkillCardFilter/DtSkillCardFiterBase";
import { DtSkillCardFiterMachine } from "./DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateBase } from "./DtSkillCardOperate/DtSkillCardOperateBase";
import { DtSkillCardOperateMachine } from "./DtSkillCardOperate/DtSkillCardOperateMachine";
import { DtPlayerChooseBase } from "./DtSkillPlayerChoose/DtPlayerChooseBase";
export declare class DtSkillPlayerChoose extends DtSkillBase {
    private CallObj;
    constructor(effect: DtEffect, stage: number, callobj: any);
    protected list: Array<DtCardBase>;
    private PlayerChooseMachine;
    mulNeedReverse: boolean;
    private CardFilterMachine;
    private CardOperateMachine;
    private Condition;
    OnSkillRun(): DtEffectResult;
    OnPlayerChooseOne(uid: Long): void;
    OnPlayerChooseMul(uids: Long[]): void;
    CheckSkillNeedChoose(): boolean;
    GetFunCallObj(): any;
    SetChooseMachine(mcChoose: DtPlayerChooseBase): void;
    GetChooseMachine(): DtPlayerChooseBase;
    SetFilteMachine(mcFilter: DtSkillCardFiterMachine): void;
    GetMachineFilter(): DtSkillCardFiterMachine;
    SetFilter(filter: DtSkillCardFiterBase): void;
    SetOperateMachine(mcOperate: DtSkillCardOperateMachine): void;
    GetMachineOperate(): DtSkillCardOperateMachine;
    SetOperate(op: DtSkillCardOperateBase): void;
    SetCondition(func: (effect: DtEffect) => boolean): void;
    OpNextUsefulCard(card: DtCardBase): boolean;
    private GetPlayerChooseCards;
    CheckSkilliMakeSenese(): boolean;
    GetSkillDesc(): DtSkillDesc;
}
