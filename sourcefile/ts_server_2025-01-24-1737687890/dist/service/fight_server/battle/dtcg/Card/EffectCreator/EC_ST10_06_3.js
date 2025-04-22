"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardOnPlay_1 = require("../Effect/TriggerCondition/DtConTriggerCardOnPlay");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_ST10_06_3 extends DtEnhanceEffectCreatorts_1.default {
    lv = 0;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardOnPlay);
        let ctri = new DtConTriggerCardOnPlay_1.DtConTriggerCardOnPlay(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Self);
        ctri.SetCondition(this, (msg) => {
            if (msg.reason == DtMessageData_1.DtProtoEnum_MoveReason.EffectToBattle || msg.reason == DtMessageData_1.DtProtoEnum_MoveReason.FromOriginToBattle) {
                if (msg.card != this.parent && msg.card.CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, 1)) {
                    return true;
                }
            }
            return false;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetCheckSameChainCall(this.CheckSame);
        this.Skill(effect);
    }
    CheckSame(a, b) {
        if (a.card.CardLvIs(DtEnum_1.DtFilterCompare.GREATE_EQUAL, b.card.GetCardConfigLv())) {
            return a;
        }
        return b;
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card, eff) => {
            let msg = effect.eventMsg;
            if (msg) {
                if (card.CardLvIs(DtEnum_1.DtFilterCompare.LESS_EQUAL, msg.card.GetCardConfigLv())) {
                    return true;
                }
            }
            return false;
        }));
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
}
exports.default = EC_ST10_06_3;
//# sourceMappingURL=EC_ST10_06_3.js.map