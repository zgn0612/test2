"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_NameIs = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_NameIs extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    name;
    force;
    constructor(name, isForce = false) {
        super();
        this.name = name;
        this.force = isForce;
    }
    OnFilterCard(card) {
        return card.NameIs(this.name, this.force);
    }
}
exports.DtCardFilter_NameIs = DtCardFilter_NameIs;
//# sourceMappingURL=DtCardFilter_NameIs.js.map