"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerBattleOver_1 = require("../Effect/TriggerCondition/DtConTriggerBattleOver");
class EC_EX1_043_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        effect.SetEffectActivateAsk();
        let ctri = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(DtEnum_1.DtEffectRoundValid.Self, DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, true);
        let atkCon = ctri.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        atkCon.SetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        atkCon.SetCondition(this, (card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_24) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_70);
        });
        let defcon = ctri.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        defcon.SetArea(DtEnum_1.DtAreaType.BATTLE_AREA, false);
        defcon.SetLastEffectedType(DtEnum_1.DtActionEffectType.AttackDestroy);
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_043_1;
//# sourceMappingURL=EC_EX1_043_1.js.map