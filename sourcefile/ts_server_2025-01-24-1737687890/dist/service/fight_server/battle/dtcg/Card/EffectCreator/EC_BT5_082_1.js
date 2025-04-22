"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT5_082_1 extends DtEnhanceEffectCreatorts_1.default {
    allEffect = false;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        let opsk = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3, 1);
        opsk.SetSkillBehavior(this.OpRun, this.OnOptionChoose);
        effect.SetEffect(this.EffectCost, null).SetStage(2);
        effect.SetEffect(this.EffectAddBuff, null).SetStage(3);
        let e4 = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3, 4);
        e4.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        e4.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        e4.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.EQUAL, 3));
        e4.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    OpRun(effect) {
        let hasOther = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card != this.parent;
        });
        if (hasOther == false) {
            this.allEffect = true;
            return DtEffect_1.DtEffectResult.Next;
        }
        this.allEffect = false;
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    OnOptionChoose(uid, effect) {
        let index = uid.toNumber() + 2;
        effect.SetToStateStepWithStageId(index);
    }
    EffectCost(effect) {
        this.ThisCardUseCost(-1);
        if (this.allEffect == false) {
            effect.ForceOver();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectAddBuff(effect) {
        effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(2000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), this.parent);
        if (this.allEffect == false) {
            effect.ForceOver();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_082_1;
//# sourceMappingURL=EC_BT5_082_1.js.map