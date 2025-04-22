"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class client_effect extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                number: cfg.number,
                skill1: cfg.skill1,
                skill2: cfg.skill2,
            };
            this.cfgList.push(data);
        }
        console.log("load client_effect ok !!! size =====>" + this.cfgList.length);
    }
    GetClientEffectNameWithNumber(num) {
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                if (this.cfgList[i].number == num) {
                    return this.cfgList[i].skill1;
                }
            }
        }
        return null;
    }
    GetClientOriginNameWithNumber(num) {
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                if (this.cfgList[i].number == num) {
                    return this.cfgList[i].skill2;
                }
            }
        }
        return null;
    }
}
exports.default = client_effect;
//# sourceMappingURL=client_effect.js.map