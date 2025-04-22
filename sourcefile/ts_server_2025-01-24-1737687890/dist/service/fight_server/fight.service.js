"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightService = void 0;
const common_1 = require("@nestjs/common");
const protoMsg_1 = require("./cmn/proto/protoMsg");
const _Dcg_1 = require("./cmn/_Dcg");
const Long = require("long");
const serverInfo_service_1 = require("../db_server/server_info/serverInfo.service");
const replay_service_1 = require("../replay_server/replay.service");
let FightService = class FightService {
    serverInfoService;
    fileWriterService;
    logger;
    constructor(serverInfoService, fileWriterService) {
        this.serverInfoService = serverInfoService;
        this.fileWriterService = fileWriterService;
        this.logger = new common_1.Logger("FightService");
    }
    onModuleInit() {
        this.logger.log("--加载业务相关配置数据-->");
        _Dcg_1.roomMgr.InitRoomMgr(this);
        _Dcg_1.gCfg.initCfg();
        this.initServerInfo();
    }
    async initServerInfo() {
        let serverInfos = await this.serverInfoService.findAll();
        serverInfos.forEach(serverInfo => {
            _Dcg_1.roomMgr.onTimeOffsetSec(Long.fromNumber(serverInfo.OffsetSec));
            let date = new Date(_Dcg_1.roomMgr.GetServerTime().toNumber() * 1000);
            this.logger.debug("--->initServerInfo() iid:" + serverInfo._id + " serverTime:" + date.toLocaleString() + " timeOffsetSec:" + _Dcg_1.roomMgr.GetTimeOffsetSec());
        });
    }
    onCreate(roomIID) {
        return _Dcg_1.roomMgr.onCreateRoom(roomIID);
    }
    onInit(roomIID, reqBattleInit) {
        let respBattleInit = protoMsg_1.DcgProto.Resp_Remote2TsBattleInit.create();
        try {
            let [errcode, msg] = _Dcg_1.roomMgr.onInitRoom(roomIID, reqBattleInit);
            respBattleInit.BattleMsg = msg;
            return [errcode, respBattleInit];
        }
        catch (error) {
            this.logger.error("-------------onInit-->" + roomIID + "---> error:" + error);
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_DATA_EXCEPTION, respBattleInit];
        }
    }
    onReady(roomIID, reqBattleReady) {
        let respBattleReady = protoMsg_1.DcgProto.Resp_Remote2TsBattleReady.create();
        try {
            let [errcode, msg] = _Dcg_1.roomMgr.onReadyRoom(roomIID, reqBattleReady);
            respBattleReady.BattleMsg = msg;
            return [errcode, respBattleReady];
        }
        catch (error) {
            this.logger.error("-------------onReady-->" + roomIID + "---> error:" + error);
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_DATA_EXCEPTION, respBattleReady];
        }
    }
    onTurn(roomIID) {
        let respBattle = protoMsg_1.DcgProto.Resp_Remote2TsTurn.create();
        try {
            let [errcode, battleResult, battleTask, msg] = _Dcg_1.roomMgr.onTurnRoom(roomIID);
            respBattle.BattleMsg = msg;
            respBattle.BattleResult = battleResult;
            respBattle.BattleTask = battleTask;
            return [errcode, respBattle];
        }
        catch (error) {
            this.logger.error("-------------onTurn-->" + roomIID + "---> error:" + error);
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_DATA_EXCEPTION, respBattle];
        }
    }
    onBattle(roomIID, reqBattle) {
        let respBattle = protoMsg_1.DcgProto.Resp_Remote2TsBattle.create();
        try {
            let [errcode, battleResult, battleTask, msg] = _Dcg_1.roomMgr.onBattle(roomIID, reqBattle);
            respBattle.BattleMsg = msg;
            respBattle.BattleResult = battleResult;
            respBattle.BattleTask = battleTask;
            return [errcode, respBattle];
        }
        catch (error) {
            this.logger.error("-------------onBattle error-->" + roomIID + "---> error:" + error);
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_DATA_EXCEPTION, respBattle];
        }
    }
    onQuit(roomIID, reqQuit) {
        let respQuit = protoMsg_1.DcgProto.Resp_Remote2TsBattleQuit.create();
        try {
            let [errcode, battleResult, battleTask, msg] = _Dcg_1.roomMgr.onQuit(roomIID, reqQuit.AccountIID);
            respQuit.BattleMsg = msg;
            respQuit.BattleResult = battleResult;
            respQuit.BattleTask = battleTask;
            return [errcode, respQuit];
        }
        catch (error) {
            this.logger.error("-------------onQuit-->" + roomIID + "---> error:" + error);
            return [protoMsg_1.DcgProto.E_ErrorCode.ERROR_DATA_EXCEPTION, respQuit];
        }
    }
    onDestroy(roomIID) {
        return _Dcg_1.roomMgr.onDestroy(roomIID);
    }
    onReconnect(roomIID, reqReconnect) {
        let [errcode, msg] = _Dcg_1.roomMgr.GetReconnectData(roomIID, reqReconnect.AccountIID);
        let respReconnect = protoMsg_1.DcgProto.Resp_Remote2TsBattleReconnect.create();
        respReconnect.ReconnectData = msg;
        return [errcode, respReconnect];
    }
    onBattleMsg(roomIID, reqBattleMsg) {
        let [errcode, msg] = _Dcg_1.roomMgr.GetBattleMsg(roomIID, reqBattleMsg.FrameIndex);
        let respBattleMsg = protoMsg_1.DcgProto.Resp_Remote2TsBattleMsg.create();
        respBattleMsg.BattleMsg = msg;
        return [errcode, respBattleMsg];
    }
    onBattleGm(roomIID, reqGm) {
        let [errcode, battleResult, battleTask, msg] = _Dcg_1.roomMgr.onBattleGm(roomIID, reqGm);
        let respGm = protoMsg_1.DcgProto.Resp_Remote2TsGm.create();
        respGm.BattleMsg = msg;
        respGm.BattleResult = battleResult;
        respGm.BattleTask = battleTask;
        return [errcode, respGm];
    }
    onOffset(roomIID, reqOffset) {
        _Dcg_1.roomMgr.onTimeOffsetSec(reqOffset.OffsetSec);
        return protoMsg_1.DcgProto.E_ErrorCode.SUCCESS;
    }
    onPing(roomIID) {
        return protoMsg_1.DcgProto.E_ErrorCode.SUCCESS;
    }
    onReplay(replay) {
        if (replay == null) {
            return;
        }
        this.saveReplay(replay.RoomMode, replay.RoomIID, replay);
    }
    saveReplay(roomMode, roomIID, replay, useBinary = true) {
        const fileName = `${roomMode}_${roomIID}.dat`;
        let data;
        if (useBinary) {
            const replayBuffer = protoMsg_1.DcgProto.S_FightReplay.encode(replay).finish();
            data = Buffer.from(replayBuffer);
        }
        else {
            data = JSON.stringify(replay);
        }
        this.fileWriterService.addTask(fileName, data, useBinary);
    }
    onApplicationShutdown(signal) {
        this.logger.log("application is shutting down...");
        this.fileWriterService.writeTasks();
    }
};
FightService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [serverInfo_service_1.ServerInfoService, replay_service_1.FileWriterService])
], FightService);
exports.FightService = FightService;
//# sourceMappingURL=fight.service.js.map