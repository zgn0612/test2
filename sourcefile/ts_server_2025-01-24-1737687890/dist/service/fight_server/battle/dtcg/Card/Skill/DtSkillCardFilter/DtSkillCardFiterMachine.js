"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillCardFiterMachine = void 0;
const _Dcg_1 = require("../../../../../cmn/_Dcg");
const DtEnum_1 = require("../../../Data/DtEnum");
class DtSkillCardFiterMachine {
    parent;
    type = 0;
    findPlayer;
    findArea;
    OnGetCardsEvent;
    cardFilters;
    OnFilterCardEvent;
    constructor(parent) {
        this.parent = parent;
        this.cardFilters = new Array();
        this.type = 0;
    }
    SetFilter(filter) {
        filter.parentCard = this.parent.GetParentCard();
        filter.effect = this.parent.parentEffect;
        filter.parentSkillPlayerChoose = this.parent;
        this.cardFilters.push(filter);
    }
    GetCardsWitchAreaData(targetPlayer, ...area) {
        this.type = 1;
        this.findPlayer = targetPlayer;
        this.findArea = area;
    }
    GetCardsWitchCustom(func) {
        this.type = 2;
        this.OnGetCardsEvent = func;
    }
    GetCardsFromSelfOrigin() {
        this.type = 3;
    }
    OnFiltercards() {
        if (this.type == 0) {
            return null;
        }
        if (this.type == 1) {
            let list = new Array();
            for (let i = 0; i < this.findArea.length; i++) {
                if (this.findPlayer == DtEnum_1.DtSkillTargetToPlayer.Self) {
                    let player = this.parent.GetParentPlayer();
                    let area = player.GetArea(this.findArea[i]);
                    this.PushList(list, area.GetListWithCondition((card) => {
                        return this.ConditionCard(card);
                    }));
                }
                else if (this.findPlayer == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
                    let player = this.parent.GetParentPlayer().GetOppPlayer();
                    let area = player.GetArea(this.findArea[i]);
                    this.PushList(list, area.GetListWithCondition((card) => {
                        return this.ConditionCard(card);
                    }));
                }
                else if (this.findPlayer == DtEnum_1.DtSkillTargetToPlayer.Both) {
                    let player = this.parent.GetParentPlayer();
                    let area = player.GetArea(this.findArea[i]);
                    this.PushList(list, area.GetListWithCondition((card) => {
                        return this.ConditionCard(card);
                    }));
                    let opp = this.parent.GetParentPlayer().GetOppPlayer();
                    let opparea = opp.GetArea(this.findArea[i]);
                    this.PushList(list, opparea.GetListWithCondition((card) => {
                        return this.ConditionCard(card);
                    }));
                }
            }
            return list;
        }
        else if (this.type == 2) {
            if (this.OnGetCardsEvent) {
                let list = this.OnGetCardsEvent.call(this.parent.GetFunCallObj(), this.parent.parentEffect);
                if (list) {
                    return _Dcg_1.gFun.GetCardListWithCondition(list, (card) => {
                        return this.ConditionCard(card);
                    });
                }
            }
        }
        else if (this.type == 3) {
            let cards = this.parent.GetParentCard().GetOriginDigimonList();
            return _Dcg_1.gFun.GetCardListWithCondition(cards, (card) => {
                return this.ConditionCard(card);
            });
        }
        return null;
    }
    PushList(list, push) {
        for (let i = 0; i < push.length; i++) {
            list.push(push[i]);
        }
    }
    ConditionCard(card) {
        if (this.cardFilters && this.cardFilters.length > 0) {
            for (let i = 0; i < this.cardFilters.length; i++) {
                let isf = this.cardFilters[i].OnFilterCard(card);
                if (isf == false || isf == null) {
                    return false;
                }
            }
        }
        if (this.OnFilterCardEvent) {
            return this.OnFilterCardEvent.call(this.parent.GetFunCallObj(), card);
        }
        return true;
    }
    get EffectToPlayer() {
        return this.findPlayer;
    }
    get EffectArea() {
        if (this.type == 2) {
        }
        if (this.type == 3) {
            return [DtEnum_1.DtAreaType.OTHER_EVO];
        }
        return this.findArea;
    }
    GetFilterCardTypes() {
        if (this.cardFilters && this.cardFilters.length > 0) {
            for (let i = 0; i < this.cardFilters.length; i++) {
                if (this.cardFilters[i].constructor.name == "DtCardFilter_CardType") {
                    return this.cardFilters[i].GetFilterCardType();
                }
            }
        }
        return [DtEnum_1.DtCardType.None];
    }
}
exports.DtSkillCardFiterMachine = DtSkillCardFiterMachine;
//# sourceMappingURL=DtSkillCardFiterMachine.js.map