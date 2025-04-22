import _baseCfg from "./_baseCfg";
export default class partsDuelCfg extends _baseCfg {
    id: number;
    name: string;
    des: string;
    pic: string;
    cfgList: partsDuelCfg[];
    initCfg(): void;
    getPartsDuelCfg(id: number): partsDuelCfg;
    getConfigs(): partsDuelCfg[];
}
