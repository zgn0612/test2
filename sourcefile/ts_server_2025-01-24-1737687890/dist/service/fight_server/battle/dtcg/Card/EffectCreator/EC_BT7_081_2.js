"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardEvolution_1 = require("../Effect/TriggerCondition/DtConTriggerCardEvolution");
class EC_BT7_081_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardEvolution);
        let ctri = new DtConTriggerCardEvolution_1.DtConTriggerCardEvolution(DtEnum_1.DtEffectRoundValid.Self);
        ctri.SetOriCardCon(DtEnum_1.DtCardType.Role, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        effect.SetTriggerCondition(ctri);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetEffect(this.Cost, null);
    }
    Cost() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_081_2;
//# sourceMappingURL=EC_BT7_081_2.js.map