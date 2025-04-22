"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerAttackOver_1 = require("../Effect/TriggerCondition/DtConTriggerAttackOver");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_OtherCard_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_OtherCard");
const DtCardOperate_SetOrigin_ChooseIsParent_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SetOrigin_ChooseIsParent");
class EC_EX2_028_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.TriggerAttackOver, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerAttackOver_1.DtConTriggerAttackOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.None);
        let ccard = ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccard.SetCondition(this, (card) => { return this.parent == card; });
        effect.SetTriggerCondition(ctri);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_OtherCard_1.DtCardFilter_OtherCard());
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_SetOrigin_ChooseIsParent_1.DtCardOperate_SetOrigin_ChooseIsParent(0));
    }
}
exports.default = EC_EX2_028_1;
//# sourceMappingURL=EC_EX2_028_1.js.map