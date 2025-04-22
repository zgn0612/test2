"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
class aiRoleCfg extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                id: cfg.id,
                name: cfg.name,
                elo: cfg.elo,
                group_id: cfg.group_id,
                ai: cfg.ai,
                new_player_battle: cfg.new_player_battle,
                player_name: cfg.player_name,
                player_avatar: cfg.player_avatar
            };
            this.cfgList.push(data);
        }
        console.log("load aiRoleCfg ok !!! size =====>" + this.cfgList.length);
    }
    GetGroupIdWithRoleId(id) {
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                return this.cfgList[i].group_id;
            }
        }
        return 0;
    }
    GetCfgWithRoleId(id) {
        for (let i = 0; i < this.cfgList.length; i++) {
            if (this.cfgList[i].id == id) {
                return this.cfgList[i];
            }
        }
        return null;
    }
}
exports.default = aiRoleCfg;
//# sourceMappingURL=aiRoleCfg.js.map