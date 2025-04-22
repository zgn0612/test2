"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEffect_ConvertToContainer = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const AICon_base_1 = require("./AICon_base");
class AIEffect_ConvertToContainer extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        if (data) {
            let effects = data?.data;
            if (effects) {
                let cards = new Array();
                for (let i = 0; i < effects.length; i++) {
                    let player = this.root.GetPlayer(effects[i].PlayerIID);
                    if (player) {
                        let card = player.FindCard(effects[i].CardIID);
                        if (card) {
                            cards.push(card);
                        }
                    }
                }
                if (cards.length == effects.length) {
                    this.root.SetContainerCards(this.sParam1, cards);
                    return true;
                }
            }
        }
        _Dcg_1.gLog.err("ai 转换 不成功！！！！");
        return false;
    }
}
exports.AIEffect_ConvertToContainer = AIEffect_ConvertToContainer;
//# sourceMappingURL=AIEffect_ConvertToContainer.js.map