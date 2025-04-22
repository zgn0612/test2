"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_Degenerate_Effecting = void 0;
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_Degenerate_Effecting extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        let caster = this.GetMachine().caster;
        let oriCard = this.GetMachine().receiveCard;
        let realDegenerate = this.GetMachine().effectParam;
        let degCard = oriCard.parent.CardDegenerate(caster, oriCard, realDegenerate.toNumber());
        let save = degCard.evoOriginPrevCardUId;
        degCard.ResetState();
        degCard.evoOriginPrevCardUId = save;
        degCard.CalculateDigimonOriginList();
        degCard.cardBattleState = oriCard.cardBattleState;
        degCard.cardSummonRound = oriCard.cardSummonRound;
        this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(degCard.parent, degCard);
        degCard.SetCardEvoOriginSkill();
        degCard.SetInheritBuff(oriCard.PopInheritBuff());
        degCard.UpdateInheritEffectData(oriCard.effects);
        degCard.SetInheritEffect(oriCard.PopInheritEffects());
        degCard.OnInBattleArea();
        if (this.GetMachine().DegCallBack) {
            this.GetMachine().DegCallBack(degCard);
            this.GetMachine().DegCallBack = null;
        }
        this.GetMachine().manager.ChangeBattleCardInfo(oriCard, degCard);
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_Degenerate_Effecting = DtFsmActionEffect_Effecting_Degenerate_Effecting;
//# sourceMappingURL=DtFsmActionEffect_Effecting_Degenerate_Effecting.js.map