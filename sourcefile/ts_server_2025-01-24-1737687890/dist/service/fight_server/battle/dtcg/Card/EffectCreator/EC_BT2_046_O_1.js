"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT2_046_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        let ctri = this.GetBattleDestroyDigimonAndSelfAlive(DtEnum_1.DtEffectRoundValid.Self);
        ctri.GetDefCon()?.SetLv(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 6);
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_046_O_1;
//# sourceMappingURL=EC_BT2_046_O_1.js.map