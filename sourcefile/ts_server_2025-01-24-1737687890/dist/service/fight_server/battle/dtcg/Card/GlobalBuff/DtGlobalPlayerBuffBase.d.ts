import { DtBuffEffectToType, DtBuffType } from "../../Data/DtEnum";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuffBase } from "./DtGlobalBuffBase";
export declare class DtGlobalPlayerBuffBase extends DtGlobalBuffBase {
    constructor(caster: DtCardBase, toPlayer: DtBuffEffectToType, buff: DtBuffType, creator: DtEffectCreator);
    PlayerCondition(player: DtPlayer, buff: DtBuffType): boolean;
    PlayerCondition_Int(player: DtPlayer, buff: DtBuffType, card: DtCardBase): number;
}
