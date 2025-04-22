import { OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { DcgProto } from './cmn/proto/protoMsg';
import * as Long from 'long';
import { ServerInfoService } from '../db_server/server_info/serverInfo.service';
import { FileWriterService } from '../replay_server/replay.service';
export declare class FightService implements OnModuleInit, OnApplicationShutdown {
    private readonly serverInfoService;
    private fileWriterService;
    private readonly logger;
    constructor(serverInfoService: ServerInfoService, fileWriterService: FileWriterService);
    onModuleInit(): void;
    initServerInfo(): Promise<void>;
    onCreate(roomIID: Long): DcgProto.E_ErrorCode;
    onInit(roomIID: Long, reqBattleInit: DcgProto.Req_Remote2TsBattleInit): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattleInit];
    onReady(roomIID: Long, reqBattleReady: DcgProto.Req_Remote2TsBattleReady): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattleReady];
    onTurn(roomIID: Long): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsTurn];
    onBattle(roomIID: Long, reqBattle: DcgProto.Req_Remote2TsBattle): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattle];
    onQuit(roomIID: Long, reqQuit: DcgProto.Req_Remote2TsBattleQuit): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattleQuit];
    onDestroy(roomIID: Long): DcgProto.E_ErrorCode;
    onReconnect(roomIID: Long, reqReconnect: DcgProto.Req_Remote2TsBattleReconnect): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattleReconnect];
    onBattleMsg(roomIID: Long, reqBattleMsg: DcgProto.Req_Remote2TsBattleMsg): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsBattleMsg];
    onBattleGm(roomIID: Long, reqGm: DcgProto.Req_Remote2TsGm): [DcgProto.E_ErrorCode, DcgProto.Resp_Remote2TsGm];
    onOffset(roomIID: Long, reqOffset: DcgProto.Req_Remote2TsOffset): DcgProto.E_ErrorCode;
    onPing(roomIID: Long): DcgProto.E_ErrorCode;
    onReplay(replay: DcgProto.S_FightReplay): void;
    saveReplay(roomMode: DcgProto.E_ROOM_MODE, roomIID: Long, replay: DcgProto.S_FightReplay, useBinary?: boolean): void;
    onApplicationShutdown(signal: string): void;
}
