"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardMove_1 = require("../Effect/TriggerCondition/DtConTriggerCardMove");
class EC_BT7_072_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardMove);
        let effcon = new DtConTriggerCardMove_1.DtConTriggerCardMove(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtSkillTargetToPlayer.Self).SetBeDiscardFromHand();
        effcon.SetCondition(this, this.TriggerFunc);
        effect.SetTriggerCondition(effcon);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND | DtEnum_1.DtAreaType.GY);
        effect.SetEffectActivateAsk();
        effect.SetCondition(this.Con);
        effect.SetEffect(this.play, null);
    }
    Con() {
        return this.GetPlayer().areaGraveyard.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10918, true);
        });
    }
    TriggerFunc(d) {
        return d.card == this.parent;
    }
    play() {
        this.UseCard(this.parent, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_072_1;
//# sourceMappingURL=EC_BT7_072_1.js.map