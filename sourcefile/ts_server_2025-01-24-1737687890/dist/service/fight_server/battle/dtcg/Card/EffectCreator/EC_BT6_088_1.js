"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnHatchPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnHatchPlay");
class EC_BT6_088_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnHatchPlay);
        let ctri = new DtConTriggerCardOnHatchPlay_1.DtConTriggerCardOnHatchPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtBattlePhase.None);
        let tcard = ctri.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tcard.SetCondition(this, (card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10009) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10010);
        });
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-1);
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT6_088_1;
//# sourceMappingURL=EC_BT6_088_1.js.map