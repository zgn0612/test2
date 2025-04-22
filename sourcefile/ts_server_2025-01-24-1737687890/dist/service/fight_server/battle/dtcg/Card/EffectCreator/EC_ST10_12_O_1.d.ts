import { DtCardBase } from "../DtCardBase";
import DtEffectCreateEffectToOther from "../Effect/DtEffectCreateEffectToOther";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class EC_ST10_12_O_1 extends DtEffectCreateEffectToOther {
    SetEffect(): void;
    protected OnCondition(card: DtCardBase): boolean;
    protected OnGetEffect(): DtEffectCreator;
}
