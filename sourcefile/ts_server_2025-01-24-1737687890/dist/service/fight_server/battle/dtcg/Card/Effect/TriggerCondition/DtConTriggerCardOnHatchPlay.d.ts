import { DtBattlePhase, DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardOnHatchPlay extends DtConBase {
    private round;
    private phase;
    private conCard;
    constructor(round: DtEffectRoundValid, phase: DtBattlePhase);
    SetCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
