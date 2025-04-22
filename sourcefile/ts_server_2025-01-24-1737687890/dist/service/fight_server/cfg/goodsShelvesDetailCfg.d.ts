import _baseCfg from "./_baseCfg";
export default class goodsShelvesDetailCfg extends _baseCfg {
    id: number;
    goods_shelves_id: number;
    goods_id: number;
    goods_num: number;
    currency_type: number;
    discount: number;
    min_role_level: number;
    max_role_level: number;
    weight: string;
    buy_num: number;
    cfgList: goodsShelvesDetailCfg[];
    initCfg(): void;
    getGoodsShelvesCfg(id: number): goodsShelvesDetailCfg;
}
