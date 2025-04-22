"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtBuffConditionInt_1 = require("../Buff/DtBuffConditionInt");
const DtEffect_1 = require("./DtEffect");
const DtEffectCreator_1 = require("./DtEffectCreator");
const DtEffectType_1 = require("./DtEffectType");
class DtDigimonPersistenceBuff extends DtEffectCreator_1.DtEffectCreator {
    bufftype;
    roundValid;
    CreatePersistenceBuff(type, roundValid) {
        this.bufftype = type;
        this.roundValid = roundValid;
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffectDirect();
        effect.SetEffect(this.BuffEffect, null);
    }
    BuffEffect(effect) {
        switch (this.bufftype) {
            case DtEnum_1.DtBuffType.CHANGE_DP:
                effect.AddNewBuffTo(this.GetBuff_ChangeDP(this.BuffConInt), this.parent);
                break;
            case DtEnum_1.DtBuffType.CHANGE_POWER:
                effect.AddNewBuffTo(this.GetBuff_ChangePower(this.BuffConInt), this.parent);
                break;
            case DtEnum_1.DtBuffType.SET_COLOR:
                effect.AddNewBuffTo(this.GetBuff_SetColor(this.BuffConInt), this.parent);
                break;
            case DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP:
                {
                    let buf = new DtBuffConditionInt_1.DtBuffCommonInt(DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP, this.BuffConInt, this);
                    effect.AddNewBuffTo(buf, this.parent);
                }
                break;
            default:
                effect.AddNewBuffTo(this.GetBuff_Attribute(this.bufftype, this.BuffConBoolean), this.parent);
                break;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffConInt() {
        if (this.roundValid == DtEnum_1.DtEffectRoundValid.Self) {
            if (this.parent.parent.IsThisPlayerRound() == false) {
                return 0;
            }
        }
        else if (this.roundValid == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (this.parent.parent.IsThisPlayerRound()) {
                return 0;
            }
        }
        return this.OnIntBuffCondition();
    }
    OnIntBuffCondition() {
        return 0;
    }
    BuffConBoolean() {
        if (this.roundValid == DtEnum_1.DtEffectRoundValid.Self) {
            if (this.GetPlayer().IsThisPlayerRound() == false) {
                return false;
            }
        }
        else if (this.roundValid == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (this.GetPlayer().IsThisPlayerRound()) {
                return false;
            }
        }
        return this.OnBooleanCondition();
    }
    OnBooleanCondition() {
        return false;
    }
}
exports.default = DtDigimonPersistenceBuff;
//# sourceMappingURL=DtDigimonPersistenceBuff.js.map