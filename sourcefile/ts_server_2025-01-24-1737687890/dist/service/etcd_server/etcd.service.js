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
exports.EtcdService = void 0;
const common_1 = require("@nestjs/common");
const etcd3_1 = require("etcd3");
const server_entity_1 = require("./server.entity");
const uuid_1 = require("uuid");
const config_service_1 = require("../../config/config.service");
let EtcdService = class EtcdService {
    client;
    lease;
    serverMapByType = new Map();
    serverMapByID = new Map();
    syncServersInterval;
    heartbeatTTL;
    etcdPrefix;
    server;
    running = true;
    logger;
    configService;
    runMode = "develop";
    constructor() {
        this.logger = new common_1.Logger("EtcdService");
        this.heartbeatTTL = 60;
        this.syncServersInterval = 180 * 1000;
        this.etcdPrefix = "dcg";
        this.configService = new config_service_1.ConfigService({ folder: './config' });
        const serviceConfig = this.configService.getServiceConfig();
        if (!serviceConfig) {
            throw new Error(`serviceConfig  not found for service: ${process.argv}`);
        }
        this.runMode = this.configService.get("RunMode", "develop");
        if (this.runMode != "develop") {
            const etcdHost = this.configService.get('EtcdHost', 'localhost:2389');
            this.client = new etcd3_1.Etcd3({
                hosts: etcdHost,
            });
        }
    }
    async onModuleInit() {
        if (this.runMode == "develop") {
            return;
        }
        try {
            await this.registerService();
            this.startHeartbeat();
            this.startSyncServers();
            await this.watchEtcdChanges();
        }
        catch (error) {
            this.logger.error('Failed to initialize module', error.stack);
        }
    }
    async onModuleDestroy() {
        const mode = this.configService.get("RunMode");
        if (mode == "develop") {
            return;
        }
        this.running = false;
        if (this.lease) {
            try {
                await this.lease.revoke();
            }
            catch (error) {
                this.logger.error('Error revoking lease', error.stack);
            }
        }
        await this.client.close();
    }
    async registerService() {
        const serviceConfig = this.configService.getServiceConfig();
        const meta = {
            ["grpc-external-host"]: serviceConfig.GrpcSvHost,
            ["grpc-external-port"]: serviceConfig.GrpcSvPort.toString(),
            ["server-external-url"]: "",
        };
        const uuid = (0, uuid_1.v4)();
        this.server = new server_entity_1.Server(uuid, serviceConfig.SvType, false, meta);
        const key = `${this.etcdPrefix}/servers/${this.server.type}/${this.server.id}`;
        const value = this.server.asJSONString();
        this.lease = this.client.lease(this.heartbeatTTL);
        try {
            await this.lease.put(key).value(value);
            this.logger.log(`Service registered with key: ${key}`);
        }
        catch (error) {
            this.logger.error('Error registering service', error.stack);
        }
    }
    startHeartbeat() {
        this.lease.on('lost', async () => {
            this.logger.warn('Lease lost. Attempting to reestablish...');
            try {
                this.lease = this.client.lease(this.heartbeatTTL);
                await this.registerService();
            }
            catch (error) {
                this.logger.error('Error reestablishing lease', error.stack);
            }
        });
    }
    async startSyncServers() {
        while (this.running) {
            try {
                await this.syncServers();
            }
            catch (error) {
                this.logger.error('Error syncing servers', error.stack);
            }
            await new Promise(resolve => setTimeout(resolve, this.syncServersInterval));
        }
    }
    async syncServers() {
        const services = await this.client.getAll().prefix(`${this.etcdPrefix}/servers/`).strings();
        for (const [key, value] of Object.entries(services)) {
            try {
                const server = JSON.parse(value);
                if (!this.serverMapByID.has(server.id)) {
                    this.serverMapByID.set(server.id, server);
                    if (!this.serverMapByType.has(server.type)) {
                        this.serverMapByType.set(server.type, new Map());
                    }
                    this.serverMapByType.get(server.type).set(server.id, server);
                }
            }
            catch (error) {
                this.logger.error(`Error parsing server data for key ${key}`, error.stack);
            }
        }
    }
    async watchEtcdChanges() {
        try {
            const watcher = await this.client.watch()
                .prefix(`${this.etcdPrefix}/servers/`)
                .create();
            watcher
                .on('put', (res) => {
                const key = res.key.toString();
                const value = res.value.toString();
                this.handleEtcdPutEvent(key, value);
            })
                .on('delete', (res) => {
                const key = res.key.toString();
                this.handleEtcdDeleteEvent(key);
            });
            this.logger.log('Started watching etcd changes');
        }
        catch (error) {
            this.logger.error('Failed to watch etcd changes', error.stack);
        }
    }
    handleEtcdPutEvent(key, value) {
        try {
            const server = JSON.parse(value);
            if (!this.serverMapByID.has(server.id)) {
                this.serverMapByID.set(server.id, server);
                if (!this.serverMapByType.has(server.type)) {
                    this.serverMapByType.set(server.type, new Map());
                }
                this.serverMapByType.get(server.type).set(server.id, server);
            }
            else {
                const existingServer = this.serverMapByID.get(server.id);
                Object.assign(existingServer, server);
            }
            this.logger.debug(`Etcd PUT event handled for key: ${key}`);
        }
        catch (error) {
            this.logger.error(`Error handling PUT event for key ${key}`, error.stack);
        }
    }
    handleEtcdDeleteEvent(key) {
        const serverID = key.split('/').pop();
        if (this.serverMapByID.has(serverID)) {
            const server = this.serverMapByID.get(serverID);
            this.serverMapByID.delete(serverID);
            if (this.serverMapByType.has(server.type)) {
                const typeMap = this.serverMapByType.get(server.type);
                typeMap.delete(serverID);
                if (typeMap.size === 0) {
                    this.serverMapByType.delete(server.type);
                }
            }
            this.logger.debug(`Etcd DELETE event handled for key: ${key}`);
        }
    }
};
EtcdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EtcdService);
exports.EtcdService = EtcdService;
//# sourceMappingURL=etcd.service.js.map