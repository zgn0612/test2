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
exports.ServerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const protoMsg_1 = require("../../service/fight_server/cmn/proto/protoMsg");
const fight_service_1 = require("../../service/fight_server/fight.service");
const serverLoggingInterceptor_1 = require("../../common/interceptor/serverLoggingInterceptor");
const logger = new common_1.Logger("ServerController");
let ServerController = class ServerController {
    service;
    fightService;
    constructor(service) {
        this.service = service;
        this.fightService = service;
    }
    create(data) {
        let errorCode = this.fightService.onCreate(data.RoomIID);
        return { ErrorCode: errorCode, RespMsg: null };
    }
    init(data) {
        let reqBattleInit = protoMsg_1.DcgProto.Req_Remote2TsBattleInit.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqBattleInit));
        let [errorCode, respMsg] = this.fightService.onInit(data.RoomIID, reqBattleInit);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattleInit.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattleInit.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    ready(data) {
        let reqBattleReady = protoMsg_1.DcgProto.Req_Remote2TsBattleReady.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqBattleReady));
        let [errorCode, respMsg] = this.fightService.onReady(data.RoomIID, reqBattleReady);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattleReady.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattleReady.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    turn(data) {
        let [errorCode, respMsg] = this.fightService.onTurn(data.RoomIID);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsTurn.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsTurn.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    offset(data) {
        let reqOffset = protoMsg_1.DcgProto.Req_Remote2TsOffset.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqOffset));
        let errorCode = this.fightService.onOffset(data.RoomIID, reqOffset);
        return { ErrorCode: errorCode, RespMsg: null };
    }
    battle(data) {
        let reqBattle = protoMsg_1.DcgProto.Req_Remote2TsBattle.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqBattle));
        let [errorCode, respMsg] = this.fightService.onBattle(data.RoomIID, reqBattle);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattle.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattle.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    quit(data) {
        let reqQuit = protoMsg_1.DcgProto.Req_Remote2TsBattleQuit.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqQuit));
        let [errorCode, respMsg] = this.fightService.onQuit(data.RoomIID, reqQuit);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattleQuit.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattleQuit.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    destroy(data) {
        let errorCode = this.fightService.onDestroy(data.RoomIID);
        return { ErrorCode: errorCode, RespMsg: null };
    }
    reconnect(data) {
        let reqReconnect = protoMsg_1.DcgProto.Req_Remote2TsBattleReconnect.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqReconnect));
        let [errorCode, respMsg] = this.fightService.onReconnect(data.RoomIID, reqReconnect);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattleReconnect.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattleReconnect.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    gm(data) {
        let reqGm = protoMsg_1.DcgProto.Req_Remote2TsGm.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqGm));
        let [errorCode, respMsg] = this.fightService.onBattleGm(data.RoomIID, reqGm);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsGm.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsGm.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    battleMsg(data) {
        let reqBattleMsg = protoMsg_1.DcgProto.Req_Remote2TsBattleMsg.decode(data.ReqMsg ? data.ReqMsg : new Uint8Array(0));
        logger.log("req parserMsg:" + JSON.stringify(reqBattleMsg));
        let [errorCode, respMsg] = this.fightService.onBattleMsg(data.RoomIID, reqBattleMsg);
        let uint8 = protoMsg_1.DcgProto.Resp_Remote2TsBattleMsg.encode(respMsg ? respMsg : protoMsg_1.DcgProto.Resp_Remote2TsBattleMsg.create()).finish();
        logger.log("resp parserMsg: " + JSON.stringify(respMsg));
        return { ErrorCode: errorCode, RespMsg: uint8 };
    }
    ping(data) {
        let errorCode = this.fightService.onPing(data.RoomIID);
        return { ErrorCode: errorCode, RespMsg: null };
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "create", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "init", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "ready", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "turn", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "offset", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "battle", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "quit", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "destroy", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "reconnect", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "gm", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "battleMsg", null);
__decorate([
    (0, microservices_1.GrpcMethod)('FightService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ServerController.prototype, "ping", null);
ServerController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(serverLoggingInterceptor_1.ServerLoggingInterceptor),
    __metadata("design:paramtypes", [fight_service_1.FightService])
], ServerController);
exports.ServerController = ServerController;
//# sourceMappingURL=server.controller.js.map