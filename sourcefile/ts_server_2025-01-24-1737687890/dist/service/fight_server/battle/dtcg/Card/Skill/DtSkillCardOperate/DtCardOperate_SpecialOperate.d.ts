import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_SpecialOperate extends DtSkillCardOperateBase {
    private CustomOperateEvent;
    private call;
    private type;
    private DescEvent;
    constructor(call: any, func: (card: DtCardBase, effect: DtEffect) => void, type: DtSpecialOpType, desc?: () => DtSkillReasonDesc);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    IsUsefulCard(card: DtCardBase): boolean;
    ISNextStepTyoe(): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
export declare enum DtSpecialOpType {
    NEED_NEXT_STEP = 0,
    ADD_SKILL_BUFF = 1,
    SPECIAL_EFFECT = 2,
    CAL_NUMBER = 3
}
