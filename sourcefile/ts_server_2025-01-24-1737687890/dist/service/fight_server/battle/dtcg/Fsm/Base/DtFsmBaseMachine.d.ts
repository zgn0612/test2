import { DtBattleManager } from "../../DtBattleManager";
import { DtFsmBaseState } from "./DtFsmBaseState";
export declare class DtFsmBaseMachine<TS extends DtFsmBaseState> {
    manager: DtBattleManager;
    states: Map<string, TS>;
    private initState;
    private previousState;
    private currentState;
    private nextState;
    constructor(manager: DtBattleManager);
    private Init;
    protected InitAddStates(): void;
    AddState<T extends TS>(c: {
        new (m: DtFsmBaseMachine<TS>): T;
    }): void;
    ContainState(stateName: string): boolean;
    SetInitState(stateName: string): void;
    GetInitState(): TS;
    GetCurrentState(): TS;
    GetNextState(): TS;
    GetPreviousState(): TS;
    GetState(stateName: string): TS;
    GoToPreviousState(): void;
    ChangeState(stateName: string): void;
    OnTick(): void;
    Clear(): void;
}
