import { DtBuffEffectToType, DtBuffType } from "../../Data/DtEnum";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalPlayerBuffBase } from "./DtGlobalPlayerBuffBase";
export declare class DtGlobalPlayerBuffInt extends DtGlobalPlayerBuffBase {
    private func;
    constructor(caster: DtCardBase, toPlayer: DtBuffEffectToType, buff: DtBuffType, func: (buff: DtGlobalPlayerBuffInt, player: DtPlayer) => number, creator: DtEffectCreator);
    PlayerCondition_Int(player: DtPlayer, buff: DtBuffType, card: DtCardBase): number;
}
