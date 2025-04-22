"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmBaseState = void 0;
class DtFsmBaseState {
    fsmMachine;
    stateName = "";
    constructor(machine) {
        this.fsmMachine = machine;
        this.stateName = this.constructor.name;
    }
    Init() {
    }
    Enter() {
    }
    Excute() {
    }
    OnExternalCall() {
    }
    GetMachine() {
        return this.fsmMachine;
    }
    SetMachine(machine) {
        this.fsmMachine = machine;
    }
    Exit() {
    }
    Clear() {
    }
}
exports.DtFsmBaseState = DtFsmBaseState;
//# sourceMappingURL=DtFsmBaseState.js.map