"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class goodsShelvesDetailCfg extends _baseCfg_1.default {
    id;
    goods_shelves_id;
    goods_id;
    goods_num;
    currency_type;
    discount;
    min_role_level;
    max_role_level;
    weight;
    buy_num;
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            this.cfgList.push(cfg);
        }
        console.log("load goodsShelvesDetailCfg ok !!! size =====>" + this.cfgList.length);
    }
    getGoodsShelvesCfg(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
}
exports.default = goodsShelvesDetailCfg;
//# sourceMappingURL=goodsShelvesDetailCfg.js.map