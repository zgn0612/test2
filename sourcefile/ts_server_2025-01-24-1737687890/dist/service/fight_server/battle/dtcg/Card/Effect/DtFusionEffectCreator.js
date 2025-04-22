"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class DtFusionEffectCreator extends DtEffectCreator_1.DtEffectCreator {
    fusionCost = 0;
    list;
    fusionCardTop;
    fusionCardBottom;
    SetFusionCost(cost) {
        this.fusionCost = cost;
    }
    CheckTopCardCondition(card) {
        return false;
    }
    CheckBottomCardCondition(card) {
        return false;
    }
    SetFusionEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.FUSION;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.PlayerFusion);
        effect.SetCondition(this.FusionCondition);
        effect.SetEffect(this.FusionEffect1, this.FusionChoose1).SetSkillDesc(1, this.GetDesc1);
        effect.SetEffect(this.FusionEffect2, this.FusionChoose2).SetSkillDesc(2, this.GetDesc1);
    }
    GetDesc1() {
        let skilldesc = new DtMessageData_1.DtSkillDesc();
        skilldesc.compare = DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT;
        skilldesc.effectToPlayer = DtEnum_1.DtSkillTargetToPlayer.Self;
        skilldesc.area = [DtEnum_1.DtAreaType.BATTLE_AREA];
        skilldesc.count = 1;
        skilldesc.cardTypes = [DtEnum_1.DtCardType.Monster];
        skilldesc.skill = new DtMessageData_1.DtSkillReasonDesc();
        skilldesc.skill.reason = DtEnum_1.DtSkillReason.Fusion;
        return skilldesc;
    }
    FusionCondition() {
        this.fusionCardTop = null;
        this.fusionCardBottom = null;
        if (this.parent.whereAreaType != DtEnum_1.DtAreaType.HAND) {
            return false;
        }
        let cards = this.parent.parent.areaInBattle.GetTheCopyCards();
        let arrMonsterTop = this.GetListWithCondition(cards, (card) => {
            return this.CheckTopCardCondition(card);
        });
        if (arrMonsterTop.length == 0) {
            return false;
        }
        let arrMonsterBottom = this.GetListWithCondition(cards, (card) => {
            return this.CheckBottomCardCondition(card);
        });
        if (arrMonsterBottom.length == 0) {
            return false;
        }
        if (arrMonsterTop.length == 1 && arrMonsterBottom.length == 1) {
            if (arrMonsterTop[0] == arrMonsterBottom[0]) {
                return false;
            }
        }
        return true;
    }
    FusionEffect1(effect) {
        let cards = this.parent.parent.areaInBattle.GetTheCopyCards();
        this.list = this.GetListWithCondition(cards, (card) => {
            return this.CheckTopCardCondition(card);
        });
        let arrMonsterBottom = this.GetListWithCondition(cards, (card) => {
            return this.CheckBottomCardCondition(card);
        });
        if (arrMonsterBottom.length == 1) {
            for (let i = this.list.length - 1; i >= 0; i--) {
                if (this.list[i] == arrMonsterBottom[0]) {
                    this.list.splice(i, 1);
                    break;
                }
            }
        }
        if (this.list.length > 0) {
            this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 1);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        else {
            effect.ForceOver();
            return DtEffect_1.DtEffectResult.Next;
        }
    }
    FusionChoose1(uid, effect) {
        this.fusionCardTop = this.GetCardInList(this.list, uid);
        if (this.fusionCardTop == null) {
            effect.ForceOver();
        }
    }
    FusionEffect2(effect) {
        let cards = this.GetPlayer().areaInBattle.GetTheCopyCards();
        this.list = this.GetListWithCondition(cards, (card) => {
            if (card == this.fusionCardTop) {
                return false;
            }
            return this.CheckBottomCardCondition(card);
        });
        if (this.list.length > 0) {
            this.Get2ClientMessageMgr().PlayerChoose(this.parent, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, effect, 2);
            return DtEffect_1.DtEffectResult.WaitForChoose;
        }
        else {
            if (effect) {
                effect.ForceOver();
            }
            return DtEffect_1.DtEffectResult.Next;
        }
    }
    FusionChoose2(uid, effect) {
        this.fusionCardBottom = this.GetCardInList(this.list, uid);
        if (this.fusionCardBottom == null) {
            if (effect) {
                effect.ForceOver();
            }
            return;
        }
        this.GetManager().FusionEvolution(this.parent.parent, this.parent, this.fusionCardTop, this.fusionCardBottom, this.fusionCost);
    }
    GetFusionCost() {
        return this.fusionCost;
    }
    CheckMaterialContaion(material) {
        let cards = this.GetOtherMaterialCards(material);
        if (cards != null) {
            return cards.length > 0;
        }
        return false;
    }
    GetOtherMaterialCards(material) {
        let cards = this.GetPlayer().areaInBattle.GetTheCopyCards();
        let isType_top = this.CheckTopCardCondition(material);
        let isType_bottom = this.CheckBottomCardCondition(material);
        if (isType_top && isType_bottom) {
            return this.GetListWithCondition(cards, (card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                    if (card == material) {
                        return false;
                    }
                    if (this.CheckTopCardCondition(card)) {
                        return true;
                    }
                    if (this.CheckBottomCardCondition(card)) {
                        return true;
                    }
                    return false;
                }
            });
        }
        else {
            if (isType_top) {
                return this.GetListWithCondition(cards, (card) => {
                    return this.CheckBottomCardCondition(card);
                });
            }
            else if (isType_bottom) {
                return this.GetListWithCondition(cards, (card) => {
                    return this.CheckTopCardCondition(card);
                });
            }
        }
        return null;
    }
}
exports.default = DtFusionEffectCreator;
//# sourceMappingURL=DtFusionEffectCreator.js.map