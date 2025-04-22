import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtPlayerChooseCardInfo } from "../DtSkillPlayerChoose/DtPlayerChooseBase";
import { DtSkillPlayerChoose } from "../DtSkillPlayerChooseBase";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtSkillCardOperateMachine {
    private parent;
    constructor(parent: DtSkillPlayerChoose);
    private cardOperates;
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    SetOperate(op: DtSkillCardOperateBase): void;
    ConvertChooseCards(cards: Array<DtCardBase>): Array<DtPlayerChooseCardInfo>;
    private GetCardIseUseful;
    OpNextUsefulCard(card: DtCardBase): boolean;
    IsNextStepOp(): boolean;
    HasDestroyEffect(): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
    GetOtherReasonDesc(): Array<DtSkillReasonDesc>;
}
