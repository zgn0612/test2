"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardDP_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardDP");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT8_096_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.EffectSetEffect, null);
        this.SetEffect1(effect);
        this.SetEffect2(effect);
    }
    SetEffect1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardDP_1.DtCardFilter_CardDP(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4000));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    SetEffect2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardDP_1.DtCardFilter_CardDP(DtEnum_1.DtFilterCompare.LESS_EQUAL, 7000));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    EffectSetEffect(effect) {
        let is7000 = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            if (card.ColorCount() >= 2) {
                return true;
            }
            return card.CheckOriginListWithCondition((c) => {
                return c.ColorCount() >= 2;
            });
        });
        if (is7000) {
            effect.SetToStateStepWithStageId(2);
        }
        else {
            effect.SetToStateStepWithStageId(1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_096_1;
//# sourceMappingURL=EC_BT8_096_1.js.map