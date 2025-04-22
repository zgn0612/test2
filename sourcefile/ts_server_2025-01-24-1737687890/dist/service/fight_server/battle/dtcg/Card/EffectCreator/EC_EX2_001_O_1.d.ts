import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class EC_EX2_001_O_1 extends DtEffectCreator {
    SetEffect(): void;
    Condition(effect: DtEffect): boolean;
    Effect(effect: DtEffect): DtEffectResult;
}
