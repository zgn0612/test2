"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtConTriggerRoundStart_1 = require("../Effect/TriggerCondition/DtConTriggerRoundStart");
class EC_BT5_093_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        effect.SetTriggerCondition(new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self));
        effect.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetCondition(this.E1Condition);
        effect.SetEffect(this.E1Effect, null);
    }
    E1Condition(effect) {
        return this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, this.GetLvToEff(6));
        });
    }
    E1Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_093_1;
//# sourceMappingURL=EC_BT5_093_1.js.map