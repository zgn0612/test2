import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_Degenerate extends DtSkillCardOperateBase {
    private deNum;
    constructor(deNum: number);
    DegCallBack: (c: DtCardBase) => void;
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    IsUsefulCard(card: DtCardBase): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
