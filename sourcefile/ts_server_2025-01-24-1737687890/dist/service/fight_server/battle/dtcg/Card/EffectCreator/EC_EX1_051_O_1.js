"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX1_051_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect, null);
        effect.SetEffectDirect();
    }
    Effect(effect) {
        let buff = this.GetGlobalBuff_ChangeDP(this.buffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Both);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    buffCon(buff, card) {
        if (this.parent != card) {
            if (this.parent.NameIsForceOtherCard(card)) {
                return 2000;
            }
        }
        return 0;
    }
}
exports.default = EC_EX1_051_O_1;
//# sourceMappingURL=EC_EX1_051_O_1.js.map