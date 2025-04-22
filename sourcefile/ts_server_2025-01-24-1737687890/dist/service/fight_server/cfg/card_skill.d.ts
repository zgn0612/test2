import _baseCfg from "./_baseCfg";
export interface Icfg_card_skill {
    skillid: number;
    number: string;
    skill_desc: string;
}
export default class card_skill extends _baseCfg {
    cfgList: Icfg_card_skill[];
    initCfg(): void;
    GetSkillCfgWithId(id: number): Icfg_card_skill;
}
