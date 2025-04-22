"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
class EC_EX2_003_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtCardType.Magic, DtEnum_1.DtSkillTargetToPlayer.Self);
        let con = ctri.SetPlayCardCon(DtEnum_1.DtCardType.Magic, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        con.SetCostCon(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 2);
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_003_O_1;
//# sourceMappingURL=EC_EX2_003_O_1.js.map