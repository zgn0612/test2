import { DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_CardMove } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
export declare class DtConTriggerCardMove extends DtConBase {
    private round;
    private casterPlayer;
    private targerPlayer;
    private from;
    private to;
    private reason;
    private func;
    private funcObj;
    constructor(round: DtEffectRoundValid, casterPlayer: DtSkillTargetToPlayer, targerPlayer: DtSkillTargetToPlayer);
    SetBeDiscardFromHand(): DtConTriggerCardMove;
    SetBeDiscardFromDeck(): DtConTriggerCardMove;
    SetCondition(obj: any, func: (d: DtMsg_CardMove) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
