"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_TakeCardsToContainer = void 0;
const DtEnum_1 = require("../../../../dtcg/Data/DtEnum");
const ADefine_1 = require("../ADefine");
const AICon_base_1 = require("./AICon_base");
class AICon_TakeCardsToContainer extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = null;
        switch (this.eArea1) {
            case ADefine_1.AiFilterArea.Card_CanAttacks:
                if (this.root.aiCardRoot) {
                    if (this.root.aiCardRoot.CardCanAttack()) {
                        let opcards = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                        cards = new Array();
                        for (let i = 0; i < opcards.length; i++) {
                            if (opcards[i].CanBeAttack(this.root.aiCardRoot)) {
                                cards.push(opcards[i]);
                            }
                        }
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Card_CanEvos:
                if (this.root.aiCardRoot) {
                    if (this.root.aiCardRoot.CardCanEvo()) {
                        let selfCards = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                        cards = new Array();
                        for (let i = 0; i < selfCards.length; i++) {
                            if (selfCards[i].CardCanEvoThis(this.root.aiCardRoot)) {
                                cards.push(selfCards[i]);
                            }
                        }
                        let hatch = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                        for (let i = 0; i < hatch.length; i++) {
                            if (hatch[i].CardCanEvoThis(this.root.aiCardRoot)) {
                                cards.push(hatch[i]);
                            }
                        }
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Card_Origins:
                if (this.root.aiCardRoot) {
                    cards = this.root.aiCardRoot.GetOriginDigimonList();
                }
                break;
            case ADefine_1.AiFilterArea.Opp_Battle:
                cards = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Opp_GY:
                cards = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.GY).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Opp_Hatch:
                cards = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Self_GY:
                cards = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.GY).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Self_Hand:
                cards = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.HAND).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Self_Hatch:
                cards = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Self_Battle:
                cards = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                break;
            case ADefine_1.AiFilterArea.Self_HAND_BATTLE_HATCH:
                {
                    cards = new Array();
                    let hand = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.HAND).GetTheCopyCards();
                    for (let i = 0; i < hand.length; i++) {
                        cards.push(hand[i]);
                    }
                    let hatch = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                    for (let i = 0; i < hatch.length; i++) {
                        cards.push(hatch[i]);
                    }
                    let battle = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                    for (let i = 0; i < battle.length; i++) {
                        cards.push(battle[i]);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Opp_HATCH_BATTLE:
                {
                    cards = new Array();
                    let hatch = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                    for (let i = 0; i < hatch.length; i++) {
                        cards.push(hatch[i]);
                    }
                    let battle = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                    for (let i = 0; i < battle.length; i++) {
                        cards.push(battle[i]);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Self_Battle_AND_ALL_ORIGINS:
                {
                    cards = new Array();
                    let evos = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.OTHER_EVO).GetTheCopyCards();
                    for (let i = 0; i < evos.length; i++) {
                        cards.push(evos[i]);
                    }
                    let battle = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                    for (let i = 0; i < battle.length; i++) {
                        cards.push(battle[i]);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Opp_Battle_AND_ALL_ORIGINS:
                {
                    cards = new Array();
                    let evos = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.OTHER_EVO).GetTheCopyCards();
                    for (let i = 0; i < evos.length; i++) {
                        cards.push(evos[i]);
                    }
                    let battle = this.root.GetOPPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                    for (let i = 0; i < battle.length; i++) {
                        cards.push(battle[i]);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Self_Hand_Can_evo_cards:
                {
                    cards = new Array();
                    let evos = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.HAND).GetTheCopyCards();
                    for (let i = 0; i < evos.length; i++) {
                        if (evos[i].CardCanEvo()) {
                            cards.push(evos[i]);
                        }
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Current_Attacker:
                {
                    cards = new Array();
                    if (this.root.GetBattleScene().attacker != null) {
                        cards.push(this.root.GetBattleScene().attacker);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.Current_Defenseer:
                {
                    cards = new Array();
                    if (this.root.GetBattleScene().defenseer != null) {
                        cards.push(this.root.GetBattleScene().defenseer);
                    }
                }
                break;
            case ADefine_1.AiFilterArea.self_battle_hatch:
                {
                    cards = new Array();
                    let hatch = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).GetTheCopyCards();
                    for (let i = 0; i < hatch.length; i++) {
                        cards.push(hatch[i]);
                    }
                    let battle = this.root.GetAIPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                    for (let i = 0; i < battle.length; i++) {
                        cards.push(battle[i]);
                    }
                }
        }
        if (cards) {
            this.root.SetContainerCards(this.sParam1, cards);
        }
        return true;
    }
}
exports.AICon_TakeCardsToContainer = AICon_TakeCardsToContainer;
//# sourceMappingURL=AICon_TakeCardsToContainer.js.map