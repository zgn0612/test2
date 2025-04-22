import { DtBuffDurationType, DtBuffType } from "../../../Data/DtEnum";
import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_AddInheritAttBuff extends DtSkillCardOperateBase {
    private bufftype;
    private duration;
    constructor(type: DtBuffType, duration: DtBuffDurationType);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
