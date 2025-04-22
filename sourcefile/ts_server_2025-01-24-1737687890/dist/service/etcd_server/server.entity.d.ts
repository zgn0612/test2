export declare class Server {
    id: string;
    type: string;
    metadata: Record<string, string>;
    frontend: boolean;
    hostname: string;
    constructor(id: string, type: string, frontend: boolean, metadata?: Record<string, string>);
    private getHostname;
    asJSONString(): string;
}
