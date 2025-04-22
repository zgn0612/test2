import { DtCardColor } from "../battle/dtcg/Data/DtEnum";
import _baseCfg from "./_baseCfg";
export interface Icfg_card_evo_condition {
    id: number;
    color: DtCardColor;
    lv: number;
    cost: number;
}
export default class card_evo_condition extends _baseCfg {
    cfgList: Icfg_card_evo_condition[];
    initCfg(): void;
    GetEvoCfg(id: number): Icfg_card_evo_condition[];
}
