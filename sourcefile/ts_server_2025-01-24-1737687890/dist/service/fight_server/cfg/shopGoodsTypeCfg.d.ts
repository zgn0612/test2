import _baseCfg from "./_baseCfg";
export default class shopGoodsTypeCfg extends _baseCfg {
    goods_type_id: number;
    type_name: string;
    type_desc: string;
    cfgList: shopGoodsTypeCfg[];
    initCfg(): void;
    getshopGoodsTypeCfg(id: number): shopGoodsTypeCfg;
}
