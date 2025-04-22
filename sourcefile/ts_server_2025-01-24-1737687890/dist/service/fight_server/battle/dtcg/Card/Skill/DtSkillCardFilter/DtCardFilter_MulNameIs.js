"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_MulNameIs = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_MulNameIs extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    names;
    force = false;
    constructor(force, ...name) {
        super();
        this.force = force;
        this.names = name;
    }
    OnFilterCard(card) {
        for (let i = 0; i < this.names.length; i++) {
            if (card.NameIs(this.names[i], this.force)) {
                return true;
            }
        }
        return false;
    }
}
exports.DtCardFilter_MulNameIs = DtCardFilter_MulNameIs;
//# sourceMappingURL=DtCardFilter_MulNameIs.js.map