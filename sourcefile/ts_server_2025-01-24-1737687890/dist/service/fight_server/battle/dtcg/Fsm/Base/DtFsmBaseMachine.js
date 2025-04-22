"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmBaseMachine = void 0;
class DtFsmBaseMachine {
    manager;
    states;
    initState;
    previousState;
    currentState;
    nextState;
    constructor(manager) {
        this.manager = manager;
        this.states = new Map();
        this.Init();
    }
    Init() {
        this.InitAddStates();
        this.currentState = this.initState;
        if (this.currentState == null) {
            return;
        }
        this.currentState.Enter();
    }
    InitAddStates() {
    }
    AddState(c) {
        let state = new c(this);
        state.Init();
        this.states.set(state.stateName, state);
    }
    ContainState(stateName) {
        if (this.states.has(stateName)) {
            return true;
        }
        return false;
    }
    SetInitState(stateName) {
        this.initState = this.states.get(stateName);
    }
    GetInitState() {
        return this.initState;
    }
    GetCurrentState() {
        return this.currentState;
    }
    GetNextState() {
        return this.nextState;
    }
    GetPreviousState() {
        return this.previousState;
    }
    GetState(stateName) {
        return this.states.get(stateName);
    }
    GoToPreviousState() {
        if (this.previousState != null) {
            this.ChangeState(this.previousState.stateName);
        }
    }
    ChangeState(stateName) {
        this.previousState = this.currentState;
        this.nextState = this.states.get(stateName);
    }
    OnTick() {
        if (this.nextState != null) {
            this.currentState.Exit();
            this.currentState = this.nextState;
            this.nextState = null;
            this.currentState.Enter();
            return;
        }
        this.currentState.Excute();
    }
    Clear() {
        if (this.states) {
            this.states.forEach((value, _) => {
                value.Clear();
            });
            this.states = null;
        }
        this.initState = null;
        this.previousState = null;
        this.currentState = null;
        this.nextState = null;
    }
}
exports.DtFsmBaseMachine = DtFsmBaseMachine;
//# sourceMappingURL=DtFsmBaseMachine.js.map