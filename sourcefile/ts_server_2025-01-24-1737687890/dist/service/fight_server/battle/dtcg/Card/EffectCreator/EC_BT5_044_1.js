"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffChangePower_1 = require("../Buff/DtBuffChangePower");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnHatchPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnHatchPlay");
class EC_BT5_044_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnHatchPlay);
        let ctri = new DtConTriggerCardOnHatchPlay_1.DtConTriggerCardOnHatchPlay(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtBattlePhase.None);
        ctri.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let msg = effect.eventMsg;
        if (msg && msg.card) {
            effect.AddInheritBuffTo(new DtBuffChangePower_1.DtBuffChangePower(-3).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), msg.card);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_044_1;
//# sourceMappingURL=EC_BT5_044_1.js.map