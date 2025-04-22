"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class aiDeckCfg extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                id: cfg.id,
                group_id: cfg.group_id,
                card: cfg.card,
                card_num: cfg.card_num,
                ai_config: cfg.ai_config,
            };
            this.cfgList.push(data);
        }
        console.log("load aiDeckCfg ok !!! size =====>" + this.cfgList.length);
    }
    GetCardDeck(gid) {
        let deck = new Array;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].group_id == gid) {
                deck.push(this.cfgList[i]);
            }
        }
        return deck;
    }
    GetCardAI(gid, cardid) {
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].group_id == gid) {
                if (this.cfgList[i].card == cardid) {
                    return this.cfgList[i].ai_config;
                }
            }
        }
        return null;
    }
}
exports.default = aiDeckCfg;
//# sourceMappingURL=aiDeckCfg.js.map