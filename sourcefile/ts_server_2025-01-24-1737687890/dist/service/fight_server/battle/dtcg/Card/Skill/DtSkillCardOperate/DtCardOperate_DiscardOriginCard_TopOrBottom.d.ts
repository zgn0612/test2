import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_DiscardOriginCard_TopOrBottom extends DtSkillCardOperateBase {
    private where;
    private count;
    constructor(where: number, count?: number);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    IsUsefulCard(card: DtCardBase): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
