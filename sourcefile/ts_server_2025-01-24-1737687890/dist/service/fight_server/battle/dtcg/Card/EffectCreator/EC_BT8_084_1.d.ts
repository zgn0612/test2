import { DtCardBase } from "../DtCardBase";
import DtFusionEffectCreator from "../Effect/DtFusionEffectCreator";
export default class EC_BT8_084_1 extends DtFusionEffectCreator {
    SetEffect(): void;
    CheckTopCardCondition(card: DtCardBase): boolean;
    CheckBottomCardCondition(card: DtCardBase): boolean;
}
