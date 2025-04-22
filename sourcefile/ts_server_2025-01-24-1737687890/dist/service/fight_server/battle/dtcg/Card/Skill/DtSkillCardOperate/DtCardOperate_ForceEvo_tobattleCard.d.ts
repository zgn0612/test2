import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_ForceEvo_tobattleCard extends DtSkillCardOperateBase {
    private OnGetCardEvent;
    private call;
    private cost;
    private isNoCostEvo;
    constructor(cost: number, call: any, func: () => DtCardBase, isNoCostEvo?: boolean);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
