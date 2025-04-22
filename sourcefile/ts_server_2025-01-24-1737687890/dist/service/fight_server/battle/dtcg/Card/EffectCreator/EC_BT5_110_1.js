"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_NameIs_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_NameIs");
const DtCardOperate_ReturnTo_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ReturnTo");
class EC_BT5_110_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        let skill = effect.SetEffect(this.EffectDestory2, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        mcFliter.SetFilter(new DtCardFilter_NameIs_1.DtCardFilter_NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10008));
    }
    OnCommonAreaSetOperate(mcOperate) {
        mcOperate.SetOperate(new DtCardOperate_ReturnTo_1.DtCardOperate_ReturnTo(DtEnum_1.DtActionEffectType.BattleReturnHand, 0));
    }
    EffectDestory2() {
        this.GetPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        return;
    }
}
exports.default = EC_BT5_110_1;
//# sourceMappingURL=EC_BT5_110_1.js.map