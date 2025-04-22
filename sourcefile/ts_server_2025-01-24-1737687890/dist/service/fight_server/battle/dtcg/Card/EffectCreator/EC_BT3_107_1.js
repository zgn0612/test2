"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Degenerate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Degenerate");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT3_107_1 extends DtEnhanceEffectCreatorts_1.default {
    destoryCard;
    SetEffect() {
        let effect = this.CreateCommonArea_single(DtEffectType_1.DtEffectType.OnUseEffect, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        effect.SetInitFunc(() => { this.destoryCard = null; });
        effect.SetEffect(this.OnDestory, null);
    }
    OnCommonAreaSetFilter(mcFliter) {
        mcFliter.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
    }
    OnCommonAreaSetOperate(mcOperate) {
        let deg = new DtCardOperate_Degenerate_1.DtCardOperate_Degenerate(1);
        deg.DegCallBack = (card) => {
            this.destoryCard = card;
        };
        mcOperate.SetOperate(deg);
        mcOperate.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            if (this.destoryCard == null) {
                this.destoryCard = card;
            }
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
    }
    OnDestory() {
        if (this.destoryCard) {
            if (this.destoryCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA && this.destoryCard.GetConfigCost() <= 4 && this.destoryCard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.GetManager().OnCardDestroy(this.parent, this.destoryCard);
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_107_1;
//# sourceMappingURL=EC_BT3_107_1.js.map