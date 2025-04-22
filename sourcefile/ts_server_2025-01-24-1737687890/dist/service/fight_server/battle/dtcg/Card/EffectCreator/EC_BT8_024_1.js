"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT8_024_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let triCon = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let concard = triCon.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        concard.SetCondition(this, (card) => { return this.parent == card; });
        effect.SetTriggerCondition(triCon);
        effect.SetCondition(this.Condition);
        effect.SetEffect(this.Draw, null);
    }
    Condition() {
        return this.GetPlayer().areaDefense.CardCount() <= 3;
    }
    Draw() {
        this.GetManager().OnRestore(this.parent, this.GetPlayer(), 1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_024_1;
//# sourceMappingURL=EC_BT8_024_1.js.map