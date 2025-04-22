import { DtCardColor } from "../../../Data/DtEnum";
import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_SeenForceEvo_toParent extends DtSkillCardOperateBase {
    private color;
    private lv;
    constructor(color: DtCardColor, lv: number);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
