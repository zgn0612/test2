"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtCardOperate_ForceOverActionEffect_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_ForceOverActionEffect");
const DtEffect_1 = require("./DtEffect");
const DtEffectType_1 = require("./DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("./DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("./TriggerCondition/DtConTriggerCardBeforeActEffect");
class DtDecoyEffectCreator extends DtEnhanceEffectCreatorts_1.default {
    color;
    CreateDecoyEffect(...color) {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.Decoy;
        this.SetDecoyEffect(effect, ...color);
    }
    SetDecoyEffect(effect, ...color) {
        this.color = color;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let contre = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtActionEffectType.EffectDestroy);
        contre.SetCasterCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        contre.SetCondition(this, this.TriCon);
        effect.SetTriggerCondition(contre);
        effect.SetEffectActivateAsk();
        effect.SetEffect(this.EffectDestorySelf, null);
        this.EffectBuff(effect);
    }
    EffectBuff(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchCustom(this.GetCards);
        skill.SetOperate(new DtCardOperate_ForceOverActionEffect_1.DtCardOperate_ForceOverActionEffect());
    }
    GetCards(eff) {
        let msg = eff.eventMsg;
        let cards = new Array();
        for (let i = 0; i < msg.rEffects.length; i++) {
            if (msg.rEffects[i].receiveCard.GetPlayer() == this.GetPlayer() && msg.rEffects[i].receiveCard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (msg.rEffects[i].receiveCard != this.parent) {
                    if (msg.rEffects[i].receiveCard.ColorMulIs(...this.color)) {
                        cards.push(msg.rEffects[i].receiveCard);
                    }
                }
            }
        }
        return cards;
    }
    TriCon(msg) {
        for (let i = 0; i < msg.rEffects.length; i++) {
            if (msg.rEffects[i].receiveCard.GetPlayer() == this.GetPlayer() && msg.rEffects[i].receiveCard.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                if (msg.rEffects[i].receiveCard != this.parent) {
                    if (msg.rEffects[i].receiveCard.ColorMulIs(...this.color)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    EffectDestorySelf(effect, skill) {
        this.GetManager().OnCardDestroy(this.parent, this.parent).SetEndCallBack((success) => {
            if (success == false) {
                skill.success = false;
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = DtDecoyEffectCreator;
//# sourceMappingURL=DtDecoyEffectCreator.js.map