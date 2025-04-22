"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class goodsPriceCfg extends _baseCfg_1.default {
    id;
    content;
    diamond;
    card_ticket;
    goods_name;
    goods_desc;
    goods_pic;
    goods_type_id;
    banner_pic;
    pre_pic;
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            this.cfgList.push(cfg);
        }
        console.log("load goodsPriceCfg ok !!! size =====>" + this.cfgList.length);
    }
    getGoodsPriceCfg(id) {
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
exports.default = goodsPriceCfg;
//# sourceMappingURL=goodsPriceCfg.js.map