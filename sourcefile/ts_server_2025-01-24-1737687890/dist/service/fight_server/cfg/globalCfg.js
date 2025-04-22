"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class globalCfg extends _baseCfg_1.default {
    test_int;
    test_json;
    test_float;
    cfg_version;
    deck_num_limit;
    deck_name_limit;
    card_egg_num_limit;
    card_deck_num_limit;
    egg_same_num_limit;
    card_same_num_limit;
    initCfg() {
        this.test_int = this.cfg_json.test_int;
        this.test_json = this.cfg_json.test_json;
        this.test_float = this.cfg_json.test_float;
        this.cfg_version = this.cfg_json.cfg_version;
        this.deck_num_limit = this.cfg_json.deck_num_limit;
        this.deck_name_limit = this.cfg_json.deck_name_limit;
        this.card_egg_num_limit = this.cfg_json.card_egg_num_limit;
        this.card_deck_num_limit = this.cfg_json.card_deck_num_limit;
        this.egg_same_num_limit = this.cfg_json.egg_same_num_limit;
        this.card_same_num_limit = this.cfg_json.card_same_num_limit;
    }
}
exports.default = globalCfg;
;
//# sourceMappingURL=globalCfg.js.map