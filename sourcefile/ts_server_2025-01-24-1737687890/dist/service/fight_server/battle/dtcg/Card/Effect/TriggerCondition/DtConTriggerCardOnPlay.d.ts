import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_OnPlay } from "../../../Data/DtEventMsg";
import { DtProtoEnum_MoveReason } from "../../../Message/DtMessageData";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardOnPlay extends DtConBase {
    private round;
    private playType;
    private playPlayer;
    private reason;
    private playCardCon;
    private func;
    private funcObj;
    constructor(round: DtEffectRoundValid, playCardType: DtCardType, playCardPlayer: DtSkillTargetToPlayer);
    SetReason(r: DtProtoEnum_MoveReason): void;
    SetPlayCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetCondition(obj: any, func: (d: DtMsg_OnPlay) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
