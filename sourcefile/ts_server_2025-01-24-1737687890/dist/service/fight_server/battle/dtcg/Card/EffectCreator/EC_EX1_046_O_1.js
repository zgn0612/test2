"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtConst_1 = require("../../Data/DtConst");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
class EC_EX1_046_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Self, ...DtConst_1.DtConst.ACTION_DESTORY);
        let tcard = ctri.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => {
            if (card != this.parent) {
                if (card.NameIsForceOtherCard(this.parent)) {
                    return true;
                }
            }
            return false;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX1_046_O_1;
//# sourceMappingURL=EC_EX1_046_O_1.js.map