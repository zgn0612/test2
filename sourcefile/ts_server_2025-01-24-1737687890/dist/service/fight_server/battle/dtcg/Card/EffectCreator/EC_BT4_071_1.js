"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_PlayCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard");
class EC_BT4_071_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Self, ...DtConst_1.DtConst.ACTION_DESTORY);
        let tcard = ctri.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetFeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_139);
        tcard.SetCondition(this, (card) => { return card != this.parent; });
        effect.SetTriggerCondition(ctri);
        this.SetCommonBrowseFromDeckThenBottom(effect, 2, 1, (skill, idx) => {
            skill.GetChooseMachine().SetCanCancel(true);
            skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
            skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10079, true));
            skill.SetOperate(new DtCardOperate_PlayCard_1.DtCardOperate_PlayCard(false, true));
        });
    }
}
exports.default = EC_BT4_071_1;
//# sourceMappingURL=EC_BT4_071_1.js.map