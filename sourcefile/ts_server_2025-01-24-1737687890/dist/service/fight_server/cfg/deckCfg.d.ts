import _baseCfg from "./_baseCfg";
export default class deckCfg extends _baseCfg {
    id: number;
    name: string;
    desc: string;
    deck_type: number;
    show_type: string;
    box: string;
    cover: string;
    duel: string;
    field: string;
    pages: number[];
    card_egg: number[];
    card_deck: number[];
    cfgList: deckCfg[];
    initCfg(): void;
    getDeckCfg(id: number): deckCfg;
    getDeckByType(atype: string): deckCfg[];
}
