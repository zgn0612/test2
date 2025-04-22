import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_CardBeDiscardFromEvoOri } from "../../../Data/DtEventMsg";
import { DtProtoEnum_MoveReason } from "../../../Message/DtMessageData";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerDiscardEvoOrigin extends DtConBase {
    private round;
    private conCard;
    private beDiscardCard;
    private conCasterCard;
    private reason;
    private func;
    private funcObj;
    constructor(round: DtEffectRoundValid, reason: DtProtoEnum_MoveReason);
    SetBeDiscardCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetDiscardCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetCasterCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetCondition(obj: any, func: (d: DtMsg_CardBeDiscardFromEvoOri) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
