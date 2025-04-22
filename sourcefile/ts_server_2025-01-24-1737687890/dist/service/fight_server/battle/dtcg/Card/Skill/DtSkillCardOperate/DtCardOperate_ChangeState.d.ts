import { DtCardBattleState } from "../../../Data/DtEnum";
import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_ChangeState extends DtSkillCardOperateBase {
    private state;
    constructor(state: DtCardBattleState);
    OnOperateCard(card: DtCardBase, effect: DtEffect): DtCardBase;
    IsUsefulCard(card: DtCardBase): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
