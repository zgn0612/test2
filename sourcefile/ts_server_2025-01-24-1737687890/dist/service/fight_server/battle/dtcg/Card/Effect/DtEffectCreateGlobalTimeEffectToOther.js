"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtGlobalBuff_EmptyBuff_1 = require("../GlobalBuff/DtGlobalBuff_EmptyBuff");
class DtEffectCreateGlobalTimeEffectToOther extends DtEffectCreator_1.DtEffectCreator {
    skillName = "";
    time;
    roundValid;
    CreateEffectCreateEffectToOther(time, param, toEffectTarget) {
        this.time = time;
        this.CreateGlobalBuffToClient();
        let effect = this.CreateTimeEffectToCard(this.parent, time, param);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetTriggerAreaAllExceptDigitama();
        effect.SetEffectDirect();
        effect.SetEffect(this.Effect, null);
        let skill = this.OnGetEffect();
        if (skill) {
            this.skillName = skill.EffectCreatorConstructorName;
        }
        this.roundValid = toEffectTarget;
        effect.SetOverFunc(this.ClearAll);
    }
    CreateGlobalBuffToClient() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.CreateGlobalBuffEffect, null);
        effect.SetEffectDirect();
    }
    CreateGlobalBuffEffect() {
        let buff = new DtGlobalBuff_EmptyBuff_1.DtGlobalBuff_EmptyBuff(this.parent, this);
        buff.SetBuffDurationType(this.time, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect() {
        switch (this.roundValid) {
            case DtEnum_1.DtEffectRoundValid.Self:
                this.ChechPlayer(this.GetPlayer());
                break;
            case DtEnum_1.DtEffectRoundValid.Opponent:
                this.ChechPlayer(this.GetOppPlayer());
                break;
            case DtEnum_1.DtEffectRoundValid.Both:
                this.ChechPlayer(this.GetPlayer());
                this.ChechPlayer(this.GetOppPlayer());
                break;
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    ChechPlayer(player) {
        player.areaInBattle.ForeachCards((card) => {
            let con = this.OnCondition(card);
            if (con) {
                if (card.CheckHasOfferEffect(this.skillName, this.parent, this) == false) {
                    let effCreator = this.OnGetEffect();
                    if (effCreator) {
                        this.CreateEffectTo(effCreator, card, false);
                    }
                }
            }
            else {
                card.DeleteOfferEffectCreatorClassName(this.skillName, this.parent, this);
            }
        });
    }
    ClearAll() {
        this.GetPlayer().areaInBattle.ForeachCards((card) => {
            card.DeleteOfferEffectCreatorClassName(this.skillName, this.parent, this);
        });
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            card.DeleteOfferEffectCreatorClassName(this.skillName, this.parent, this);
        });
    }
    OnGetEffect() {
        return null;
    }
    OnCondition(card) {
        return false;
    }
}
exports.default = DtEffectCreateGlobalTimeEffectToOther;
//# sourceMappingURL=DtEffectCreateGlobalTimeEffectToOther.js.map