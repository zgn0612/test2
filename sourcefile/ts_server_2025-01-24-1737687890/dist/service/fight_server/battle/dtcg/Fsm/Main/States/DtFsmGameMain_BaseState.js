"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_BaseState = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtFsmBaseState_1 = require("../../Base/DtFsmBaseState");
class DtFsmGameMain_BaseState extends DtFsmBaseState_1.DtFsmBaseState {
    lstStep;
    step;
    phaseState = DtEnum_1.DtBattlePhase.None;
    SetNextState() {
    }
    ExcuteStep(needNotifyPlayer = true) {
        let func = this.lstStep[this.step];
        if (func) {
            let arg = func.call(this);
            if (arg) {
                this.step++;
            }
            else {
                if (needNotifyPlayer) {
                    this.GetMachine().manager.SetGameWaitPlayer();
                }
                else {
                    this.GetMachine().manager.DirectWaitSystem();
                }
            }
        }
        else {
            _Dcg_1.gLog.err("no step func");
        }
    }
    AddStep(func) {
        if (this.lstStep == null) {
            this.lstStep = new Array();
        }
        this.lstStep.push(func);
    }
    GetMachine() {
        return this.fsmMachine;
    }
    GetPhase() {
        return this.phaseState;
    }
}
exports.DtFsmGameMain_BaseState = DtFsmGameMain_BaseState;
//# sourceMappingURL=DtFsmGameMain_BaseState.js.map