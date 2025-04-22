"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtEffect_1 = require("./DtEffect");
const DtEffectType_1 = require("./DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("./DtEnhanceEffectCreatorts");
class DtEffectChangePlayCostCreator extends DtEnhanceEffectCreatorts_1.default {
    CreateBeforePlayChangeCost(isAsk, funcBefore) {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnBeforePlay);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        effect.SetCondition(this.BeforePlayCondition);
        if (isAsk) {
            effect.SetEffectActivateAsk();
        }
        if (funcBefore) {
            funcBefore(effect);
        }
        let skill = effect.SetEffect(this.BeforeEffect, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        let effectPre = this.GetNewEffect();
        effectPre.SetTriggerType(DtEffectType_1.DtEffectType.OnPrecalculateCost);
        effectPre.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effectPre.SetCondition(this.PreCon);
        effectPre.SetEffect(this.PreEffect, null);
        effectPre.SetEffectDirect();
    }
    BeforePlayCondition(effect) {
        let msg = effect.eventMsg;
        if (msg.card.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return false;
        }
        return this.OnBeforePlayCon(msg);
    }
    OnBeforePlayCon(msg) {
        return false;
    }
    BeforeEffect(effect) {
        let msg = effect.eventMsg;
        if (msg.fsm) {
            msg.fsm.SetChangeCost(this.OnGetChangeCost());
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    OnGetChangeCost() {
        return 0;
    }
    PreCon(effect) {
        let msg = effect.eventMsg;
        if (msg.card.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return false;
        }
        return this.OnBeforePlayCon(msg);
    }
    PreEffect(effect) {
        let msg = effect.eventMsg;
        msg.cost = this.OnGetChangeCost();
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateBeforePlaySetCost(isAsk, funcBefore) {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnBeforePlay);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.HAND);
        effect.SetCondition(this.BeforePlayCondition);
        if (isAsk) {
            effect.SetEffectActivateAsk();
        }
        if (funcBefore) {
            funcBefore(effect);
        }
        let skill = effect.SetEffect(this.BeforeSetEffect, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        let effectPre = this.GetNewEffect();
        effectPre.SetTriggerType(DtEffectType_1.DtEffectType.OnPrecalculateCost);
        effectPre.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effectPre.SetCondition(this.PreCon);
        effectPre.SetEffect(this.PreSetEffect, null);
        effectPre.SetEffectDirect();
    }
    BeforeSetEffect(effect) {
        let msg = effect.eventMsg;
        if (msg.fsm) {
            msg.fsm.ForceSetCost(this.OnGetChangeCost());
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    PreSetEffect(effect) {
        let msg = effect.eventMsg;
        msg.setCost = this.OnGetChangeCost();
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateTriggerPlayChangeCost(isAsk, funcBefore, otherType) {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBeforePlay);
        this.OnSetEffectTriggerCondition(effect);
        effect.SetCondition(this.BeforePlayCondition);
        if (isAsk) {
            effect.SetEffectActivateAsk();
        }
        if (funcBefore) {
            funcBefore(effect);
        }
        if (otherType != DtEffect_1.DtEffectOtherType.None) {
            effect.SetOtherType(otherType);
        }
        let skill = effect.SetEffect(this.BeforeEffect, null);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        let effectPre = this.GetNewEffect();
        effectPre.SetTriggerType(DtEffectType_1.DtEffectType.TriggerPrecalculateCost);
        this.OnSetEffectTriggerCondition(effectPre);
        effectPre.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effectPre.SetCondition(this.PreCon);
        effectPre.SetEffect(this.PreEffect, null);
        effectPre.SetEffectDirect();
        if (otherType == DtEffect_1.DtEffectOtherType.OneTurnOnce) {
            effectPre.BindOnceTurnOnceEffect(effect);
        }
    }
    OnSetEffectTriggerCondition(effect) {
    }
}
exports.default = DtEffectChangePlayCostCreator;
//# sourceMappingURL=DtEffectChangePlayCostCreator.js.map