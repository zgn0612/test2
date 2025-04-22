import _baseCfg from "./_baseCfg";
export interface IaiDeckCfg {
    id: number;
    group_id: number;
    card: number;
    card_num: number;
    ai_config: string[];
}
export default class aiDeckCfg extends _baseCfg {
    cfgList: IaiDeckCfg[];
    initCfg(): void;
    GetCardDeck(gid: number): Array<IaiDeckCfg>;
    GetCardAI(gid: number, cardid: number): string[];
}
