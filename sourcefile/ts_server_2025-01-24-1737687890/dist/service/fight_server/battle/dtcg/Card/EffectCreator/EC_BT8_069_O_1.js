"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerAttackOver_1 = require("../Effect/TriggerCondition/DtConTriggerAttackOver");
class EC_BT8_069_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerAttackOver);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let ctri = new DtConTriggerAttackOver_1.DtConTriggerAttackOver(DtEnum_1.DtEffectRoundValid.Both, DtFsmAttackEnum_1.DtFsmAttackType.None);
        let catk = ctri.SetAtkCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        catk.SetCondition(this, (card) => {
            return card == this.parent;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Effect, null);
    }
    Condition(effect) {
        return this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10673);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_069_O_1;
//# sourceMappingURL=EC_BT8_069_O_1.js.map