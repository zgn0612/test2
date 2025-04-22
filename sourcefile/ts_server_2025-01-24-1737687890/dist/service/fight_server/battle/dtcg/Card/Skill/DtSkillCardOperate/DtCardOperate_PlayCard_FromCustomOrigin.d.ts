import { DtSkillReasonDesc } from "../../../Message/DtMessageData";
import { DtCardBase } from "../../DtCardBase";
import { DtEffect } from "../../Effect/DtEffect";
import { DtSkillCardOperateBase } from "./DtSkillCardOperateBase";
export declare class DtCardOperate_PlayCard_FromCustomOrigin extends DtSkillCardOperateBase {
    private useCost;
    private OnEffect;
    private OnGetCardEvent;
    private call;
    constructor(useCost: boolean, oneff: boolean, call: any, GetCustomParent: () => DtCardBase);
    OnOperateCard(card: DtCardBase, effect: DtEffect): void;
    GetReasonDesc(): DtSkillReasonDesc;
}
