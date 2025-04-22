"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_EX1_061_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffectDirect();
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let gbuff = this.GetGlobalBuff_Attribute(DtEnum_1.DtBuffType.ATTACK_LV_LQ_4_ACTIVATE_DIGIMON, this.BuffCon, DtEnum_1.DtBuffEffectToType.Self, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Self);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(gbuff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10099)) {
            let mz = card.HasEffect(DtEnum_1.EFFECT_NAME.MICHIZURE);
            return mz;
        }
        return false;
    }
}
exports.default = EC_EX1_061_O_1;
//# sourceMappingURL=EC_EX1_061_O_1.js.map