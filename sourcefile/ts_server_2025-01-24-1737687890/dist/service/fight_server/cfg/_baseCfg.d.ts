export default class _baseCfg {
    cfg_json: any;
    cfg_name: string;
    constructor();
    initCfg(): void;
    loadJsonCfg(cfgPath: string, callbackFunc: Function): void;
}
