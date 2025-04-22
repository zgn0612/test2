"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class partsCardCoverCfg extends _baseCfg_1.default {
    id;
    name;
    des;
    pic;
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            this.cfgList.push(cfg);
        }
        console.log("load partsCardCoverCfg ok !!! size =====>" + this.cfgList.length);
    }
    getPartsCardCoverCfg(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
    getConfigs() {
        return this.cfgList;
    }
}
exports.default = partsCardCoverCfg;
//# sourceMappingURL=partsCardCoverCfg.js.map