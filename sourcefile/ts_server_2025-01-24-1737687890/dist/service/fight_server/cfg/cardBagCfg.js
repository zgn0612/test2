"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _Dcg_1 = require("../cmn/_Dcg");
const _baseCfg_1 = require("./_baseCfg");
class cardBagCfg extends _baseCfg_1.default {
    id;
    type;
    sort;
    buy_num;
    card_bag_activate;
    trigger_open;
    valid_day;
    cost_item;
    cost_num;
    cost_num_ten;
    bag_name;
    bag_desc;
    cover_pic;
    carousel_pic;
    key_card;
    collect_card;
    cfgList;
    initCfg() {
        this.loadJsonCfg("Json/" + this.cfg_name, (objlist) => {
            this.cfg_json = objlist;
            this.cfgList = [];
            for (let cfg of this.cfg_json) {
                this.cfgList.push(cfg);
            }
            _Dcg_1.gLog.ui("car bag list:" + this.cfgList.length);
        });
    }
    getCardBagCfg(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
    getCardBagByType(atype) {
        let ret = [];
        for (let idx = 0; idx < this.cfgList.length; idx++) {
            const aCfg = this.cfgList[idx];
            if (aCfg.type == atype) {
                ret.push(aCfg);
            }
        }
        return ret;
    }
}
exports.default = cardBagCfg;
//# sourceMappingURL=cardBagCfg.js.map