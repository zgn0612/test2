"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class language_cfg extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                id: cfg.id,
                CN: cfg.CN,
                JP: cfg.JP,
                EN: cfg.EN
            };
            this.cfgList.push(data);
        }
        console.log("load language_cfg ok !!! size =====>" + this.cfgList.length);
    }
    GetLanguage(id) {
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                return this.cfgList[i].CN;
            }
        }
        return "no language with id =>" + id;
    }
}
exports.default = language_cfg;
//# sourceMappingURL=language_cfg.js.map