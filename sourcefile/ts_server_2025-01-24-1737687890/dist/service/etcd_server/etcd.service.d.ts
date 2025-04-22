import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class EtcdService implements OnModuleInit, OnModuleDestroy {
    private client;
    private lease;
    private serverMapByType;
    private serverMapByID;
    private syncServersInterval;
    private heartbeatTTL;
    private etcdPrefix;
    private server;
    private running;
    private readonly logger;
    private readonly configService;
    private runMode;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    private registerService;
    private startHeartbeat;
    private startSyncServers;
    private syncServers;
    private watchEtcdChanges;
    private handleEtcdPutEvent;
    private handleEtcdDeleteEvent;
}
