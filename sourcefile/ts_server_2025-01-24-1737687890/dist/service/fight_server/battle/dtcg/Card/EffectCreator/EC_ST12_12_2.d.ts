import DtCreateEffectToSelfCreator from "../Effect/DtCreateEffectToSelfCreator";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class EC_ST12_12_1 extends DtCreateEffectToSelfCreator {
    SetEffect(): void;
    protected OnEffectCon(): boolean;
    protected OnGetEffectCreator(): DtEffectCreator;
}
