"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT8_019_1 extends DtEnhanceEffectCreatorts_1.default {
    chooseCard;
    destoryList;
    SetEffect() {
        this.destoryList = new Array();
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetInitFunc(() => {
            this.chooseCard = null;
            this.destoryList.length = 0;
        });
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Opponent, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.chooseCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
        effect.SetEffect(this.Effect, null);
        effect.SetEffect(this.Cost, null);
    }
    Effect() {
        this.destoryList.length = 0;
        this.GetPlayer().areaInBattle.ForeachCards((card) => {
            if (card != this.parent && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.destoryList.push(card);
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            if (card != this.chooseCard && card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                this.destoryList.push(card);
                this.GetManager().OnCardDestroy(this.parent, card);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    Cost() {
        let cost = 0;
        for (let i = 0; i < this.destoryList.length; i++) {
            if (this.destoryList[i].whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                if (this.destoryList[i].lastEffectedType == DtEnum_1.DtActionEffectType.EffectDestroy) {
                    cost++;
                }
            }
        }
        this.ThisCardUseCost(-cost);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT8_019_1;
//# sourceMappingURL=EC_BT8_019_1.js.map