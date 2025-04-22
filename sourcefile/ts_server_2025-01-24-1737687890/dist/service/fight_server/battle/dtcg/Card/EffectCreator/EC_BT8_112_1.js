"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardColor_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardColor");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_MoveToBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveToBottom");
class EC_BT8_112_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        let conevo = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Both);
        let conevocard = conevo.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        conevocard.SetArea(DtEnum_1.DtAreaType.HAND);
        conevocard.SetCondition(this, (card) => {
            return card == this.parent;
        });
        effect.SetTriggerCondition(conevo);
        effect.SetEffectActivateAsk();
        this.Skill1(effect);
        let skill = effect.SetEffect(this.E2Effect, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    Skill1(eff) {
        let skill = this.SetSkillPlayerChoose_Single(eff, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.GY);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 7));
        skill.SetFilter(new DtCardFilter_CardColor_1.DtCardFilter_CardColor(DtEnum_1.DtCardColor.White));
        skill.SetOperate(new DtCardOperate_MoveToBottom_1.DtCardOperate_MoveToBottom(DtEnum_1.DtAreaType.DECK));
    }
    E2Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-4);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_112_1;
//# sourceMappingURL=EC_BT8_112_1.js.map