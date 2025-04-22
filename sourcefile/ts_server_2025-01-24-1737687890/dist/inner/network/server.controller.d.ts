import { ReqData } from '../interfaces/reqData';
import { RespData } from '../interfaces/respData';
import { FightService } from '../../service/fight_server/fight.service';
export declare class ServerController {
    private readonly service;
    private fightService;
    constructor(service: FightService);
    create(data: ReqData): RespData;
    init(data: ReqData): RespData;
    ready(data: ReqData): RespData;
    turn(data: ReqData): RespData;
    offset(data: ReqData): RespData;
    battle(data: ReqData): RespData;
    quit(data: ReqData): RespData;
    destroy(data: ReqData): RespData;
    reconnect(data: ReqData): RespData;
    gm(data: ReqData): RespData;
    battleMsg(data: ReqData): RespData;
    ping(data: ReqData): RespData;
}
