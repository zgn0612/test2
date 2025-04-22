"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
const DtCardOperate_MoveTo_Deck_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Deck");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT8_065_1 extends DtEnhanceEffectCreatorts_1.default {
    count = 0;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetCondition(this.con);
        effect.SetEffectActivateAsk();
        this.skill1(effect);
        this.skill2(effect);
    }
    con() {
        this.count = 0;
        let hdd = this.GetPlayer().areaHand.GetCountWithMeetCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10334);
        });
        let gdd = this.GetPlayer().areaGraveyard.GetCountWithMeetCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10334);
        });
        return hdd + gdd > 0;
    }
    skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 4, 1);
        skill.mulNeedReverse = true;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY, DtEnum_1.DtAreaType.HAND);
        skill.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10334));
        skill.SetOperate(new DtCardOperate_MoveTo_Deck_1.DtCardOperate_MoveTo_Deck());
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.count++;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.CAL_NUMBER));
    }
    skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.SetCondition(() => {
            return this.count >= 3;
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1));
    }
}
exports.default = EC_BT8_065_1;
//# sourceMappingURL=EC_BT8_065_1.js.map