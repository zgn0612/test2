"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardType = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardType extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    cardtype;
    constructor(...type) {
        super();
        this.cardtype = type;
    }
    OnFilterCard(card) {
        if (this.cardtype && this.cardtype.length > 0) {
            for (let i = 0; i < this.cardtype.length; i++) {
                if (card.CardTypeIs(this.cardtype[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    GetFilterCardType() {
        return this.cardtype;
    }
}
exports.DtCardFilter_CardType = DtCardFilter_CardType;
//# sourceMappingURL=DtCardFilter_CardType.js.map