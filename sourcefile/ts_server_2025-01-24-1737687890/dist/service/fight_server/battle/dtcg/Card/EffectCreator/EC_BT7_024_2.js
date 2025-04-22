"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_024_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect() {
        let globalbf = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.CAN_NOT_ATTACK, this.bufCon, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(globalbf);
        return DtEffect_1.DtEffectResult.Next;
    }
    bufCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, 3)) {
            let hasHun = this.parent.CheckOriginListWithCondition((card) => {
                return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
            });
            return hasHun;
        }
        return false;
    }
}
exports.default = EC_BT7_024_2;
//# sourceMappingURL=EC_BT7_024_2.js.map