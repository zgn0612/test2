import { DtProtoEnum_MoveReason, DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_DrawCardFromDefense extends DtSkillCardOperateBase {
    private type;
    constructor(t?: DtProtoEnum_MoveReason);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
