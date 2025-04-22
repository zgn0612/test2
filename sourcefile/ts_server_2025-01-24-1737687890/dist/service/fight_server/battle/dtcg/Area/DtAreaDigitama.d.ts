import { DtCardBase } from "../Card/DtCardBase";
import { DtAreaType } from "../Data/DtEnum";
import { DtPlayer } from "../Player/DtPlayer";
import { DtArea } from "./DtArea";
export declare class DtAreaDigitama extends DtArea {
    hatchedCard: DtCardBase;
    constructor(type: DtAreaType, player: DtPlayer);
    PushHatchedCard(card: DtCardBase): void;
    PopHatchedCard(): DtCardBase;
    Clear(): void;
}
