import _baseCfg from "./_baseCfg";
export default class partsCardBoxCfg extends _baseCfg {
    id: number;
    name: string;
    des: string;
    pic: string;
    cfgList: partsCardBoxCfg[];
    initCfg(): void;
    getPartsCardBoxCfg(id: number): partsCardBoxCfg;
    getConfigs(): partsCardBoxCfg[];
}
