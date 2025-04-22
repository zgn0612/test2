"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnHatchPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnHatchPlay");
class EC_BT8_094_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnHatchPlay);
        let ctri = new DtConTriggerCardOnHatchPlay_1.DtConTriggerCardOnHatchPlay(DtEnum_1.DtEffectRoundValid.Opponent, DtEnum_1.DtBattlePhase.None);
        let ccard = ctri.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        ccard.SetLv(DtEnum_1.DtFilterCompare.EQUAL, 3);
        effect.SetTriggerCondition(ctri);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        this.ThisCardUseCost(-2);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_094_2;
//# sourceMappingURL=EC_BT8_094_2.js.map