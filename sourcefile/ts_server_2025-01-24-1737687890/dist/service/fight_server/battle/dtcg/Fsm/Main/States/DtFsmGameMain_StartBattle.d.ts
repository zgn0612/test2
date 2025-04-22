import { DtFsmGameMain_BaseState } from "./DtFsmGameMain_BaseState";
export declare class DtFsmGameMain_StartBattle extends DtFsmGameMain_BaseState {
    Init(): void;
    Enter(): void;
    Excute(): void;
    private ChangeNExtState;
    private SetCost;
    private FirstDraw;
    private PlayerChooseIFChange;
    private CheckPlayerChangerOver;
    private PreStartBattle;
    private PlayerStart;
    private TestDrawCard;
}
