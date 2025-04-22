"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtGroupSkillPlayerBrowse_1 = require("../Skill/DtGroupSkillPlayerBrowse");
const DtCardOperate_DeckCardBrowseAndDiscard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DeckCardBrowseAndDiscard");
const DtCardOperate_MoveToBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveToBottom");
const DtCardOperate_MoveTo_Deck_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Deck");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
const DtEnhanceEffectCreatorts_1 = require("./DtEnhanceEffectCreatorts");
class DtGroupBrowseCardsCreator extends DtEnhanceEffectCreatorts_1.default {
    deckBrowseCount;
    SetCommonBrowseFromDeckThenBottom(effect, browseCount, getCardCount, func) {
        this.deckBrowseCount = browseCount;
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.GetDeckCards);
        for (let i = 0; i < getCardCount; i++) {
            group.SetOperate((skill) => {
                skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
                func(skill, i);
            });
        }
        group.SetOperate(this.OperateSortToDeck, false);
        group.RegisterToEffect(effect);
        return group;
    }
    SetCommonBrowseFromDeckThenDeckTop(effect, browseCount, getCardCount, func) {
        this.deckBrowseCount = browseCount;
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.GetDeckCards);
        for (let i = 0; i < getCardCount; i++) {
            group.SetOperate((skill) => {
                skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
                func(skill, i);
            });
        }
        group.SetOperate(this.OperateSortToDeckTop, false);
        group.RegisterToEffect(effect);
        return group;
    }
    ChangeBrowseCount(number) {
        this.deckBrowseCount = number;
    }
    GetDeckCards() {
        let cards = this.GetPlayer().areaDeck.GetTopCards(this.deckBrowseCount);
        for (let i = 0; i < cards.length; i++) {
            this.GetManager().OnCardMoveTo(this.parent, cards[i], DtEnum_1.DtAreaType.BROWSE, DtMessageData_1.DtProtoEnum_MoveReason.Brownse);
        }
        return cards;
    }
    OperateSortToDeck(skill) {
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.SORT, 1, false));
        skill.SetOperate(new DtCardOperate_MoveToBottom_1.DtCardOperate_MoveToBottom(DtEnum_1.DtAreaType.DECK));
    }
    OperateSortToDeckTop(skill) {
        skill.needreverse = true;
        skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.SORT, 1, false));
        skill.SetOperate(new DtCardOperate_MoveTo_Deck_1.DtCardOperate_MoveTo_Deck());
    }
    SetCommonBrowseFrommDeckThenDiscard(effect, browseCount, getCardCount, func) {
        this.deckBrowseCount = browseCount;
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.GetDeckCards);
        for (let i = 0; i < getCardCount; i++) {
            group.SetOperate((skill) => {
                skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
                func(skill, i);
            });
        }
        group.SetOperate(this.OperateDiscard, false);
        group.RegisterToEffect(effect);
        return group;
    }
    OperateDiscard(skill) {
        skill.SetOperate(new DtCardOperate_DeckCardBrowseAndDiscard_1.DtCardOperate_DeckCardBrowseAndDiscard());
    }
    CheckALLSelfDefense(effect, getCardCount, func) {
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_SELF, DtEnum_1.DtAreaType.DEFENSE);
        group.SetCards(this.GetDefenseCards);
        for (let i = 0; i < getCardCount; i++) {
            group.SetOperate((skill) => {
                skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
                func(skill, i);
            });
        }
        group.RegisterToEffect(effect);
        return group;
    }
    GetDefenseCards() {
        return this.GetPlayer().areaDefense.GetTheCopyCards();
    }
    SetGetAllBrowseFromDeckThenBottom(effect, browseCount, func) {
        this.deckBrowseCount = browseCount;
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.GetDeckCards);
        group.SetOperate((skill) => {
            skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, browseCount, false));
            func(skill);
        });
        group.SetOperate(this.OperateSortToDeck, false);
        group.RegisterToEffect(effect);
        return group;
    }
}
exports.default = DtGroupBrowseCardsCreator;
//# sourceMappingURL=DtGroupBrowseCardsCreator.js.map