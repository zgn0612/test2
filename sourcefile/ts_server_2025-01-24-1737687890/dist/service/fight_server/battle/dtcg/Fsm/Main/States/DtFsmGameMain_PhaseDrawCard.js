"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_PhaseDrawCard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PhaseFoster_1 = require("./DtFsmGameMain_PhaseFoster");
const DtFsmGameMain_PhaseMain_1 = require("./DtFsmGameMain_PhaseMain");
class DtFsmGameMain_PhaseDrawCard extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.DrawCardPhase;
    }
    Enter() {
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
        this.StartRound();
    }
    StartRound() {
        if (this.GetMachine().curRound > 1) {
            if (this.GetMachine().GetPlayer(this.GetMachine().curTrunPlayerId).areaDeck.CardCount() == 0) {
                this.GetMachine().manager.GameOver(this.GetMachine().GetOppPlayer(this.GetMachine().curTrunPlayerId), DtEnum_1.DtGameOverReason.NO_CARD_DRAW);
                return;
            }
            this.GetMachine().GetPlayer(this.GetMachine().curTrunPlayerId).DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
        }
    }
    Excute() {
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.SkipHatchPhase)) {
            this.GetMachine().ChangeState(DtFsmGameMain_PhaseMain_1.DtFsmGameMain_PhaseMain.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmGameMain_PhaseFoster_1.DtFsmGameMain_PhaseFoster.name);
        }
    }
}
exports.DtFsmGameMain_PhaseDrawCard = DtFsmGameMain_PhaseDrawCard;
//# sourceMappingURL=DtFsmGameMain_PhaseDrawCard.js.map