"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardBeforeEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeEvolution");
class EC_BT7_040_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeEvolution);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        let triCon = new DtConTriggerCardBeforeEvolution_1.DtConTriggerCardBeforeEvolution(DtEnum_1.DtEffectRoundValid.Both);
        triCon.SetOriCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        let tevo = triCon.SetEvoCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        tevo.SetArea(DtEnum_1.DtAreaType.HAND);
        tevo.SetCondition(this, (card) => { return this.parent == card; });
        effect.SetTriggerCondition(triCon);
        effect.SetEffect(this.changeCost, null);
    }
    changeCost() {
        let count = this.GetPlayer().areaDefense.CardCount();
        if (count > 0) {
            this.GetManager().GetCurrentFsmEvo().SetCost(count);
        }
        else {
            this.GetManager().GetCurrentFsmEvo().SetCost(1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_040_1;
//# sourceMappingURL=EC_BT7_040_1.js.map