import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_Destory extends DtSkillCardOperateBase {
    private oneffect;
    constructor(oneffect?: boolean);
    OnOperateCard(card: DtCardBase, effect: DtEffect): DtCardBase;
    GetReasonDesc(): DtSkillReasonDesc;
}
