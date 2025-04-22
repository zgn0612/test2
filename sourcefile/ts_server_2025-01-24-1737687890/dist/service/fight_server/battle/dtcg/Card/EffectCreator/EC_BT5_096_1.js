"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT5_096_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let dp = 3000;
        let hasCon = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10010) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10008);
        });
        if (hasCon) {
            dp = 5000;
        }
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() <= dp) {
                this.GetManager().OnCardReturnTo(this.parent, card, DtEnum_1.DtActionEffectType.BattleReturnHand, 0);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT5_096_1;
//# sourceMappingURL=EC_BT5_096_1.js.map