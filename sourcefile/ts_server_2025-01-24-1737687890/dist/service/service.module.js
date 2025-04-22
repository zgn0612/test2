"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModule = void 0;
const common_1 = require("@nestjs/common");
const fight_service_1 = require("./fight_server/fight.service");
const mongoose_1 = require("@nestjs/mongoose");
const serverInfo_schema_1 = require("./db_server/server_info/schemas/serverInfo.schema");
const serverInfo_service_1 = require("./db_server/server_info/serverInfo.service");
const etcd_service_1 = require("./etcd_server/etcd.service");
const database_config_1 = require("../config/database.config");
const replay_service_1 = require("./replay_server/replay.service");
const mongoConfig = (0, database_config_1.getMongoConfig)();
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async () => ({
                    uri: mongoConfig.Addr,
                    ...(mongoConfig.Addr.startsWith('mongodb+srv') ? {} : { auth: { username: mongoConfig.User, password: mongoConfig.Pwd } }),
                    dbName: mongoConfig.DB,
                }),
            }),
            mongoose_1.MongooseModule.forFeature([{ name: serverInfo_schema_1.ServerInfo.name, schema: serverInfo_schema_1.ServerInfoSchema }]),
        ],
        providers: [fight_service_1.FightService, serverInfo_service_1.ServerInfoService, etcd_service_1.EtcdService, replay_service_1.FileWriterService],
        exports: [fight_service_1.FightService, serverInfo_service_1.ServerInfoService, etcd_service_1.EtcdService, replay_service_1.FileWriterService]
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map