"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT7_042_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let buff = this.GetGlobalBuff_ChangeDP(this.BuffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.DEFENSE, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        let con = this.parent.CheckOriginListWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        });
        if (con) {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return 4000;
            }
        }
        return 0;
    }
}
exports.default = EC_BT7_042_1;
//# sourceMappingURL=EC_BT7_042_1.js.map