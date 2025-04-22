"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _baseCfg_1 = require("./_baseCfg");
;
class testClientCfg extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                mid1: cfg.mid1,
                test_float: cfg.test_float,
                test_str: cfg.test_str,
                test_array: cfg.test_array,
                test_dict: {}
            };
            data.test_dict[cfg.test_dict_key_1] = cfg.test_dict_value_1;
            data.test_dict[cfg.test_dict_key_2] = cfg.test_dict_value_2;
            this.cfgList.push(data);
        }
        console.log("load testClientCfg ok !!! size =====>" + this.cfgList.length);
    }
}
exports.default = testClientCfg;
;
//# sourceMappingURL=testClientCfg.js.map