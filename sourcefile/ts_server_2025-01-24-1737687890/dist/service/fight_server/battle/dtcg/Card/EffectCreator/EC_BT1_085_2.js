"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
class EC_BT1_085_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffectDirect();
    }
    Effect1(effect) {
        let buff = this.GetGlobalBuff_ChangePower(this.buffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Self);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    buffCon(buff, card) {
        if (this.GetPlayer().IsThisPlayerRound()) {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (card.ColorIs(DtEnum_1.DtCardColor.Red)) {
                    if (card.GetOriginDigimonCount() >= 4) {
                        return 1;
                    }
                }
            }
        }
        return 0;
    }
}
exports.default = EC_BT1_085_2;
//# sourceMappingURL=EC_BT1_085_2.js.map