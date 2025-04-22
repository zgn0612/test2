import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtFsmAttackType } from "../../../Fsm/Attack/DtFsmAttackEnum";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerWhenAttacking extends DtConBase {
    private round;
    private atkCardCon;
    private defCardCon;
    private atkType;
    constructor(round: DtEffectRoundValid);
    SetAtkType(type: DtFsmAttackType): void;
    SetAtkCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetDefCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
