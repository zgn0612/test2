import _baseCfg from "./_baseCfg";
import { DcgProto } from "../cmn/proto/protoMsg";
export default class cardBagCfg extends _baseCfg {
    id: number;
    type: DcgProto.E_CardBagType;
    sort: number;
    buy_num: number;
    card_bag_activate: number[];
    trigger_open: number;
    valid_day: number;
    cost_item: number;
    cost_num: number;
    cost_num_ten: number;
    bag_name: string;
    bag_desc: string;
    cover_pic: string;
    carousel_pic: string[];
    key_card: number[];
    collect_card: number[];
    cfgList: cardBagCfg[];
    initCfg(): void;
    getCardBagCfg(id: number): cardBagCfg;
    getCardBagByType(atype: DcgProto.E_CardBagType): cardBagCfg[];
}
