"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmGameMain_Init = void 0;
const Long_1 = require("../../../../../cmn/proto/Long");
const protoMsg_1 = require("../../../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const DtCard_1 = require("../../../Card/DtCard");
const DtRefreeCheckBattle_1 = require("../../../Card/Effect/Refree/DtRefreeCheckBattle");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtPlayer_1 = require("../../../Player/DtPlayer");
const DtFsmGameMain_BaseState_1 = require("./DtFsmGameMain_BaseState");
const DtFsmGameMain_StartBattle_1 = require("./DtFsmGameMain_StartBattle");
class DtFsmGameMain_Init extends DtFsmGameMain_BaseState_1.DtFsmGameMain_BaseState {
    card1 = [101003, 101003, 101003, 101003, 101006, 101006, 101007, 101007, 101007, 101007, 101009, 101009, 101009, 101009, 101011, 101011, 101011, 101011, 101016, 101016, 115010, 115010, 115010, 115010, 115021, 115021, 115021, 115021, 115025, 115025, 115025, 115025, 115085, 115085, 115085, 115085, 117097, 118099, 107002, 107002, 107002, 107002, 107006, 107006, 107006, 107006, 130035, 130035, 130035, 130035,];
    card2 = [119007, 119007, 119007, 119007,
        115010, 115010, 115010, 115010,
        101003, 101003, 101003, 101003,
        130001, 130001,
        119010, 119010, 119010, 119010,
        101007, 101007, 101007, 101007,
        101006, 101006, 101006,
        101009, 101009,
        119015, 119015, 119015, 119015,
        118017, 118017,
        119016, 119016,
        118019, 118019,
        117018, 117018,
        119111,
        119086, 119086, 119086,
        119092, 119092, 119092,
        118092, 118092,
        101016, 101016,];
    Init() {
        this.phaseState = DtEnum_1.DtBattlePhase.Init;
    }
    Enter() {
        this.step = 0;
        this.lstStep = new Array();
        this.AddStep(this.StepInitPlayer);
        this.AddStep(this.CheckPlayerEvent);
        this.AddStep(this.StartBattle);
    }
    Excute() {
        this.ExcuteStep(false);
    }
    StepInitPlayer() {
        this.InitRefereePlayer();
        this.InitPlayer();
        if (this.GetMachine().curTrunPlayerId == null) {
            let index = _Dcg_1.gFun.Random(0, 1);
            this.GetMachine().curTrunPlayerId = this.GetMachine().playerList[index].playerId;
        }
        this.GetMachine().manager.Get2ClientMessageMgr().ClientGameEvent(DtEnum_1.DtPlayerGameEvent.GameInitOK);
        this.GetMachine().manager.playerTimeOut.SetGameTimeOut(30);
        return true;
    }
    CheckPlayerEvent() {
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.RIDDLE_MODE)) {
            return true;
        }
        if (this.GetMachine().playerList[0].roundData.clientGameEvent == 0) {
            return false;
        }
        if (this.GetMachine().playerList[1].roundData.clientGameEvent == 0) {
            return false;
        }
        return true;
    }
    StartBattle() {
        this.GetMachine().ChangeState(DtFsmGameMain_StartBattle_1.DtFsmGameMain_StartBattle.name);
        return true;
    }
    InitRefereePlayer() {
        let referee = new DtPlayer_1.DtPlayer(new Long_1.Long(-1000), this.GetMachine().manager);
        this.GetMachine().refereePlayer = referee;
        let checkAtkZeroAndCardCannotInBattle = new DtCard_1.DtCard(referee, Long_1.Long.fromNumber(-10000), 0);
        referee.areaInBattle.PushCard(checkAtkZeroAndCardCannotInBattle);
        let checkBattle = new DtRefreeCheckBattle_1.default();
        checkBattle.Init(checkAtkZeroAndCardCannotInBattle);
    }
    InitPlayer() {
        let roomData = this.GetMachine().manager.roomData;
        let role1 = roomData.room.FightRoleA.OtherRole;
        let mainPlayer = new DtPlayer_1.DtPlayer(role1.InstanceId, this.GetMachine().manager, roomData.playerACardId);
        this.GetMachine().playerList.push(mainPlayer);
        let role2 = roomData.room.FightRoleB.OtherRole;
        let oppPlayer = new DtPlayer_1.DtPlayer(role2.InstanceId, this.GetMachine().manager, roomData.playerBCardId);
        this.GetMachine().playerList.push(oppPlayer);
        if (roomData.room.FightRoleA.DeckInfo == null) {
            mainPlayer.Init(this.Luanxu(this.card1), [115001, 115001, 115001, 115001]);
        }
        else {
            let cards = this.Luanxu(this.getServerCards(roomData.room.FightRoleA.DeckInfo.CardDeck));
            let eggs = this.Luanxu(this.getServerCards(roomData.room.FightRoleA.DeckInfo.CardEgg));
            mainPlayer.Init(cards, eggs);
        }
        if (roomData.room.FightRoleB.DeckInfo == null) {
            oppPlayer.Init(this.Luanxu(this.card1), [119001, 119001, 119001, 119001]);
        }
        else {
            let cards = this.Luanxu(this.getServerCards(roomData.room.FightRoleB.DeckInfo.CardDeck));
            let eggs = this.Luanxu(this.getServerCards(roomData.room.FightRoleB.DeckInfo.CardEgg));
            oppPlayer.Init(cards, eggs);
        }
        this.GetMachine().manager.Get2ClientMessageMgr().InitMessage(mainPlayer, oppPlayer);
        let playbackData = new protoMsg_1.DcgProto.S_ReplayBattleData();
        playbackData.Cost = roomData.cost;
        playbackData.CustomRule = roomData.Custom;
        playbackData.Round = roomData.round;
        playbackData.Seed = Long_1.Long.fromNumber(this.GetMachine().manager.Random.seed);
        playbackData.ActionPlayerId = this.GetMachine().curTrunPlayerId;
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoSortInStartBattle)) {
            playbackData.RoomType = roomData.type | DtMessageData_1.DtRoomType.IsReplay;
        }
        else {
            playbackData.RoomType = roomData.type | DtMessageData_1.DtRoomType.NoSortInStartBattle | DtMessageData_1.DtRoomType.IsReplay;
        }
        let playerA = new protoMsg_1.DcgProto.S_ReplayPlayerData();
        playerA.PlayerId = role1.InstanceId;
        playerA.NickName = role1.NickName;
        playerA.StartCardId = mainPlayer.roundData.startCardId;
        playerA.Deck = mainPlayer.areaDeck.GetPlaybackInfo();
        playerA.Digitama = mainPlayer.areaDigitama.GetPlaybackInfo();
        playbackData.PlayerA = playerA;
        let playerB = new protoMsg_1.DcgProto.S_ReplayPlayerData();
        playerB.PlayerId = role2.InstanceId;
        playerB.NickName = role2.NickName;
        playerB.StartCardId = oppPlayer.roundData.startCardId;
        playerB.Deck = oppPlayer.areaDeck.GetPlaybackInfo();
        playerB.Digitama = oppPlayer.areaDigitama.GetPlaybackInfo();
        playbackData.PlayerB = playerB;
        this.GetMachine().gameInitPlaybackData = playbackData;
    }
    getServerCards(cards) {
        let arr = new Array();
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards[i].Num; j++) {
                arr.push(cards[i].CfgId);
            }
        }
        return arr;
    }
    Luanxu(card) {
        if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoSortInStartBattle)) {
            return card;
        }
        let repeat = false;
        let indexArray = new Array(card.length);
        for (let i = 0; i < indexArray.length; i++) {
            repeat = false;
            let rand = Math.floor(Math.random() * indexArray.length);
            for (let k = 0; k < i; k++) {
                if (indexArray[k] == rand) {
                    i--;
                    repeat = true;
                    break;
                }
            }
            if (repeat == false) {
                indexArray[i] = rand;
            }
        }
        let ranArray = new Array(card.length);
        for (let i = 0; i < ranArray.length; i++) {
            let index = indexArray[i];
            ranArray[i] = card[index];
        }
        return ranArray;
    }
}
exports.DtFsmGameMain_Init = DtFsmGameMain_Init;
//# sourceMappingURL=DtFsmGameMain_Init.js.map