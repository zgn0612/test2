import { DtCardDigimonType } from "../battle/dtcg/Data/DtCardDigimonType";
import { DtCardColor } from "../battle/dtcg/Data/DtEnum";
import _baseCfg from "./_baseCfg";
export interface Icfg_card_special_evo_condition {
    id: number;
    name: DtCardDigimonType;
    includename: DtCardDigimonType;
    feature: DtCardDigimonType;
    record: DtCardDigimonType;
    color: DtCardColor;
    level: number;
    cost: number;
}
export default class card_special_evo_condition extends _baseCfg {
    cfgList: Icfg_card_special_evo_condition[];
    initCfg(): void;
    GetEvoCfg(id: number): Icfg_card_special_evo_condition[];
}
