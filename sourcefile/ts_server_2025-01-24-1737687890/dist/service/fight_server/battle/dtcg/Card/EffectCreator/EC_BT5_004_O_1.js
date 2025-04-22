"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerDiscardEvoOrigin_1 = require("../Effect/TriggerCondition/DtConTriggerDiscardEvoOrigin");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
class EC_BT5_004_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.SetOriginNewEffect((effect) => {
            effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin);
            effect.SetTriggerArea(DtEnum_1.DtAreaType.OTHER_EVO | DtEnum_1.DtAreaType.GY);
            let ctri = new DtConTriggerDiscardEvoOrigin_1.DtConTriggerDiscardEvoOrigin(DtEnum_1.DtEffectRoundValid.Self, DtMessageData_1.DtProtoEnum_MoveReason.BaolieDicard);
            ctri.SetCondition(this, (d) => {
                return d.receiveCard == this.parent;
            });
            effect.SetTriggerCondition(ctri);
            let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
            skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
            this.OnCommonAreaSetFilter(skill.GetMachineFilter());
            this.OnCommonAreaSetOperate(skill.GetMachineOperate());
        });
    }
    ClientShow() {
        let effect = this.GetNewEffect();
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        this.OnCommonAreaSetFilter(skill.GetMachineFilter());
        this.OnCommonAreaSetOperate(skill.GetMachineOperate());
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, 2000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_BT5_004_O_1;
//# sourceMappingURL=EC_BT5_004_O_1.js.map