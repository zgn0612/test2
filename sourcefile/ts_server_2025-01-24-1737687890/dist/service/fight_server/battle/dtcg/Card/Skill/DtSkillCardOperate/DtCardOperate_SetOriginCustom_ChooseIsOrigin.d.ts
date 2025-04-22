import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_SetOriginCustom_ChooseIsOrigin extends DtSkillCardOperateBase {
    private OnGetCardEvent;
    private call;
    private where;
    constructor(where: number, call: any, func: (effect: DtEffect) => DtCardBase);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
