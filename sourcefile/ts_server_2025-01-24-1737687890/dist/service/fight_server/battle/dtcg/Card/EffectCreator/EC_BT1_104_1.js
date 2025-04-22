"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreateGlobalTimeEffectToOther_1 = require("../Effect/DtEffectCreateGlobalTimeEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
class EC_BT1_104_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    ClientShow() {
        this.CreateEffectTo(new EC_BT1_104_1_ADD_2(), this.parent, false);
    }
    Effect() {
        this.CreateGlobalEffect(new EC_BT1_104_1_ADD_1());
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT1_104_1;
class EC_BT1_104_1_ADD_1 extends DtEffectCreateGlobalTimeEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtBuffDurationType.RoundOver, 1, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnCondition(card) {
        return card.CardTypeIs(DtEnum_1.DtCardType.Monster);
    }
    OnGetEffect() {
        return new EC_BT1_104_1_ADD_2();
    }
}
class EC_BT1_104_1_ADD_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateTimeEffectToCard(this.parent, DtEnum_1.DtBuffDurationType.RoundOver, 1, false);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -2000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
//# sourceMappingURL=EC_BT1_104_1.js.map