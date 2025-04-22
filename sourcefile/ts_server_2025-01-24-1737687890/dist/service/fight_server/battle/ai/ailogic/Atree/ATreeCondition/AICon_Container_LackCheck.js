"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Container_LackCheck = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const ADefine_1 = require("../ADefine");
const AICon_base_1 = require("./AICon_base");
class AICon_Container_LackCheck extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = this.root.GetContainerCards(this.sParam1);
        let split = this.sParam2.split("|");
        if (cards == null || split.length == 0) {
            this.LogError(data, "容器不存在:" + this.sParam1);
            return false;
        }
        if (cards.length == 0) {
            return false;
        }
        switch (this.containerType) {
            case ADefine_1.AiFilterContainerType.NAME_FORCE_IS:
                let nameForces = split.map(Number);
                for (let i = 0; i < cards.length; i++) {
                    let lack = true;
                    for (let sp = 0; sp < nameForces.length; sp++) {
                        if (cards[i].NameIs(nameForces[sp], true)) {
                            lack = false;
                        }
                    }
                    if (lack) {
                        return true;
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.NAME_IS:
                let names = split.map(Number);
                for (let i = 0; i < cards.length; i++) {
                    let lack = true;
                    for (let sp = 0; sp < names.length; sp++) {
                        if (cards[i].NameIs(names[sp], false)) {
                            lack = false;
                        }
                    }
                    if (lack) {
                        return true;
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.LV:
                let lvs = split.map(Number);
                for (let i = 0; i < cards.length; i++) {
                    let lack = true;
                    for (let sp = 0; sp < lvs.length; sp++) {
                        if (cards[i].GetCardLv() == lvs[sp]) {
                            lack = false;
                        }
                    }
                    if (lack) {
                        return true;
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.CARD_NUMBER:
                for (let i = 0; i < cards.length; i++) {
                    let lack = true;
                    for (let sp = 0; sp < split.length; sp++) {
                        if (cards[i].GetCardCfgNumber() == split[sp]) {
                            lack = false;
                        }
                    }
                    if (lack) {
                        return true;
                    }
                }
                break;
            default:
                _Dcg_1.gLog.err("无效参数！！！！");
                break;
        }
        return false;
    }
}
exports.AICon_Container_LackCheck = AICon_Container_LackCheck;
//# sourceMappingURL=AICon_Container_LackCheck.js.map