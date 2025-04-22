"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_FeatureZ_Has = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_FeatureZ_Has extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    feature;
    constructor(...name) {
        super();
        this.feature = name;
    }
    OnFilterCard(card) {
        return card.FeatureHas(this.feature);
    }
}
exports.DtCardFilter_FeatureZ_Has = DtCardFilter_FeatureZ_Has;
//# sourceMappingURL=DtCardFilter_FeatureHas.js.map