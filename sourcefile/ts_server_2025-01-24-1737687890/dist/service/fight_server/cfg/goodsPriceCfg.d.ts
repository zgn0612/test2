import _baseCfg from "./_baseCfg";
export default class goodsPriceCfg extends _baseCfg {
    id: number;
    content: number;
    diamond: number;
    card_ticket: number;
    goods_name: string;
    goods_desc: string;
    goods_pic: string;
    goods_type_id: number;
    banner_pic: string[];
    pre_pic: string[];
    cfgList: goodsPriceCfg[];
    initCfg(): void;
    getGoodsPriceCfg(id: number): goodsPriceCfg;
}
