import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_PlayCard_FromParentOrigin_Reset extends DtSkillCardOperateBase {
    private useCost;
    private OnEffect;
    constructor(useCost: boolean, oneff: boolean);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
