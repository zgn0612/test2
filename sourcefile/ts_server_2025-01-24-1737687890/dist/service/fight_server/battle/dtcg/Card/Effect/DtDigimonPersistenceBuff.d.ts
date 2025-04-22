import { DtBuffType, DtEffectRoundValid } from "../../Data/DtEnum";
import { DtEffectCreator } from "./DtEffectCreator";
export default class DtDigimonPersistenceBuff extends DtEffectCreator {
    private bufftype;
    private roundValid;
    protected CreatePersistenceBuff(type: DtBuffType, roundValid: DtEffectRoundValid): void;
    private BuffEffect;
    private BuffConInt;
    protected OnIntBuffCondition(): number;
    private BuffConBoolean;
    protected OnBooleanCondition(): boolean;
}
