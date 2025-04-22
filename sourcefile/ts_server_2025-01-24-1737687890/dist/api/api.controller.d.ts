import { FightService } from '../service/fight_server/fight.service';
export declare class ApiController {
    private readonly service;
    private fightService;
    private readonly logger;
    constructor(service: FightService);
    create(base64Data: string): string;
    battle(): string;
    destroy(): string;
    postBattle(): string;
    serverInfo(base64Data: string): string;
    saveReplay(base64Data: string): string;
}
