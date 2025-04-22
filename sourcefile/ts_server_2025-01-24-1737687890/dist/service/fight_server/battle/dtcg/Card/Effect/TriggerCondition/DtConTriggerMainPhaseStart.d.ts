import { DtEffectRoundValid } from "../../../Data/DtEnum";
import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
export declare class DtConTriggerMainPhaseStart extends DtConBase {
    private round;
    constructor(round: DtEffectRoundValid);
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
