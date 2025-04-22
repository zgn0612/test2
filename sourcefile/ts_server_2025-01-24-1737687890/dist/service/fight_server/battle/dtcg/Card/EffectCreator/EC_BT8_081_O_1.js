"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerDiscardEvoOrigin_1 = require("../Effect/TriggerCondition/DtConTriggerDiscardEvoOrigin");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
const DtCardOperate_ChangeState_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ChangeState");
class EC_BT8_081_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.SetOriginNewEffect((effect) => {
            effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerDiscardEvoOrigin);
            effect.SetTriggerArea(DtEnum_1.DtAreaType.OTHER_EVO | DtEnum_1.DtAreaType.GY);
            let ctri = new DtConTriggerDiscardEvoOrigin_1.DtConTriggerDiscardEvoOrigin(DtEnum_1.DtEffectRoundValid.Self, DtMessageData_1.DtProtoEnum_MoveReason.None);
            let ccard = ctri.SetDiscardCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Purple, DtEnum_1.DtSkillTargetToPlayer.Self);
            ccard.SetCondition(this, (card) => { return card == this.parent; });
            let ccaster = ctri.SetCasterCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
            ccaster.SetNameCon(DtCardDigimonType_1.DtCardDigimonType.name_type_10829, true);
            effect.SetTriggerCondition(ctri);
            this.Skill(effect);
        });
    }
    ClientShow() {
        let effect = this.GetNewEffect();
        this.Skill(effect);
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_ChangeState_1.DtCardOperate_ChangeState(DtEnum_1.DtCardBattleState.Activate));
        skill.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, 3000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_BT8_081_O_1;
//# sourceMappingURL=EC_BT8_081_O_1.js.map