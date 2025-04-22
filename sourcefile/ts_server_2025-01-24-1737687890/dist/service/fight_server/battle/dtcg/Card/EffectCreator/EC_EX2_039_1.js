"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_EX2_039_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let ctri = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Both, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromDeck();
        ctri.SetCondition(this, (msg) => {
            if (msg.caster == null) {
                return false;
            }
            if (msg.caster.config.card_number != this.parent.config.card_number) {
                if (msg.card == this.parent) {
                    return true;
                }
            }
            return false;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDiscardDeckTopCard(this.parent, this.GetPlayer(), 3);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_039_1;
//# sourceMappingURL=EC_EX2_039_1.js.map