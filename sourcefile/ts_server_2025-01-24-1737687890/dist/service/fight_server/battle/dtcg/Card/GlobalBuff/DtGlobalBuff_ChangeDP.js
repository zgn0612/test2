"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuff_ChangeDP = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtGlobalBuffBase_1 = require("./DtGlobalBuffBase");
class DtGlobalBuff_ChangeDP extends DtGlobalBuffBase_1.DtGlobalBuffBase {
    dp = 0;
    effectArea = DtEnum_1.DtAreaType.None;
    constructor(caster, creator) {
        super(caster, creator);
        this.type = DtEnum_1.DtBuffType.CHANGE_DP;
    }
    CheckCardInt(card, type) {
        if (this.effectArea != DtEnum_1.DtAreaType.None) {
            if (card.CardIsInArea(this.effectArea) == false) {
                return 0;
            }
        }
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
            return 0;
        }
        if (this.CanEffect(card, type)) {
            return this.dp;
        }
        return 0;
    }
}
exports.DtGlobalBuff_ChangeDP = DtGlobalBuff_ChangeDP;
//# sourceMappingURL=DtGlobalBuff_ChangeDP.js.map