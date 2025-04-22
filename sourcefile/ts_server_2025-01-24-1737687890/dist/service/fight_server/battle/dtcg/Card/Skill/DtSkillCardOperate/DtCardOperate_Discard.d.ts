import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_Discard extends DtSkillCardOperateBase {
    constructor();
    OnOperateCard(card: DtCardBase, effect: DtEffect): DtCardBase;
    GetReasonDesc(): DtSkillReasonDesc;
}
