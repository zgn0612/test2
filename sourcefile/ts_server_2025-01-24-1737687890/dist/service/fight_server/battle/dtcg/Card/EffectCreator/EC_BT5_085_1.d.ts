import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_BT5_085_1 extends DtEffectChangePlayCostCreator {
    SetEffect(): void;
    private CreateSkill;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
    protected OnGetChangeCost(): number;
}
