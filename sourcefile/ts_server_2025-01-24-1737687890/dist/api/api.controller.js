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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const protoMsg_1 = require("../service/fight_server/cmn/proto/protoMsg");
const fight_service_1 = require("../service/fight_server/fight.service");
const Long = require("long");
let ApiController = class ApiController {
    service;
    fightService;
    logger = new common_1.Logger("ApiController");
    constructor(service) {
        this.service = service;
        this.fightService = service;
    }
    create(base64Data) {
        let roomIID1 = Long.fromString("307647758062321728");
        let roomIID2 = Long.fromString("307647758062321728");
        if (roomIID1.equals(roomIID2)) {
            console.log("true");
        }
        else {
            console.log("false");
        }
        let reqCreate = protoMsg_1.DcgProto.Req_Remote2TsBattleCreate.create();
        let respMsg = this.fightService.onCreate(roomIID1);
        return JSON.stringify(respMsg);
    }
    battle() {
        let roomIID = Long.fromString("307647758062321728");
        let cardIIDB = Long.fromInt(2);
        let reqBattle = protoMsg_1.DcgProto.Req_Remote2TsBattle.create();
        let respMsg = this.fightService.onBattle(roomIID, reqBattle);
        return JSON.stringify(respMsg);
    }
    destroy() {
        let roomIID = Long.fromString("1");
        let respMsg = this.fightService.onDestroy(roomIID);
        return JSON.stringify(respMsg);
    }
    postBattle() {
        let roomIID = Long.fromString("307647758062321728");
        let cardIIDB = Long.fromInt(2);
        let reqBattle = protoMsg_1.DcgProto.Req_Remote2TsBattle.create();
        let respMsg = this.fightService.onBattle(roomIID, reqBattle);
        return JSON.stringify(respMsg);
    }
    serverInfo(base64Data) {
        let reqCreate = protoMsg_1.DcgProto.Req_Remote2TsOffset.create();
        reqCreate.OffsetSec = Long.fromInt(0);
        let roomIID = Long.fromString("307647758062321728");
        let respMsg = this.fightService.onOffset(roomIID, reqCreate);
        return JSON.stringify(respMsg);
    }
    saveReplay(base64Data) {
        return "success";
    }
};
__decorate([
    (0, common_1.Get)("create"),
    __param(0, (0, common_1.Query)('binaryData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ApiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("battle"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiController.prototype, "battle", null);
__decorate([
    (0, common_1.Get)("destroy"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiController.prototype, "destroy", null);
__decorate([
    (0, common_1.Post)("battle"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiController.prototype, "postBattle", null);
__decorate([
    (0, common_1.Get)("serverInfo"),
    __param(0, (0, common_1.Query)('binaryData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ApiController.prototype, "serverInfo", null);
__decorate([
    (0, common_1.Get)("saveReplay"),
    __param(0, (0, common_1.Query)('binaryData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ApiController.prototype, "saveReplay", null);
ApiController = __decorate([
    (0, common_1.Controller)('api/fight'),
    __metadata("design:paramtypes", [fight_service_1.FightService])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map