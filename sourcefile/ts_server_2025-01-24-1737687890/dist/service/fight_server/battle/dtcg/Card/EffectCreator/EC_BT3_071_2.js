"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_FeatureIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_FeatureIs");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT3_071_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnEvolution, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 7));
        mcFliter.SetFilter(new DtCardFilter_FeatureIs_1.DtCardFilter_FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_509));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
    }
}
exports.default = EC_BT3_071_2;
//# sourceMappingURL=EC_BT3_071_2.js.map