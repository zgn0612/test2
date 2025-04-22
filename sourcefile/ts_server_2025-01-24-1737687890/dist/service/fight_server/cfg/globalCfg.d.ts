import _baseCfg from "./_baseCfg";
export default class globalCfg extends _baseCfg {
    test_int: number;
    test_json: {
        in: number;
        middle: number;
        out: number;
        range_width: number;
        range_height: number;
    };
    test_float: number;
    cfg_version: number;
    deck_num_limit: number;
    deck_name_limit: number;
    card_egg_num_limit: number;
    card_deck_num_limit: number;
    egg_same_num_limit: number;
    card_same_num_limit: number;
    initCfg(): void;
}
