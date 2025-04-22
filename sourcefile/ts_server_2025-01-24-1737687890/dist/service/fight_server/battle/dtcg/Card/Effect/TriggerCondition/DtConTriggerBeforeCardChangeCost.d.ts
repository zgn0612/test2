import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_ChangeCost } from "../../../Data/DtEventMsg";
import { DtProtoEnum_MoveReason } from "../../../Message/DtMessageData";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerBeforeCardChangeCost extends DtConBase {
    private round;
    private conCard;
    private func;
    private funcObj;
    private reason;
    constructor(round: DtEffectRoundValid, reason: DtProtoEnum_MoveReason);
    SetCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetCondition(obj: any, func: (d: DtMsg_ChangeCost) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
