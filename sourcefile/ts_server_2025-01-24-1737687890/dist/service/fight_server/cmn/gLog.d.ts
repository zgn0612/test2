import Singleton from "./Singleton";
export default class _gLog extends Singleton {
    private readonly logger;
    constructor();
    err(...param: any[]): void;
    sys(...param: any[]): void;
    ui(...param: any[]): void;
    http(...param: any[]): void;
    net(...param: any[]): void;
    notify(...param: any[]): void;
}
