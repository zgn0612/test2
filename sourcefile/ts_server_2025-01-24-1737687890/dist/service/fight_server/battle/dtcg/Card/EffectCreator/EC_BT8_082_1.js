"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT8_082_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        effect.SetEffect(this.Restore, null);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.SetCondition(() => {
            return this.parent.CheckOriginListWithCondition((card) => {
                return card.ColorIs(DtEnum_1.DtCardColor.Purple);
            });
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    Restore() {
        let hasY = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
        if (hasY) {
            this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_082_1;
//# sourceMappingURL=EC_BT8_082_1.js.map