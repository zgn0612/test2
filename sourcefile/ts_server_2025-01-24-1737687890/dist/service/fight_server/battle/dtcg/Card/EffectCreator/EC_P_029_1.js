"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CanIngoreEvoRequire_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CanIngoreEvoRequire");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_ForceEvo_tobattleCard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ForceEvo_tobattleCard");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_P_029_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnWhenAttacking, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        effect.SetEffectActivateAsk();
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10714, true));
        mcFliter.SetFilter(new DtCardFilter_CanIngoreEvoRequire_1.DtCardFilter_CanIngoreEvoRequire());
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ForceEvo_tobattleCard_1.DtCardOperate_ForceEvo_tobattleCard(2, this, () => { return this.parent; }));
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card, eff) => {
            this.CreateEffectTo(new EC_P_029_1_ADD, this.parent, false);
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.ADD_SKILL_BUFF));
    }
}
exports.default = EC_P_029_1;
class EC_P_029_1_ADD extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundOver);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnCardDestroy(this.parent, this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_P_029_1.js.map