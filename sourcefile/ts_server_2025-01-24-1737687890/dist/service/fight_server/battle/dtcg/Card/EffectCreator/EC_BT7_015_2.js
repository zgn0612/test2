"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT7_015_2 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetEffect(this.EffectReturn, null);
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card.GetLastDP() <= this.GetDPDestory(8000) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138);
        }));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    EffectReturn(effect) {
        let count = 0;
        this.GetPlayer().areaGraveyard.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Magic) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138)) {
                this.GetManager().OnCardMoveToBottom(this.parent, card, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                count++;
            }
        });
        this.GetOppPlayer().areaGraveyard.ForeachCards((card) => {
            if (card.CardTypeIs(DtEnum_1.DtCardType.Magic) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_138)) {
                this.GetManager().OnCardMoveToBottom(this.parent, card, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
                count++;
            }
        });
        if (count < 7) {
            effect.ForceOver();
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_015_2;
//# sourceMappingURL=EC_BT7_015_2.js.map