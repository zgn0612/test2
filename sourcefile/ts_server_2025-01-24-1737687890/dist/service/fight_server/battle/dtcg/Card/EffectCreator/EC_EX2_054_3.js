"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
class EC_EX2_054_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffectDirect();
    }
    Effect1(effect) {
        let buff = this.GetGlobalBuff_ChangePower(this.BuffCon, DtEnum_1.DtBuffEffectToType.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, DtEnum_1.DtEffectRoundValid.Opponent);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        let con = this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
            return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10981, true) && card.GetOriginDigimonCount() >= 6;
        });
        if (con && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            return -1;
        }
        return 0;
    }
}
exports.default = EC_EX2_054_3;
//# sourceMappingURL=EC_EX2_054_3.js.map