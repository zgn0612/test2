import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_DiscardOriginCustom_ChooseIsOrigin extends DtSkillCardOperateBase {
    private OnGetCardEvent;
    private call;
    constructor(call: any, func: (effect: DtEffect) => DtCardBase);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    OpNextUsefulCard(card: DtCardBase): boolean;
    GetReasonDesc(): DtSkillReasonDesc;
}
