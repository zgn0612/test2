"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_HasEffectWithTrigger_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_HasEffectWithTrigger");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
class EC_BT5_031_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnEvolution, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetCondition(this.Con);
    }
    Con(effect) {
        return this.parent.CheckOriginListWithCondition((card) => {
            if (card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10010)) {
                return true;
            }
            return false;
        });
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_HasEffectWithTrigger_1.DtCardFilter_HasEffectWithTrigger(DtEffectType_1.DtEffectType.OnDestory));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnDeck, 0));
    }
}
exports.default = EC_BT5_031_1;
//# sourceMappingURL=EC_BT5_031_1.js.map