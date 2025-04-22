"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtConTriggerCardOnActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnActEffect");
class EC_ST3_04_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect1 = this.GetNewEffect();
        effect1.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnActEffect);
        let ctri = new DtConTriggerCardOnActEffect_1.DtConTriggerCardOnActEffect(DtEnum_1.DtEffectRoundValid.Self, DtEnum_1.DtActionEffectType.AtkZeroDestroy);
        ctri.SetReceiveCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        effect1.SetTriggerCondition(ctri);
        effect1.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect1.SetEffect(this.Effect1, null);
    }
    Effect1(effect) {
        this.ThisCardUseCost(-1);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_ST3_04_O_1;
//# sourceMappingURL=EC_ST3_04_O_1.js.map