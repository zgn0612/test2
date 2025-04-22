import { ConfigOptions } from './interfaces';
export declare class ConfigService {
    private readonly options;
    private readonly envConfig;
    constructor(options: ConfigOptions);
    get(key: string, defaultValue?: string): string;
    getServiceConfig(): {
        SvType: string;
        Port: number;
        GrpcSvHost: string;
        GrpcSvPort: number;
    } | null;
    getServiceTag(): string;
    getMongoConfig(): {
        Addr: string;
        DB: string;
        User: string;
        Pwd: string;
    } | null;
}
