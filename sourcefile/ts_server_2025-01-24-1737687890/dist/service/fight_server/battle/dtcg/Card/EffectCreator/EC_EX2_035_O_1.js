"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
class EC_EX2_035_O_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effec = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnWhenAttacking, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effec.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effec.SetCondition(this.Con);
    }
    Con() {
        let c = this.GetPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.CardTypeIs(DtEnum_1.DtCardType.Role) && card.ColorIs(DtEnum_1.DtCardColor.Black);
        });
        return c >= 2;
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1));
    }
}
exports.default = EC_EX2_035_O_1;
//# sourceMappingURL=EC_EX2_035_O_1.js.map