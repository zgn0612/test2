import { DtAreaType, DtEffectRoundValid, DtSkillTargetToPlayer } from "../../../Data/DtEnum";
import { DtMsgBase, DtMsg_AreaChange } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
export declare class DtConTriggerAreaCardsChange extends DtConBase {
    private round;
    private playPlayer;
    private area;
    private isPush;
    private func;
    private funcObj;
    constructor(round: DtEffectRoundValid, playCardPlayer: DtSkillTargetToPlayer, area: DtAreaType, ispush: boolean);
    SetCondition(obj: any, func: (d: DtMsg_AreaChange) => boolean): void;
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
