import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
export default class EC_BT1_006_O_1 extends DtEffectCreator {
    SetEffect(): void;
    Condition(effect: DtEffect): boolean;
    Effect(effect: DtEffect): DtEffectResult;
}
