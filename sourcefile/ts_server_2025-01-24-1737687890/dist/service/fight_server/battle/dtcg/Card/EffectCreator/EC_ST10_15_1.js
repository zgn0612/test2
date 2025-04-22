"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_ST10_15_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.E1Effect1, null);
        this.Skill(effect);
    }
    E1Effect1() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 3);
        return DtEffect_1.DtEffectResult.Next;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.SetCondition(() => {
            return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    if (card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
                        return true;
                    }
                }
                return false;
            });
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Yellow, DtEnum_1.DtCardColor.Purple));
        skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
    }
}
exports.default = EC_ST10_15_1;
//# sourceMappingURL=EC_ST10_15_1.js.map