import { DtFsmGameMain_BaseState } from "./DtFsmGameMain_BaseState";
export declare class DtFsmGameMain_Init extends DtFsmGameMain_BaseState {
    private card1;
    private card2;
    Init(): void;
    Enter(): void;
    Excute(): void;
    private StepInitPlayer;
    private CheckPlayerEvent;
    private StartBattle;
    private InitRefereePlayer;
    private InitPlayer;
    private getServerCards;
    private Luanxu;
}
