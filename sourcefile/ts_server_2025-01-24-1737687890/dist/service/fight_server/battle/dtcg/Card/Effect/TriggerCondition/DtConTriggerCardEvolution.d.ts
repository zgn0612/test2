import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardEvolution extends DtConBase {
    private round;
    private evoCard;
    private oriCard;
    constructor(round: DtEffectRoundValid);
    SetEvoCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetOriCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
