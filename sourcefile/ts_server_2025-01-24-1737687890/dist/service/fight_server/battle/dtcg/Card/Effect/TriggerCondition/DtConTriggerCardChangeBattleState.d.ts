import { DtBattlePhase, DtCardBattleState, DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtProtoEnum_MoveReason } from "../../../Message/DtMessageData";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardChangeBattleState extends DtConBase {
    private round;
    private playType;
    private playPlayer;
    private toState;
    private phase;
    private cardCon;
    private reason;
    constructor(round: DtEffectRoundValid, playCardType: DtCardType, playCardPlayer: DtSkillTargetToPlayer, toState: DtCardBattleState);
    SetReason(reason: DtProtoEnum_MoveReason): void;
    SetPhase(phase: DtBattlePhase): void;
    SetCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
