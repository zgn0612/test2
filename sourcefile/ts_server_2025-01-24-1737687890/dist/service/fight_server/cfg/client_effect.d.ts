import _baseCfg from "./_baseCfg";
export interface Icfg_client_effect {
    number: string;
    skill1: string;
    skill2: string;
}
export default class client_effect extends _baseCfg {
    cfgList: Icfg_client_effect[];
    initCfg(): void;
    GetClientEffectNameWithNumber(num: string): string;
    GetClientOriginNameWithNumber(num: string): string;
}
