"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_MulNameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_MulNameIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT5_092_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnPlay, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        effect.SetEffectActivateAsk();
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_MulNameIs_1.DtCardFilter_MulNameIs(true, DtCardDigimonType_1.DtCardDigimonType.name_type_10000, DtCardDigimonType_1.DtCardDigimonType.name_type_10009));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
    }
}
exports.default = EC_BT5_092_1;
//# sourceMappingURL=EC_BT5_092_1.js.map