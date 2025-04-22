"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardFilter_FeatureIs = void 0;
const DtSkillCardFiterBase_1 = require("./DtSkillCardFiterBase");
class DtCardFilter_FeatureIs extends DtSkillCardFiterBase_1.DtSkillCardFiterBase {
    feature;
    constructor(...name) {
        super();
        this.feature = name;
    }
    OnFilterCard(card) {
        if (this.feature && this.feature.length > 0) {
            for (let i = 0; i < this.feature.length; i++) {
                if (card.FeatureIs(this.feature[i])) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.DtCardFilter_FeatureIs = DtCardFilter_FeatureIs;
//# sourceMappingURL=DtCardFilter_FeatureIs.js.map