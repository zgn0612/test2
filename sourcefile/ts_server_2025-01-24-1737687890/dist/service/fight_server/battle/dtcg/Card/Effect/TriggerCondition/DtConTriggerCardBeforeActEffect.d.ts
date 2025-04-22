import { DtActionEffectType, DtCardColor, DtCardType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_OnBeforeActionEffect } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
import { DtConCard } from "./DtConCard";
export declare class DtConTriggerCardBeforeActEffect extends DtConBase {
    private round;
    private type;
    private casterCon;
    private func;
    private funcObj;
    constructor(round: DtEffectRoundValid, ...type: DtActionEffectType[]);
    SetCasterCardCon(type: DtCardType, c: DtCardColor, o: DtSkillTargetToPlayer): DtConCard;
    SetCondition(obj: any, func: (d: DtMsg_OnBeforeActionEffect) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
