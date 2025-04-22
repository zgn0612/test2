"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT2_031_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(effect) {
        effect.AddNewBuffTo(this.GetBuff_ChangeDP(this.DpBuffCon), this.parent);
        effect.AddNewBuffTo(this.GetBuff_ChangePower(this.PowerBuffCon), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
    DpBuffCon() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let con = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() == 0;
        });
        if (con) {
            return 1000;
        }
        return 0;
    }
    PowerBuffCon() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let con = this.GetOppPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetOriginDigimonCount() == 0;
        });
        if (con) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT2_031_1;
//# sourceMappingURL=EC_BT2_031_1.js.map