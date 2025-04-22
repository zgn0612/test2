import { DtEffectRoundValid } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
export declare class DtConBase {
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
    protected ChechRound(effect: DtEffect, round: DtEffectRoundValid): boolean;
}
