"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SetOrigin_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsParent");
class EC_BT6_078_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.TriggerCardMove);
        let effcon = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand();
        effcon.SetCondition(this, this.TriggerFunc);
        effect.SetTriggerCondition(effcon);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffectActivateAsk();
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.Purple));
        skill.SetOperate(new DtCardOperate_SetOrigin_ChooseIsParent_1.DtCardOperate_SetOrigin_ChooseIsParent(0));
    }
    TriggerFunc(d) {
        return d.card == this.parent;
    }
}
exports.default = EC_BT6_078_1;
//# sourceMappingURL=EC_BT6_078_1.js.map