"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardLv_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardLv");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
class EC_BT2_030_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        this.CreateCommonArea_Mul(DtEffectType_1.DtEffectType.OnPlay, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA, 2);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_CardLv_1.DtCardFilter_CardLv(DtEnum_1.DtFilterCompare.LESS_EQUAL, 4));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnHand, 0));
    }
}
exports.default = EC_BT2_030_1;
//# sourceMappingURL=EC_BT2_030_1.js.map