"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_EX2_043_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1, 1);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let c = this.GetPlayer().areaHand.CardCount();
            if (c > 5) {
                choose.SetActive(true);
                choose.ChangeTypeNum(c - 5);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single_CustomCount(effect, DtEnum_1.DtSkillTargetToPlayer.Opponent, 1, 2);
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let c = this.GetOppPlayer().areaHand.CardCount();
            if (c > 5) {
                choose.SetActive(true);
                choose.ChangeTypeNum(c - 5);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
}
exports.default = EC_EX2_043_1;
//# sourceMappingURL=EC_EX2_043_1.js.map