"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class card_skill extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                skillid: cfg.skillid,
                number: cfg.number,
                skill_desc: cfg.skill_desc,
            };
            this.cfgList.push(data);
        }
        console.log("load card_skill ok !!! size =====>" + this.cfgList.length);
    }
    GetSkillCfgWithId(id) {
        let ret = null;
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].skillid == id) {
                ret = this.cfgList[i];
                break;
            }
        }
        return ret;
    }
}
exports.default = card_skill;
//# sourceMappingURL=card_skill.js.map