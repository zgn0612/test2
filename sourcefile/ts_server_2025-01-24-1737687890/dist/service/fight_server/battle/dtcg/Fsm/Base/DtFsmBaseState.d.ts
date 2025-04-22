import { DtFsmBaseMachine } from "./DtFsmBaseMachine";
export declare class DtFsmBaseState {
    protected fsmMachine: DtFsmBaseMachine<DtFsmBaseState>;
    stateName: string;
    constructor(machine: DtFsmBaseMachine<DtFsmBaseState>);
    Init(): void;
    Enter(): void;
    Excute(): void;
    OnExternalCall(): void;
    GetMachine(): DtFsmBaseMachine<DtFsmBaseState>;
    SetMachine(machine: DtFsmBaseMachine<DtFsmBaseState>): void;
    Exit(): void;
    Clear(): void;
}
