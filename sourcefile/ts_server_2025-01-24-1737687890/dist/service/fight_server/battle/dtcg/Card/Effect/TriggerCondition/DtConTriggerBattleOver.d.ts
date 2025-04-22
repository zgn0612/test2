import { DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtFsmAttackType } from "../../../Fsm/Attack/DtFsmAttackEnum";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerBattleOver extends DtConBase {
    private round;
    private needCheckSelf;
    private atkType;
    private conAtkCard;
    private conDefCard;
    constructor(round: DtEffectRoundValid, atkType: DtFsmAttackType, needCheckSelf: boolean);
    SetAtkCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetDefCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    GetDefCon(): DtConCard;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
