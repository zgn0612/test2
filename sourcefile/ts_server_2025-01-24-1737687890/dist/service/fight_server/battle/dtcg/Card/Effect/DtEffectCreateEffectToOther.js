"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class DtEffectCreateEffectToOther extends DtEffectCreator_1.DtEffectCreator {
    skillName = "";
    roundValid;
    CreateEffectCreateEffectToOther(toEffectTarget) {
        this.CreateEmptyGlobalBuffToClient();
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetEffectDirect();
        effect.SetEffect(this.Effect, null);
        let skill = this.OnGetEffect();
        if (skill) {
            this.skillName = skill.EffectCreatorConstructorName;
        }
        this.roundValid = toEffectTarget;
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
                        this.CreateEffectTo(effCreator, card, true);
                    }
                }
            }
            else {
                card.DeleteOfferEffectCreatorClassName(this.skillName, this.parent, this);
            }
        });
    }
    OnGetEffect() {
        return null;
    }
    OnCondition(card) {
        return false;
    }
}
exports.default = DtEffectCreateEffectToOther;
//# sourceMappingURL=DtEffectCreateEffectToOther.js.map