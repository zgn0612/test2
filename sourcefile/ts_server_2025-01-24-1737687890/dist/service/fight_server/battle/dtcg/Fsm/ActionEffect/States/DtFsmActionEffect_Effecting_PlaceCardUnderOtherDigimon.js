"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    Enter() {
        if (this.GetMachine().IsImmueEffect()) {
            this.GetMachine().ForceOver();
            return;
        }
        let battlecard = this.GetMachine().extraOtherCard;
        if (battlecard == null) {
            this.GetMachine().ForceOver();
            return;
        }
        let placeCard = this.GetMachine().receiveCard;
        if (placeCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            placeCard.ClearCardOriginListToGy();
            placeCard.ResetState();
        }
        let evoOriCards = battlecard.GetOriginDigimonList();
        this.GetMachine().manager.OnCardMoveTo(null, placeCard, DtEnum_1.DtAreaType.OTHER_EVO, DtMessageData_1.DtProtoEnum_MoveReason.SetToOri);
        let where = this.GetMachine().param;
        if (where == 1 || evoOriCards.length == 0) {
            battlecard.evoOriginPrevCardUId = placeCard.uid;
            if (evoOriCards.length > 0) {
                placeCard.evoOriginPrevCardUId = evoOriCards[0].uid;
            }
            this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(placeCard.parent, placeCard);
            this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(battlecard.parent, battlecard);
        }
        else if (where == 0) {
            if (evoOriCards.length > 0) {
                evoOriCards[evoOriCards.length - 1].evoOriginPrevCardUId = placeCard.uid;
                this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(evoOriCards[evoOriCards.length - 1].parent, evoOriCards[evoOriCards.length - 1]);
                this.GetMachine().manager.Get2ClientMessageMgr().UpdateCardDetails(battlecard.parent, battlecard);
            }
        }
        battlecard.CalculateDigimonOriginList();
        let oCard = placeCard;
        if (oCard) {
            let oriEffects = oCard.originEffect;
            for (let j = 0; j < oriEffects.length; j++) {
                oriEffects[j].Init(battlecard);
            }
        }
        battlecard.CheckEffectListener();
        battlecard.OnNewEvoActivateInBattleArea(placeCard);
        this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
    }
}
exports.DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon = DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon;
//# sourceMappingURL=DtFsmActionEffect_Effecting_PlaceCardUnderOtherDigimon.js.map