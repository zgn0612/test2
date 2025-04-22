import { DtCardColor, DtCardType } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtBuffBase } from "./DtBuffBase";
export declare enum SpecialEvoType {
    EvoCheckOri = 0,
    OriCheckEvo = 1,
    OriCheckEvoCondition = 2
}
export declare class DtBuffSpecialEvoSeen {
    cardtype: DtCardType;
    color: DtCardColor;
    lv: number;
}
export declare class DtBuffSpecialEvoCondition extends DtBuffBase {
    evoType: SpecialEvoType;
    willBlock: boolean;
    private func;
    private creator;
    constructor(func: (buff: DtBuffSpecialEvoCondition, card: DtCardBase) => number, creator: DtEffectCreator, type: SpecialEvoType, willBlock: any);
    EvoDigimonCanEvoOrigin(originCard: DtCardBase): number;
    OriginDigimonCanEvoCard(evocard: DtCardBase): number;
    IsBuffActive(): boolean;
    Clear(): void;
    SeenData: DtBuffSpecialEvoSeen;
    SetSeenData(cardtype: DtCardType, color: DtCardColor, lv: number): void;
}
