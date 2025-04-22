import { DtSkillReason } from "../../../Data/DtEnum";
import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillBase } from "../DtSkillBase";
export declare class DtSkillCardOperateBase {
    parentSkill: DtSkillBase;
    reason: DtSkillReason;
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    IsUsefulCard(card: DtCardBase): boolean;
    OpNextUsefulCard(card: DtCardBase): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
