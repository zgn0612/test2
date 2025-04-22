import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtFsmAttackType } from "../../../Fsm/Attack/DtFsmAttackEnum";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerAttackOver extends DtConBase {
    private round;
    private atkType;
    private conAtkCard;
    private conDefCard;
    constructor(round: DtEffectRoundValid, atkType: DtFsmAttackType);
    SetAtkCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetDefCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
