"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
class EC_BT6_111_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetEffectActivateAsk();
        let skill = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 5, 1);
        skill.SetSkillBehavior(null, this.OnChoose);
    }
    OnChoose(uid, effect) {
        let num = uid.toNumber() + 1;
        this.ThisCardUseCost(num);
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(num * 1000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
    }
}
exports.default = EC_BT6_111_2;
//# sourceMappingURL=EC_BT6_111_2.js.map