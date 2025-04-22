import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_BT2_023_1 extends DtEffectChangePlayCostCreator {
    SetEffect(): void;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
    protected OnGetChangeCost(): number;
}
