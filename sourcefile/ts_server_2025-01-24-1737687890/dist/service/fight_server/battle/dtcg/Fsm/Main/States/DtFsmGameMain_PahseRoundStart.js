"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PahseRoundStart = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PahseActive_1 = require("./DtFsmGameMain_PahseActive");
const DtFsmGameMain_PhaseDrawCard_1 = require("./DtFsmGameMain_PhaseDrawCard");
const DtFsmGameMain_PhaseMain_1 = require("./DtFsmGameMain_PhaseMain");
class DtFsmGameMain_PahseRoundStart extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.RoundStart;
    }
    Enter() {
        this.GetMachine().curRound++;
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
        this.GetMachine().manager.Get2ClientMessageMgr().DigimonSetCost(this.GetMachine().curCost);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.RoundStart, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
        this.GetMachine().GetCurrentPhasePlayer().roundData.PlayerRoundStart();
        this.GetMachine().manager.playerTimeOut.ResetCurrentPlayer();
        this.GetMachine().manager.playerTimeOut.SetPlayerTimeoutResidue(this.GetMachine().GetCurrentPhasePlayer(), 90);
        this.GetMachine().manager.playerTimeOut.SetPlayerTimeoutResidue(this.GetMachine().GetOppPhasePlayer(), 30);
    }
    Excute() {
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.FIRST_TURN_JUMP_TO_MAIN_PHASE) && (this.GetMachine().curRound == 1)) {
            this.GetMachine().ChangeState(DtFsmGameMain_PhaseMain_1.DtFsmGameMain_PhaseMain.name);
        }
        else if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.FIRST_TUN_SKIL_ACTIVE_PHASE) && (this.GetMachine().curRound == 1)) {
            this.GetMachine().ChangeState(DtFsmGameMain_PhaseDrawCard_1.DtFsmGameMain_PhaseDrawCard.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmGameMain_PahseActive_1.DtFsmGameMain_PahseActive.name);
        }
    }
}
exports.DtFsmGameMain_PahseRoundStart = DtFsmGameMain_PahseRoundStart;
//# sourceMappingURL=DtFsmGameMain_PahseRoundStart.js.map