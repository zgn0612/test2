"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PahseActive = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PhaseDrawCard_1 = require("./DtFsmGameMain_PhaseDrawCard");
class DtFsmGameMain_PahseActive extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.ActivePhase;
    }
    Enter() {
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
        let cards = this.GetMachine().GetCurrentPhasePlayer().areaInBattle.GetTheCopyCards();
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
                if (cards[i].HasBuff(DtEnum_1.DtBuffType.CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE) == false) {
                    this.GetMachine().manager.OnSetCardActiveState(null, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.PhaseActive_thenStateActive);
                }
            }
        }
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.PhaseActive, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
    }
    Excute() {
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.PhaseActiveOver, new DtEventMsg_1.DtMsg_RoundChange(this.GetMachine().curTrunPlayerId, this.GetMachine().curRound));
        this.GetMachine().ChangeState(DtFsmGameMain_PhaseDrawCard_1.DtFsmGameMain_PhaseDrawCard.name);
    }
}
exports.DtFsmGameMain_PahseActive = DtFsmGameMain_PahseActive;
//# sourceMappingURL=DtFsmGameMain_PahseActive.js.map