"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT7_089_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let conevo = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let conori = conevo.SetOriCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        conori.SetCondition(this, (card) => {
            return card == this.parent;
        });
        conevo.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.Green, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(conevo);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_089_2;
//# sourceMappingURL=EC_BT7_089_2.js.map