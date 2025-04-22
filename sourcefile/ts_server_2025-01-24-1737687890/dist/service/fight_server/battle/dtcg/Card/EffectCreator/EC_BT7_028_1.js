"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_PlayCard_FromParentOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard_FromParentOrigin");
class EC_BT7_028_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffectActivateAsk();
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 3) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10791);
        }));
        skill.SetOperate(new DtCardOperate_PlayCard_FromParentOrigin_1.DtCardOperate_PlayCard_FromParentOrigin(false, true));
    }
}
exports.default = EC_BT7_028_1;
//# sourceMappingURL=EC_BT7_028_1.js.map