"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_CanIngoreEvoRequire = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_CanIngoreEvoRequire extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    constructor() {
        super();
    }
    OnFilterCard(card) {
        return card.GetPlayer().roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_IGNORE_EVO_REQUIREMENT) == false;
    }
}
exports.DtCardFilter_CanIngoreEvoRequire = DtCardFilter_CanIngoreEvoRequire;
//# sourceMappingURL=DtCardFilter_CanIngoreEvoRequire.js.map