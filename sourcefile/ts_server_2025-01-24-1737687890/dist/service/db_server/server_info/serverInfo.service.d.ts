import { Model } from 'mongoose';
import { ServerInfo } from './schemas/serverInfo.schema';
export declare class ServerInfoService {
    private readonly serverInfoModel;
    constructor(serverInfoModel: Model<ServerInfo>);
    findAll(): Promise<ServerInfo[]>;
}
