"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_SortSelectCardNumberCheckHand_WithLv = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AIEffect_SortSelectCardNumberCheckHand_WithLv extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let containCards = this.root.GetContainerCards(this.sParam2);
            if (containCards == null) {
                this.LogError(data, "容器不存在:" + this.sParam1);
                return false;
            }
            let player = this.root.GetAIPlayer();
            let effects = data?.data;
            if (effects) {
                let split = this.sParam1.split("|");
                if (split.length > 0) {
                    for (let i = split.length - 1; i >= 0; i--) {
                        for (let k = effects.length - 1; k >= 0; k--) {
                            let checkHand = player.HasCardWithCardCfgId(effects[k].CfgId);
                            if (checkHand == false && this.HasContaincards(containCards, effects[k].CfgId) == false) {
                                let cfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(effects[k].CfgId);
                                if (cfg) {
                                    if (cfg.card_number == split[i]) {
                                        if (player.HasCardWithCardLv(cfg.lv) == false && this.HasContainLv(containCards, cfg.lv) == false) {
                                            let card = effects[k];
                                            effects.splice(k, 1);
                                            effects.unshift(card);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
    HasContaincards(contains, cardCfg) {
        if (contains) {
            for (let i = 0; i < contains.length; i++) {
                if (contains[i].GetCfgCardId() == cardCfg) {
                    return true;
                }
            }
        }
        return false;
    }
    HasContainLv(contains, lv) {
        if (contains) {
            for (let i = 0; i < contains.length; i++) {
                if (contains[i].GetCardLv() == lv) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.AIEffect_SortSelectCardNumberCheckHand_WithLv = AIEffect_SortSelectCardNumberCheckHand_WithLv;
//# sourceMappingURL=AIEffect_SortSelectCardNumberCheckHand_WithLv.js.map