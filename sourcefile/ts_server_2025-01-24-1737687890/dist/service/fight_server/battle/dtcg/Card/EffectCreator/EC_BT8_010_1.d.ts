import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_BT8_010_1 extends DtEffectChangePlayCostCreator {
    SetEffect(): void;
    protected OnGetChangeCost(): number;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
}
