"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleManagerWithMsg = void 0;
const DtBattleManager_1 = require("../battle/dtcg/DtBattleManager");
const Singleton_1 = require("./Singleton");
const _Dcg_1 = require("./_Dcg");
const protoMsg_1 = require("./proto/protoMsg");
const DtMessageData_1 = require("../battle/dtcg/Message/DtMessageData");
const Long = require("long");
const DtcgConvertMessage_1 = require("../battle/dtcg/Message/DtcgConvertMessage");
const AIRoom_1 = require("../battle/aimgr/AIRoom");
const DtEnum_1 = require("../battle/dtcg/Data/DtEnum");
class BattleManagerWithMsg {
    manager;
    msg;
    battleResult;
    battleMsg;
    currentWaitPlayerId;
    battleTask;
    gameOverTask;
    convertMessage;
    fightAID;
    fightBID;
    replayFile;
    AIRoom;
    roomPanel;
    constructor() {
        this.manager = new DtBattleManager_1.DtBattleManager();
        this.msg = new Array();
        this.battleMsg = new Array();
        this.battleTask = new protoMsg_1.DcgProto.S_BattleTask();
        this.convertMessage = new DtcgConvertMessage_1.DtcgConvertMessage();
        this.replayFile = new protoMsg_1.DcgProto.S_FightReplay();
        this.replayFile.PlayerOperates = new Array();
    }
    Init(serverRoomInfo) {
        let serverRoomData = serverRoomInfo.RoomData;
        this.roomPanel = serverRoomInfo.RoomPanel;
        let ai = new AIRoom_1.AIRoom();
        ai.CheckBattleNeedAI(serverRoomData, this);
        if (ai.HasAI()) {
            this.AIRoom = ai;
        }
        let roomData = new DtMessageData_1.DtRoomData();
        roomData.type = DtMessageData_1.DtRoomType.BATTLE_CARD_LIMIT;
        roomData.battleCardLimit = 10;
        roomData.roomId = serverRoomData.InstanceId.toString();
        roomData.room = serverRoomData;
        roomData.actionPlayerId = serverRoomData.Ready.FirstAtkAccountIID;
        this.fightAID = roomData.room.FightRoleA.OtherRole.InstanceId;
        this.fightBID = roomData.room.FightRoleB.OtherRole.InstanceId;
        this.manager.InitBattle(roomData);
        this.manager.Run();
        this.replayFile.RoomIID = serverRoomData.InstanceId;
        this.replayFile.CreateTime = serverRoomData.CreateTime;
        this.replayFile.RoomMode = serverRoomData.RoomMode;
        this.replayFile.BattleData = this.manager.GetPlaybackInitData();
        if (this.replayFile.BattleData && this.replayFile.BattleData.PlayerA && this.replayFile.BattleData.PlayerB) {
            if (this.replayFile.BattleData.PlayerA.PlayerId.equals(serverRoomData.FightRoleA.OtherRole.InstanceId)) {
                this.SaveReplayPlayerInfoData(this.replayFile.BattleData.PlayerA, serverRoomData.FightRoleA.OtherRole);
                this.SaveReplayPlayerInfoData(this.replayFile.BattleData.PlayerB, serverRoomData.FightRoleB.OtherRole);
            }
            else {
                this.SaveReplayPlayerInfoData(this.replayFile.BattleData.PlayerA, serverRoomData.FightRoleB.OtherRole);
                this.SaveReplayPlayerInfoData(this.replayFile.BattleData.PlayerB, serverRoomData.FightRoleA.OtherRole);
            }
        }
    }
    SaveReplayPlayerInfoData(replayData, roleData) {
        replayData.Level = roleData.Level;
        replayData.Icon = roleData.Icon;
        replayData.IconFrame = roleData.IconFrame;
        replayData.Paper = roleData.Paper;
        replayData.TitleIds = replayData.TitleIds;
    }
    PushMsg(msg) {
        if (this.AIRoom) {
            this.AIRoom.RunMsg(msg);
        }
        this.msg.push(msg);
    }
    TakeMsg() {
        if (this.msg.length > 0) {
            let battleMsg = protoMsg_1.DcgProto.S_BattleMsg.create();
            let [fightA, fightB, viewer] = this.parserMsg(this.msg);
            battleMsg.FightA = fightA;
            battleMsg.FightB = fightB;
            battleMsg.Viewer = viewer;
            battleMsg.FrameIndex = this.battleMsg.length;
            battleMsg.CurrRoundRoleIID = this.currentWaitPlayerId;
            if (this.manager != null && this.manager.IsClear() == false) {
                battleMsg.EndTurnTime = Math.ceil(this.manager.playerTimeOut.GetCurrnetOutTime() / 1000);
            }
            if (this.NeedAIRun()) {
                let t = _Dcg_1.roomMgr.GetServerTimeNumber() + 3000;
                battleMsg.EndTurnTime = Math.ceil(t / 1000);
            }
            this.msg = new Array();
            this.battleMsg.push(battleMsg);
            return battleMsg;
        }
        return null;
    }
    NeedAIRun() {
        if (this.AIRoom) {
            if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.Init) {
                let playerlist = this.manager.GetAllPlayer();
                for (let i = 0; i < playerlist.length; i++) {
                    this.AIRoom.AISetGameMainInit(playerlist[i]);
                }
                return false;
            }
            else if (this.manager.GetCurrentPahse() == DtEnum_1.DtBattlePhase.StartBattle) {
                let playerlist = this.manager.GetAllPlayer();
                let check = false;
                for (let i = 0; i < playerlist.length; i++) {
                    if (this.AIRoom.CheckAINeedChangeCards(playerlist[i])) {
                        check = true;
                    }
                }
                return check;
            }
            else {
                return this.AIRoom.IsWaitAI();
            }
        }
        return false;
    }
    RunAI() {
        if (this.AIRoom) {
            if (this.AIRoom.IsWaitAI()) {
                this.AIRoom.RunAI();
                return true;
            }
        }
        return false;
    }
    CanGetMsg() {
        return this.msg.length > 0;
    }
    TakeBattleTask() {
        return this.GetBattleTask(true);
    }
    GameOver() {
        this.gameOverTask = new protoMsg_1.DcgProto.S_BattleTask();
        this.gameOverTask.PlayerTask = new Array();
        let players = this.manager.GetAllPlayer();
        for (let i = 0; i < players.length; i++) {
            this.gameOverTask.PlayerTask.push(players[i].roundData.playerLog);
        }
    }
    GetBattleTask(getall) {
        let msg = new protoMsg_1.DcgProto.S_BattleTask();
        msg.PlayerTask = new Array();
        if (this.manager.IsClear()) {
            if (this.gameOverTask == null) {
                return null;
            }
            if (getall) {
                return this.gameOverTask;
            }
            else {
                for (let i = 0; i < this.gameOverTask.PlayerTask.length; i++) {
                    let def = this.GetDefPlayerLog(this.gameOverTask.PlayerTask.length[i]);
                    msg.PlayerTask.push(def);
                }
            }
        }
        else {
            let players = this.manager.GetAllPlayer();
            if (getall) {
                for (let i = 0; i < players.length; i++) {
                    msg.PlayerTask.push(players[i].roundData.playerLog);
                }
            }
            else {
                for (let i = 0; i < players.length; i++) {
                    let def = this.GetDefPlayerLog(players[i].roundData.playerLog);
                    msg.PlayerTask.push(def);
                }
            }
        }
        return msg;
    }
    GetDefPlayerLog(data) {
        let msg = new protoMsg_1.DcgProto.S_BattlePlayerTask();
        msg.PlayerIID = data.PlayerIID;
        let savedata = this.GetSaveLogData(data.PlayerIID);
        msg.AttackCount = data.AttackCount - savedata.AttackCount;
        msg.AttackDefenseCount = data.AttackDefenseCount - savedata.AttackDefenseCount;
        msg.BlockOppAttackCount = data.BlockOppAttackCount - savedata.BlockOppAttackCount;
        msg.DrawCardNum = data.DrawCardNum - savedata.DrawCardNum;
        msg.KillMonsterNum = data.KillMonsterNum - savedata.KillMonsterNum;
        savedata.AttackCount = data.AttackCount;
        savedata.AttackDefenseCount = data.AttackDefenseCount;
        savedata.BlockOppAttackCount = data.BlockOppAttackCount;
        savedata.DrawCardNum = data.DrawCardNum;
        savedata.KillMonsterNum = data.KillMonsterNum;
        return msg;
    }
    GetSaveLogData(playerid) {
        for (let i = 0; i < this.battleTask.PlayerTask.length; i++) {
            if (this.battleTask.PlayerTask[i].PlayerIID.equals(playerid)) {
                return this.battleTask.PlayerTask[i];
            }
        }
        let data = new protoMsg_1.DcgProto.S_BattlePlayerTask();
        data.PlayerIID = playerid;
        this.battleTask.PlayerTask.push(data);
        return data;
    }
    parserMsg(msg) {
        let figthA = new Array();
        let figthB = new Array();
        let viewer = new Array();
        for (let i = 0; i < msg.length; i++) {
            figthA.push(this.ConvertMsg(msg[i], this.fightAID));
            figthB.push(this.ConvertMsg(msg[i], this.fightBID));
            viewer.push(this.ConvertMsg(msg[i], null));
        }
        return [figthA, figthB, viewer];
    }
    ConvertMsg(msg, playerId) {
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        if (msg.BattleStartMsg != null) {
            fight.BattleStartMsg = this.convertMessage.ConvertMessageAppointPlayer(msg.BattleStartMsg, playerId);
        }
        if (msg.SetBattlePhase != null) {
            fight.SetBattlePhase = this.convertMessage.ConvertMessageAppointPlayer(msg.SetBattlePhase, playerId);
        }
        if (msg.DigimonSetCost != null) {
            fight.DigimonSetCost = this.convertMessage.ConvertMessageAppointPlayer(msg.DigimonSetCost, playerId);
        }
        if (msg.GameOver != null) {
            fight.GameOver = this.convertMessage.ConvertMessageAppointPlayer(msg.GameOver, playerId);
        }
        if (msg.MoveCardMessage != null) {
            fight.MoveCardMessage = this.convertMessage.ConvertMessageAppointPlayer(msg.MoveCardMessage, playerId);
        }
        if (msg.EvoDigimon != null) {
            fight.EvoDigimon = this.convertMessage.ConvertMessageAppointPlayer(msg.EvoDigimon, playerId);
        }
        if (msg.UpdateCardDetails != null) {
            fight.UpdateCardDetails = this.convertMessage.ConvertMessageAppointPlayer(msg.UpdateCardDetails, playerId);
        }
        if (msg.PlayerChoose != null) {
            fight.PlayerChoose = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerChoose, playerId);
        }
        if (msg.PlayerDefenseSelect != null) {
            fight.PlayerDefenseSelect = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerDefenseSelect, playerId);
        }
        if (msg.PlayerSelectOptions != null) {
            fight.PlayerSelectOptions = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerSelectOptions, playerId);
        }
        if (msg.ClientShow != null) {
            fight.ClientShow = this.convertMessage.ConvertMessageAppointPlayer(msg.ClientShow, playerId);
        }
        if (msg.BattleDetail != null) {
            fight.BattleDetail = this.convertMessage.ConvertMessageAppointPlayer(msg.BattleDetail, playerId);
        }
        if (msg.PlayerSelectEffectActivate != null) {
            fight.PlayerSelectEffectActivate = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerSelectEffectActivate, playerId);
        }
        if (msg.UpdateGameBattleCardInfo != null) {
            fight.UpdateGameBattleCardInfo = this.convertMessage.ConvertMessageAppointPlayer(msg.UpdateGameBattleCardInfo, playerId);
        }
        if (msg.DigimonDegenerate != null) {
            fight.DigimonDegenerate = this.convertMessage.ConvertMessageAppointPlayer(msg.DigimonDegenerate, playerId);
        }
        if (msg.PlayerExcavated != null) {
            fight.PlayerExcavated = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerExcavated, playerId);
        }
        if (msg.PlayerSceneEvent != null) {
            fight.PlayerSceneEvent = this.convertMessage.ConvertMessageAppointPlayer(msg.PlayerSceneEvent, playerId);
        }
        return fight;
    }
    IsFightPlayer(playerId) {
        if (this.fightAID.equals(playerId)) {
            return true;
        }
        if (this.fightBID.equals(playerId)) {
            return true;
        }
        return false;
    }
    GetReplayFile() {
        return this.replayFile;
    }
    SaveReplayPlayerOperate(playerId, type, op) {
        let operate = new protoMsg_1.DcgProto.S_ReplayPlayerOperate();
        operate.PlayerId = playerId;
        operate.Type = type;
        operate.Operate = op;
        this.replayFile.PlayerOperates.push(operate);
    }
    Clear() {
        if (this.AIRoom) {
            this.AIRoom.Clear();
        }
        this.msg.length = 0;
        this.battleMsg.length = 0;
    }
}
exports.BattleManagerWithMsg = BattleManagerWithMsg;
class _roomMgr extends Singleton_1.default {
    IsUseClientServer = false;
    managerMap;
    timeOffsetSec;
    service;
    InitRoomMgr(service) {
        this.service = service;
        this.managerMap = new Map();
        this.timeOffsetSec = Long.fromNumber(0);
    }
    onCreateRoom(roomIID) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            mgr = new BattleManagerWithMsg();
            this.managerMap.set(roomIID.toString(), mgr);
        }
        return protoMsg_1.DcgProto.E_ErrorCode.SUCCESS;
    }
    onInitRoom(roomIID, reqBattleInit) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null];
        }
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.TakeMsg()];
    }
    onReadyRoom(roomIID, reqBattleReady) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null];
        }
        mgr.Init(reqBattleReady.RoomInfo);
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.TakeMsg()];
    }
    onTurnRoom(roomIID) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null, null, null];
        }
        let isAIRun = mgr.RunAI();
        if (isAIRun == false) {
            if (!mgr.manager.RunTimeOut()) {
                return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, null, null, null];
            }
        }
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.battleResult, mgr.TakeBattleTask(), mgr.TakeMsg()];
    }
    onBattle(roomIID, reqBattle) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("On Battle  no room");
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null, null, null];
        }
        if (mgr.IsFightPlayer(reqBattle.AccountIID) == false) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_UNKNOWN, null, null, null];
        }
        let isPlayerAnimationOver = reqBattle.BattleParams.Action == protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SCENE_EVENT_PREPARED &&
            reqBattle.BattleParams.ParamNumber == DtEnum_1.DtPlayerGameEvent.AnimationPlayOver;
        if (isPlayerAnimationOver == false) {
            let deepCopy = protoMsg_1.DcgProto.S_BattleParams.encode(reqBattle.BattleParams).finish();
            mgr.SaveReplayPlayerOperate(reqBattle.AccountIID, 1, protoMsg_1.DcgProto.S_BattleParams.decode(deepCopy));
        }
        if (this.OnReceiveMsg(mgr.manager, reqBattle)) {
            mgr.manager.Run();
        }
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.battleResult, mgr.TakeBattleTask(), mgr.TakeMsg()];
    }
    OnAIBattle(roomIID, reqBattle) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("On Battle  no room");
            return;
        }
        let deepCopy = protoMsg_1.DcgProto.S_BattleParams.encode(reqBattle.BattleParams).finish();
        mgr.SaveReplayPlayerOperate(reqBattle.AccountIID, 1, protoMsg_1.DcgProto.S_BattleParams.decode(deepCopy));
        if (this.OnReceiveMsg(mgr.manager, reqBattle)) {
            mgr.manager.Run();
        }
    }
    onTimeOffsetSec(offsetSec) {
        this.timeOffsetSec = offsetSec;
    }
    onQuit(roomIID, accountIID) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("On Quit  no room");
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null, null, null];
        }
        if (mgr.IsFightPlayer(accountIID) == false) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_UNKNOWN, null, null, null];
        }
        mgr.SaveReplayPlayerOperate(accountIID, 3, null);
        mgr.manager.QuitGame(accountIID);
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.battleResult, mgr.TakeBattleTask(), mgr.TakeMsg()];
    }
    onDestroy(roomIID) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr != null) {
            mgr.Clear();
        }
        this.managerMap.delete(roomIID.toString());
        return protoMsg_1.DcgProto.E_ErrorCode.SUCCESS;
    }
    onBattleGm(roomIID, reqGm) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("onBattleGm no room");
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null, null, null];
        }
        if (mgr.IsFightPlayer(reqGm.AccountIID) == false) {
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_UNKNOWN, null, null, null];
        }
        let replay = new protoMsg_1.DcgProto.S_BattleParams();
        replay.Data = reqGm.GmParams.Data;
        mgr.SaveReplayPlayerOperate(reqGm.AccountIID, 2, replay);
        let result = mgr.manager.OnGm(reqGm.AccountIID, reqGm.GmParams.Data);
        if (result) {
            mgr.manager.Run();
        }
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, mgr.battleResult, mgr.TakeBattleTask(), mgr.TakeMsg()];
    }
    GetBattleMsg(roomIID, frameIndex) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("GetBattleMsg no room");
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null];
        }
        if (frameIndex < mgr.battleMsg.length) {
            const slicedArray = mgr.battleMsg.slice(frameIndex, mgr.battleMsg.length);
            return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, slicedArray];
        }
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, null];
    }
    GetReconnectData(roomIID, accountIID) {
        let mgr = this.managerMap.get(roomIID.toString());
        if (mgr == null) {
            _Dcg_1.gLog.err("GetReconnectData no room");
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_ROOM_NOT_FOUND, null];
        }
        let reconnectData = mgr.manager.Get2ClientMessageMgr().GetReconnectData(accountIID);
        return [protoMsg_1.DcgProto.E_ErrorCode.SUCCESS, reconnectData];
    }
    OnRoomTimeOut(battleMgr, playerid) {
        let mgr = this.managerMap.get(battleMgr.roomId);
        if (mgr == null) {
            _Dcg_1.gLog.err(" GameBattleLogicSendMsg  no room");
            return;
        }
        mgr.SaveReplayPlayerOperate(playerid, 4, null);
    }
    OnRoomGameEnd(battleMgr) {
        let mgr = this.managerMap.get(battleMgr.roomId);
        if (mgr == null) {
            _Dcg_1.gLog.err(" GameBattleLogicSendMsg  no room");
            return;
        }
        mgr.SaveReplayPlayerOperate(null, 5, null);
    }
    GameBattleLogicSendMsg(battleMgr, msg) {
        let mgr = this.managerMap.get(battleMgr.roomId);
        if (mgr == null) {
            _Dcg_1.gLog.err(" GameBattleLogicSendMsg  no room");
            return;
        }
        let fight = new protoMsg_1.DcgProto.S_RoomFight();
        if (msg instanceof protoMsg_1.DcgProto.S_BattleStartMsg) {
            fight.BattleStartMsg = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_SetBattlePhase) {
            fight.SetBattlePhase = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_DigimonSetCost) {
            fight.DigimonSetCost = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_GameOver) {
            fight.GameOver = msg;
            fight.GameOver.RoomPanel = mgr.roomPanel;
            mgr.PushMsg(fight);
            mgr.GameOver();
            let fightResult = new protoMsg_1.DcgProto.S_BattleResult();
            fightResult.PlayerResult = new Array();
            let players = mgr.manager.GetAllPlayer();
            for (let i = 0; i < players.length; i++) {
                let result = new protoMsg_1.DcgProto.S_PlayerResult();
                result.PlayerIID = players[i].playerId;
                if (msg.PlayerIID == result.PlayerIID) {
                    result.FightResult = protoMsg_1.DcgProto.E_FightResult.FIGHT_RESULT_WIN;
                }
                else {
                    result.FightResult = protoMsg_1.DcgProto.E_FightResult.FIGHT_RESULT_FAIL;
                }
                let pdata = this.GetPlayerData(mgr.manager.roomData.room, result.PlayerIID);
                if (pdata) {
                    result.NickName = pdata.NickName;
                    result.Icon = pdata.Icon;
                }
                fightResult.PlayerResult.push(result);
            }
            fightResult.TotalRound = mgr.manager.CurRound;
            mgr.battleResult = fightResult;
            this.service.onReplay(mgr.GetReplayFile());
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_MoveCardMessage) {
            fight.MoveCardMessage = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_EvoDigimon) {
            fight.EvoDigimon = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_UpdateCardDetails) {
            fight.UpdateCardDetails = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerChoose) {
            fight.PlayerChoose = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerDefenseSelect) {
            fight.PlayerDefenseSelect = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerSelectOptions) {
            fight.PlayerSelectOptions = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_ClientShow) {
            fight.ClientShow = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_BattleDetail) {
            fight.BattleDetail = msg;
            mgr.PushMsg(fight);
            mgr.currentWaitPlayerId = msg.WaitPlayerIID;
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerSelectEffectActivate) {
            fight.PlayerSelectEffectActivate = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_UpdateGameBattleCardInfo) {
            fight.UpdateGameBattleCardInfo = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_DigimonDegenerate) {
            fight.DigimonDegenerate = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerExcavated) {
            fight.PlayerExcavated = msg;
            mgr.PushMsg(fight);
            return;
        }
        if (msg instanceof protoMsg_1.DcgProto.S_PlayerSceneEvent) {
            fight.PlayerSceneEvent = msg;
            mgr.PushMsg(fight);
            return;
        }
    }
    GetPlayerData(rmData, pid) {
        if (rmData) {
            if (rmData.FightRoleA.OtherRole.InstanceId.equals(pid)) {
                return rmData.FightRoleA.OtherRole;
            }
            return rmData.FightRoleB.OtherRole;
        }
    }
    OnReceiveMsg(battleMgr, data) {
        if (battleMgr.IsClear()) {
            return false;
        }
        let msg = data.BattleParams;
        let playerId = data.AccountIID;
        switch (msg.Action) {
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_HATCH_DIGIMON:
                return battleMgr.OnPlayerHatchDigimon(playerId);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_CARD_PLAY:
                return battleMgr.OnDigimonCardPlay(playerId, msg.CardIIDA, msg.ParamNumber);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SET_NEXT_TURN:
                return battleMgr.OnPlayerSetNextTurn(playerId);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_BATTLE:
                return battleMgr.OnDigimonBattle(playerId, msg.CardIIDA, msg.CardIIDB);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_ATTACK_DEFENSE:
                return battleMgr.OnDigimonAttackDefense(playerId, msg.CardIIDA);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_DIGIMON_EVO:
                return battleMgr.OnDigimonEvo(playerId, msg.CardIIDA, msg.CardIIDB, msg.ParamNumber);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_CHOOSE_ONE:
                return battleMgr.OnPlayerChooseOne(playerId, msg.CardIIDA, msg.RequestId);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_CHOOSE_MUL:
                return battleMgr.OnPlayerChooseMul(playerId, msg.IIDList, msg.RequestId);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_USE_DIGIMON_EFFECT_IN_BATTLE:
                return battleMgr.OnPlayerUseDigimonEffectInBattle(playerId, msg.CardIIDA);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_USE_FUSION_EVO:
                return battleMgr.OnPlayerUseFusionEvo(playerId, msg.CardIIDA);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_SCENE_EVENT_PREPARED:
                return battleMgr.OnPlayerGameEvent(playerId, msg.ParamNumber);
            case protoMsg_1.DcgProto.E_FIGHT_ACTION.FC_ON_PLAYER_PLAYER_ACTIVATE_EFFECT:
                return battleMgr.OnPlayerChooseEffectActivateSortOrCancel(playerId, msg.NumberListA, msg.NumberListB, msg.RequestId);
        }
        return false;
    }
    ServerModeGameSendMsgToServer(data_req) {
    }
    ClientModeSendMsg(msg, pid) {
    }
    GetServerTimeNumber() {
        return this.GetServerTime().toNumber() * 1000;
    }
    GetServerTime() {
        return Long.fromNumber(Math.floor(Date.now() / 1000)).add(this.timeOffsetSec);
    }
    GetTimeOffsetSec() {
        return this.timeOffsetSec;
    }
}
exports.default = _roomMgr;
//# sourceMappingURL=roomMgr.js.map