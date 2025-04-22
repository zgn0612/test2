"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_AddInheritBuff_Int_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_AddInheritBuff_Int");
class EC_EX2_023_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.TriggerCardOnPlay, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Magic, DtEnum_1.DtSkillTargetToPlayer.Self);
        let con = ctri.SetPlayCardCon(DtEnum_1.DtCardType.Magic, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        con.SetCostCon(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 2);
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_AddInheritBuff_Int_1.DtCardOperate_AddInheritBuff_Int(DtEnum_1.DtBuffType.CHANGE_DP, -2000, DtEnum_1.DtBuffDurationType.RoundOver));
    }
}
exports.default = EC_EX2_023_O_1;
//# sourceMappingURL=EC_EX2_023_O_1.js.map