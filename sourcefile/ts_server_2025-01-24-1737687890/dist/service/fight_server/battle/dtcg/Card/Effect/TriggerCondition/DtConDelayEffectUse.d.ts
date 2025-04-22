import { DtMsgBase } from "../../../Data/DtEventMsg";
import { DtEffect } from "../DtEffect";
import { DtConBase } from "./DtConBase";
export declare class DtConDelayEffectUse extends DtConBase {
    constructor();
    CheckCon(effect: DtEffect, data: DtMsgBase): boolean;
}
