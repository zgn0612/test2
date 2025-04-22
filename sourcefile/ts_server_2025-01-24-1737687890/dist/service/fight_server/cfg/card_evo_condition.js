"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class card_evo_condition extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                id: cfg.id,
                color: cfg.color,
                lv: cfg.level,
                cost: cfg.cost
            };
            this.cfgList.push(data);
        }
        console.log("load card_evo_condition ok !!! size =====>" + this.cfgList.length);
    }
    GetEvoCfg(id) {
        let list = [];
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                list.push(this.cfgList[i]);
            }
        }
        return list;
    }
}
exports.default = card_evo_condition;
//# sourceMappingURL=card_evo_condition.js.map