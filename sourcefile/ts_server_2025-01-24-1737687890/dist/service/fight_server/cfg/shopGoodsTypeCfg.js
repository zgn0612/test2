"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class shopGoodsTypeCfg extends _baseCfg_1.default {
    goods_type_id;
    type_name;
    type_desc;
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            this.cfgList.push(cfg);
        }
        console.log("load shopGoodsTypeCfg ok !!! size =====>" + this.cfgList.length);
    }
    getshopGoodsTypeCfg(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].goods_type_id == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
}
exports.default = shopGoodsTypeCfg;
//# sourceMappingURL=shopGoodsTypeCfg.js.map