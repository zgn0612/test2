import { DtEffectRoundValid } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class DtEffectCreateEffectToOther extends DtEffectCreator {
    private skillName;
    private roundValid;
    CreateEffectCreateEffectToOther(toEffectTarget: DtEffectRoundValid): void;
    private Effect;
    private ChechPlayer;
    protected OnGetEffect(): DtEffectCreator;
    protected OnCondition(card: DtCardBase): boolean;
}
