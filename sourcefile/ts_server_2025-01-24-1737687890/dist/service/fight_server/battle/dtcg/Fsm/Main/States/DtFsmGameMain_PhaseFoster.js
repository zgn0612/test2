"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PhaseFoster = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PhaseMain_1 = require("./DtFsmGameMain_PhaseMain");
class DtFsmGameMain_PhaseFoster extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.FosterPhase;
    }
    Enter() {
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
    }
    Excute() {
        this.GetMachine().manager.SetGameWaitPlayer();
    }
    SetNextState() {
        this.GetMachine().ChangeState(DtFsmGameMain_PhaseMain_1.DtFsmGameMain_PhaseMain.name);
    }
}
exports.DtFsmGameMain_PhaseFoster = DtFsmGameMain_PhaseFoster;
//# sourceMappingURL=DtFsmGameMain_PhaseFoster.js.map