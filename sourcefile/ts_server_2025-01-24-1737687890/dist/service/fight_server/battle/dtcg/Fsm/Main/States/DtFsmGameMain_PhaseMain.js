"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PhaseMain = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PhaseOver_1 = require("./DtFsmGameMain_PhaseOver");
class DtFsmGameMain_PhaseMain extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    state = 0;
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.MainPhase;
    }
    Enter() {
        this.state = 0;
        this.GetMachine().needCheckPlayerTurnOver = false;
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.MainPhaseStart, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
    }
    Excute() {
        if (this.state == 0) {
            if (this.GetMachine().needCheckPlayerTurnOver) {
                this.GetMachine().needCheckPlayerTurnOver = false;
                if (this.GetMachine().curCost < 0) {
                    this.state = 1;
                }
            }
            else {
                this.GetMachine().manager.SetGameWaitPlayer();
            }
        }
        else if (this.state == 1) {
            this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.RoundOver, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
            this.state = 2;
        }
        else if (this.state == 2) {
            if (this.GetMachine().curCost < 0) {
                this.SetNextState();
            }
            else {
                this.state = 0;
            }
        }
    }
    SetNextState() {
        this.GetMachine().ChangeState(DtFsmGameMain_PhaseOver_1.DtFsmGameMain_PhaseOver.name);
    }
}
exports.DtFsmGameMain_PhaseMain = DtFsmGameMain_PhaseMain;
//# sourceMappingURL=DtFsmGameMain_PhaseMain.js.map