import _baseCfg from "./_baseCfg";
export default class partsCardCoverCfg extends _baseCfg {
    id: number;
    name: string;
    des: string;
    pic: string;
    cfgList: partsCardCoverCfg[];
    initCfg(): void;
    getPartsCardCoverCfg(id: number): partsCardCoverCfg;
    getConfigs(): partsCardCoverCfg[];
}
