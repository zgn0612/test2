import _baseCfg from "./_baseCfg";
export default class partsFieldCfg extends _baseCfg {
    id: number;
    name: string;
    des: string;
    pic: string;
    cfgList: partsFieldCfg[];
    initCfg(): void;
    getPartsFieldCfg(id: number): partsFieldCfg;
    getConfigs(): partsFieldCfg[];
}
