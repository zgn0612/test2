import { DtBuffEffectToType, DtBuffType } from "../../Data/DtEnum";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalPlayerBuffBase } from "./DtGlobalPlayerBuffBase";
export declare class DtGlobalPlayerBuff extends DtGlobalPlayerBuffBase {
    private func;
    constructor(caster: DtCardBase, toPlayer: DtBuffEffectToType, buff: DtBuffType, func: (buff: DtGlobalPlayerBuff, player: DtPlayer) => boolean, creator: DtEffectCreator);
    PlayerCondition(player: DtPlayer, buff: DtBuffType): boolean;
}
