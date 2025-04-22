"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CardColor = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CardColor extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    colorType;
    constructor(...type) {
        super();
        this.colorType = type;
    }
    OnFilterCard(card) {
        if (this.colorType && this.colorType.length > 0) {
            for (let i = 0; i < this.colorType.length; i++) {
                if (card.ColorIs(this.colorType[i])) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.DtCardFilter_CardColor = DtCardFilter_CardColor;
//# sourceMappingURL=DtCardFilter_CardColor.js.map