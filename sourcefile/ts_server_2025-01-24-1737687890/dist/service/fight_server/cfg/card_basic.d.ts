import { DtCardDigimonType } from "../battle/dtcg/Data/DtCardDigimonType";
import { DtCardColor, DtCardType } from "../battle/dtcg/Data/DtEnum";
import { Icfg_card_evo_condition } from "./card_evo_condition";
import { Icfg_card_special_evo_condition } from "./card_special_evo_condition";
import _baseCfg from "./_baseCfg";
export interface Icfg_card_basic {
    id: number;
    card_number: string;
    name: string;
    color: DtCardColor[];
    rare: string;
    cardType: DtCardType;
    cost: number;
    dp: number;
    evoCondition: number;
    specialEvoCondition: number;
    mainEffect: number[];
    originEffect: number[];
    lv: number;
    grade: DtCardDigimonType;
    attribute: DtCardDigimonType;
    digimonType: DtCardDigimonType[];
    forceDigimonType: DtCardDigimonType;
    extendDigimonType: DtCardDigimonType[];
    skill_desc: string;
    compose_item_id: number;
    compose_item_num: number;
    decompose_item_id: number;
    decompose_item_num: number;
    card_evo_condition?: Icfg_card_evo_condition[];
    card_special_evo_condition?: Icfg_card_special_evo_condition[];
    alter_card: number;
}
export default class card_basic extends _baseCfg {
    cfgList: Icfg_card_basic[];
    initCfg(): void;
    GetCfgWhitId(id: number): Icfg_card_basic;
    GetCfgWhitNumber(str: string): Icfg_card_basic;
    GetIdWithCardNumber(str: string): number;
    GetTestJJCCard(color: DtCardColor, isDigimon: boolean): Array<Icfg_card_basic>;
    private GetISThisJJC;
    GetOneCardAllEffectWithCardid(cardid: number): number[];
    GetAllSkill(): Array<number>;
}
