import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import DtEffectChangePlayCostCreator from "../Effect/DtEffectChangePlayCostCreator";
export default class EC_EX2_055_1 extends DtEffectChangePlayCostCreator {
    private battleCard;
    SetEffect(): void;
    private CreateSkill;
    private CreateSkill2;
    protected OnGetChangeCost(): number;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
}
