import { DtBattlePhase } from "../../../Data/DtEnum";
import { DtFsmBaseState } from "../../Base/DtFsmBaseState";
import { DtFsmGameMain } from "../DtFsmGameMain";
export declare class DtFsmGameMain_BaseState extends DtFsmBaseState {
    protected lstStep: Array<() => boolean>;
    protected step: number;
    protected phaseState: DtBattlePhase;
    SetNextState(): void;
    ExcuteStep(needNotifyPlayer?: boolean): void;
    protected AddStep(func: () => boolean): void;
    GetMachine(): DtFsmGameMain;
    GetPhase(): DtBattlePhase;
}
