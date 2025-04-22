"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreateEffectToOther_1 = require("../Effect/DtEffectCreateEffectToOther");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeActEffect");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_BT7_055_2 extends DtEffectCreateEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtEffectRoundValid.Opponent);
    }
    OnCondition(card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return true;
        }
        return false;
    }
    OnGetEffect() {
        return new EC_BT7_055_2_Add();
    }
    ClientShow() {
        this.CreateEffectTo(new EC_BT7_055_2_Add(), this.parent, false);
    }
}
exports.default = EC_BT7_055_2;
class EC_BT7_055_2_Add extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetAddEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let contri = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtActionEffectType.ChangeCardBattleState);
        contri.SetCondition(this, (msg) => {
            return msg.ReceiveHas(this.parent) && msg.GetEffWithCard(this.parent).param == DtEnum_1.DtCardBattleState.Activate;
        });
        effect.SetTriggerCondition(contri);
        effect.SetEffect(this.Effect1, null);
        let chooseSkill = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        chooseSkill.SetSkillBehavior(null, this.OnChoose);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.HAND);
        skill.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
    }
    OnChoose(uid, effect) {
        let num = uid.toNumber();
        if (num != 0) {
            this.GetManager().GetCurrentFsmActionManger().ForceOverEffect(this.parent);
            effect.ForceOver();
        }
    }
    Effect1(eff) {
        if (this.GetPlayer().areaHand.CardCount() == 0) {
            this.GetManager().GetCurrentFsmActionManger().ForceOverEffect(this.parent);
            eff.ForceOver();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
//# sourceMappingURL=EC_BT7_055_2.js.map