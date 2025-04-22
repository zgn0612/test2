import _baseCfg from "./_baseCfg";
export interface Icfg_language_cfg {
    id: string;
    CN: string;
    JP: string;
    EN: string;
}
export default class language_cfg extends _baseCfg {
    cfgList: Icfg_language_cfg[];
    initCfg(): void;
    GetLanguage(id: string): string;
}
