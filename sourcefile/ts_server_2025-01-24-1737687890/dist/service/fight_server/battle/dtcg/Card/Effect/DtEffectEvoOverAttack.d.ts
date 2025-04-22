import { DtBuffDurationType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffect } from "../Effect/DtEffect";
import { DtEffectCreator } from "./DtEffectCreator";
export default class DtEffectEvoOverAttack extends DtEffectCreator {
    protected list: Array<DtCardBase>;
    CreateEvoOverAttack(): void;
    CreateTimeEvoOverAttack(dur: DtBuffDurationType, num: number): void;
    SetEvoOverAttackEffect(effect: DtEffect): void;
    private GetDesc1;
    protected OnOtherCondition(effect: DtEffect): boolean;
    private Effect;
    private Choose;
    private AttackDefense;
}
