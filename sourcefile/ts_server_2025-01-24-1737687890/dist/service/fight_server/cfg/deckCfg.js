"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class deckCfg extends _baseCfg_1.default {
    id;
    name;
    desc;
    deck_type;
    show_type;
    box;
    cover;
    duel;
    field;
    pages;
    card_egg;
    card_deck;
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            this.cfgList.push(cfg);
        }
        console.log("load deckCfg ok !!! size =====>" + this.cfgList.length);
    }
    getDeckCfg(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
    getDeckByType(atype) {
        let ret = [];
        for (let idx = 0; idx < this.cfgList.length; idx++) {
            const aCfg = this.cfgList[idx];
            if (aCfg.show_type.indexOf(atype) > -1) {
                ret.push(aCfg);
            }
        }
        return ret;
    }
}
exports.default = deckCfg;
//# sourceMappingURL=deckCfg.js.map