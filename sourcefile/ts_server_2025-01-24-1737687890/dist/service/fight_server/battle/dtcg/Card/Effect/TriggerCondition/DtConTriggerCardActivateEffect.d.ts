import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardActivateEffect extends DtConBase {
    private round;
    private conCard;
    private activeEffectName;
    constructor(round: DtEffectRoundValid, activeEffectName: number);
    SetCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
