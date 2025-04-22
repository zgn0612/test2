"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_StartBattle = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_PahseRoundStart_1 = require("./DtFsmGameMain_PahseRoundStart");
class DtFsmGameMain_StartBattle extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.StartBattle;
    }
    Enter() {
        this.step = 0;
        this.lstStep = new Array();
        this.AddStep(this.SetCost);
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoChangeCardsInStartBattle)) {
            this.AddStep(this.TestDrawCard);
        }
        else {
            this.AddStep(this.FirstDraw);
            this.AddStep(this.PlayerChooseIFChange);
            this.AddStep(this.CheckPlayerChangerOver);
            this.AddStep(this.PreStartBattle);
        }
        this.AddStep(this.ChangeNExtState);
        this.GetMachine().manager.NotifiClientBattleState(this.phaseState);
    }
    Excute() {
        this.ExcuteStep();
    }
    ChangeNExtState() {
        this.GetMachine().playerList.forEach((player) => {
            this.GetMachine().manager.playerTimeOut.SetPlayerTimeoutResidue(player, 60);
        });
        this.GetMachine().ChangeState(DtFsmGameMain_PahseRoundStart_1.DtFsmGameMain_PahseRoundStart.name);
        return true;
    }
    SetCost() {
        this.GetMachine().manager.Get2ClientMessageMgr().DigimonSetCost(this.GetMachine().curCost);
        return true;
    }
    FirstDraw() {
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(null, DtMessageData_1.ClientShowType.NeedChangeCardState, null, "");
        for (let i = 0; i < 5; i++) {
            this.GetMachine().playerList[0].FirstDrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
        }
        for (let i = 0; i < 5; i++) {
            this.GetMachine().playerList[1].FirstDrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
        }
        return true;
    }
    PlayerChooseIFChange() {
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(null, DtMessageData_1.ClientShowType.START_GAME_CHANGE_CARDS, null, "");
        this.GetMachine().manager.playerTimeOut.SetGameTimeOut(15);
        return true;
    }
    CheckPlayerChangerOver() {
        if (this.GetMachine().playerList[0].roundData.startChangeCardState == -1) {
            return false;
        }
        if (this.GetMachine().playerList[1].roundData.startChangeCardState == -1) {
            return false;
        }
        return true;
    }
    PreStartBattle() {
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(null, DtMessageData_1.ClientShowType.OVER_CHANGE_CARDS, null, "");
        this.PlayerStart(this.GetMachine().playerList[0]);
        this.PlayerStart(this.GetMachine().playerList[1]);
        return true;
    }
    PlayerStart(player) {
        if (player.roundData.startChangeCardState == 0) {
            let cards = player.areaToken.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                player.MoveCard(cards[i], DtEnum_1.DtAreaType.TOKEN, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.None);
            }
            for (let i = 0; i < 5; i++) {
                player.SetDefenseCard();
            }
        }
        else {
            let cards = player.areaToken.GetTheCopyCards();
            for (let i = 0; i < cards.length; i++) {
                player.MoveCard(cards[i], DtEnum_1.DtAreaType.TOKEN, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.START_GAME_CHANGE_CARDS);
            }
            player.areaDeck.RandomSort();
            player.StartBattle();
        }
    }
    TestDrawCard() {
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.CustomStartRule) && this.GetMachine().manager.roomData.Custom != null) {
            let data = this.GetMachine().manager.roomData.Custom;
            for (let i = 0; i < data.PlayerAHandCount; i++) {
                this.GetMachine().playerList[0].DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
            }
            for (let i = 0; i < data.PlayerBHandCount; i++) {
                this.GetMachine().playerList[1].DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
            }
            for (let i = 0; i < data.PlayerADefenseCount; i++) {
                this.GetMachine().playerList[0].SetDefenseCard();
            }
            for (let i = 0; i < data.PlayerBDefenseCount; i++) {
                this.GetMachine().playerList[1].SetDefenseCard();
            }
            if (data.PlayerAHatch && data.PlayerAHatch > 0) {
                this.GetMachine().playerList[0].HatchDigitama();
            }
            if (data.PlayerBHatch && data.PlayerBHatch > 0) {
                this.GetMachine().playerList[1].HatchDigitama();
            }
            if (data.PlayerADiscardDeck && data.PlayerADiscardDeck > 0) {
                this.GetMachine().manager.OnDiscardDeckTopCard(null, this.GetMachine().playerList[0], data.PlayerADiscardDeck);
            }
            if (data.PlayerBDiscardDeck && data.PlayerBDiscardDeck > 0) {
                this.GetMachine().manager.OnDiscardDeckTopCard(null, this.GetMachine().playerList[1], data.PlayerBDiscardDeck);
            }
            if (data.PlayerABattle) {
                data.PlayerABattle.forEach((card) => {
                    this.GetMachine().playerList[0].CreateCardOutDeck(card);
                });
            }
            if (data.PlayerBBattle) {
                data.PlayerBBattle.forEach((card) => {
                    this.GetMachine().playerList[1].CreateCardOutDeck(card);
                });
            }
            if (data.PlayerAGM && data.PlayerAGM != "") {
                let sp = data.PlayerAGM.split(";");
                if (sp && sp.length > 0) {
                    for (let i = 0; i < sp.length; i++) {
                        this.GetMachine().manager.OnGm(this.GetMachine().playerList[0].playerId, "C:" + sp[i]);
                    }
                }
            }
            if (data.PlayerBGM && data.PlayerBGM != "") {
                let sp = data.PlayerBGM.split(";");
                if (sp && sp.length > 0) {
                    for (let i = 0; i < sp.length; i++) {
                        this.GetMachine().manager.OnGm(this.GetMachine().playerList[1].playerId, "C:" + sp[i]);
                    }
                }
            }
            if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.RIDDLE_MODE)) {
                this.GetMachine().manager.DirectWaitSystem();
            }
        }
        else {
            for (let i = 0; i < 5; i++) {
                this.GetMachine().playerList[0].DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
            }
            for (let i = 0; i < 5; i++) {
                this.GetMachine().playerList[1].DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.Draw);
            }
            for (let i = 0; i < 5; i++) {
                this.GetMachine().playerList[0].SetDefenseCard();
            }
            for (let i = 0; i < 5; i++) {
                this.GetMachine().playerList[1].SetDefenseCard();
            }
        }
        return true;
    }
}
exports.DtFsmGameMain_StartBattle = DtFsmGameMain_StartBattle;
//# sourceMappingURL=DtFsmGameMain_StartBattle.js.map