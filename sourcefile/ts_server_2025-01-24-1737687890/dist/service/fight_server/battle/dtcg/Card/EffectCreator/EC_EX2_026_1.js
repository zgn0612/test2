"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_EX2_026_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        let coni = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Self);
        let cardi = coni.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        cardi.SetCondition(this, (card) => { return card == this.parent; });
        effect.SetTriggerCondition(coni);
        effect.SetCondition(this.Con);
        effect.SetEffect(this.Effect, null);
    }
    Con() {
        return this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Green);
        });
    }
    Effect() {
        this.GetManager().GetCurrentFsmEvo().SetChangeCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_EX2_026_1;
//# sourceMappingURL=EC_EX2_026_1.js.map