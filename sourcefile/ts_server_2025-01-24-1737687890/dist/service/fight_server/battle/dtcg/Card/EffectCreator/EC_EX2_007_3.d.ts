import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import { DtEffect } from "../Effect/DtEffect";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_EX2_007_3 extends DtEffectChangePlayCostCreator {
    SetEffect(): void;
    protected OnGetChangeCost(): number;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
    protected OnSetEffectTriggerCondition(effect: DtEffect): void;
}
