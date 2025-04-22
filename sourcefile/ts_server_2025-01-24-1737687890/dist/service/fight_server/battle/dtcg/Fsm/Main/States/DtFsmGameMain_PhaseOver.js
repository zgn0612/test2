"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PhaseOver = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PahseRoundStart_1 = require("./DtFsmGameMain_PahseRoundStart");
const DtFsmGameMain_PhaseMain_1 = require("./DtFsmGameMain_PhaseMain");
class DtFsmGameMain_PhaseOver extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.OverPhase;
    }
    Enter() {
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
    }
    Excute() {
        if (this.GetMachine().curCost >= 0) {
            this.GetMachine().ChangeState(DtFsmGameMain_PhaseMain_1.DtFsmGameMain_PhaseMain.name);
            return;
        }
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BuffRoundOver, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
        this.GetMachine().curTrunPlayerId = this.GetMachine().GetOppPlayer(this.GetMachine().curTrunPlayerId).playerId;
        this.GetMachine().SetCost(Math.abs(this.GetMachine().curCost), false);
        this.GetMachine().manager.UpdateGameBattleInfo();
        this.GetMachine().ChangeState(DtFsmGameMain_PahseRoundStart_1.DtFsmGameMain_PahseRoundStart.name);
    }
}
exports.DtFsmGameMain_PhaseOver = DtFsmGameMain_PhaseOver;
//# sourceMappingURL=DtFsmGameMain_PhaseOver.js.map