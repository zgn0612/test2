import _baseCfg from "./_baseCfg";
export default class partsAvatarCfg extends _baseCfg {
    id: number;
    name: string;
    des: string;
    pic: string;
    cfgList: partsAvatarCfg[];
    initCfg(): void;
    getPartsAvatarCfg(id: number): partsAvatarCfg;
    getConfigs(): partsAvatarCfg[];
}
