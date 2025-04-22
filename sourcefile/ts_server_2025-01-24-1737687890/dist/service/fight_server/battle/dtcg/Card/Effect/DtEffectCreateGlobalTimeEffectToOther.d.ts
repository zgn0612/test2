import { DtBuffDurationType, DtEffectRoundValid } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class DtEffectCreateGlobalTimeEffectToOther extends DtEffectCreator {
    private skillName;
    private time;
    private roundValid;
    CreateEffectCreateEffectToOther(time: DtBuffDurationType, param: number, toEffectTarget: DtEffectRoundValid): void;
    protected CreateGlobalBuffToClient(): void;
    private CreateGlobalBuffEffect;
    private Effect;
    private ChechPlayer;
    private ClearAll;
    protected OnGetEffect(): DtEffectCreator;
    protected OnCondition(card: DtCardBase): boolean;
}
