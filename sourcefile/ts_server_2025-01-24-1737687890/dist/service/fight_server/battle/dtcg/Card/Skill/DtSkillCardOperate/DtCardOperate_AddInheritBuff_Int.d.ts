import { DtBuffDurationType, DtBuffType } from "../../../Data/DtEnum";
import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_AddInheritBuff_Int extends DtSkillCardOperateBase {
    private bufftype;
    private num;
    private duration;
    constructor(type: DtBuffType, num: number, duration: DtBuffDurationType);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    private GetBuff;
    GetReasonDesc(): DtSkillReasonDesc;
}
