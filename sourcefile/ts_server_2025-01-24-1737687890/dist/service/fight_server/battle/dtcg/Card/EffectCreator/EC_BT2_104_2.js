"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffChangeDP_1 = require("../Buff/DtBuffChangeDP");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT2_104_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect(effect) {
        let cards = this.GetPlayer().areaInBattle.GetTheCopyCards();
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER)) {
                if (cards[i].cardBattleState == DtEnum_1.DtCardBattleState.Reset) {
                    this.GetManager().OnSetCardActiveState(this.parent, cards[i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                }
                effect.AddInheritBuffTo(new DtBuffChangeDP_1.DtBuffChangeDP(5000).SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOver), cards[i]);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT2_104_2;
//# sourceMappingURL=EC_BT2_104_2.js.map