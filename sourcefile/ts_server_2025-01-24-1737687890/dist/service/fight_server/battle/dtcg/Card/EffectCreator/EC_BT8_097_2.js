"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalPlayerBuff_1 = require("../GlobalBuff/DtGlobalPlayerBuff");
class EC_BT8_097_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
        effect.SetEffect(this.EffectDes, null);
    }
    Effect() {
        let buff = new DtGlobalPlayerBuff_1.DtGlobalPlayerBuff(this.parent, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtBuffType.CAN_NOT_EFFECT_PLAY_MONSTER, null, this);
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.GetManager().globalBuffMgr.AddPlayerBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectDes() {
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) && card.GetLastDP() <= this.GetDPDestory(6000)) {
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_097_2;
//# sourceMappingURL=EC_BT8_097_2.js.map