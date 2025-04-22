import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_BT7_111_2 extends DtEffectChangePlayCostCreator {
    SetEffect(): void;
    protected OnGetChangeCost(): number;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
}
