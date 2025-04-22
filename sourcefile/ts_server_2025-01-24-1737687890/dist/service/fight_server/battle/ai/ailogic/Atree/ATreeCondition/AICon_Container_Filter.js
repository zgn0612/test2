"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Container_Filter = void 0;
const ADefine_1 = require("../ADefine");
const AICon_base_1 = require("./AICon_base");
class AICon_Container_Filter extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = this.root.GetContainerCards(this.sParam1);
        if (cards == null) {
            this.LogError(data, "容器不存在:" + this.sParam1);
            return false;
        }
        if (cards.length == 0) {
            return true;
        }
        switch (this.containerType) {
            case ADefine_1.AiFilterContainerType.COST:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (this.ISInCompare(this.eCompare1, cards[i].GetCardPlayCost(), this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.DP:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (this.ISInCompare(this.eCompare1, cards[i].GetCardLastDP(), this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.FEATURE_IS:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].FeatureIs(this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.LV:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (this.ISInCompare(this.eCompare1, cards[i].GetCardLv(), this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.NAME_FORCE_IS:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].NameIs(this.nParam1, true) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.NAME_IS:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].NameIs(this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.ORGIN_COUNT:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (this.ISInCompare(this.eCompare1, cards[i].GetCardOriListCount(), this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.BATTLE_STATE:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].GetBattleState() != Number(this.eBattleSatate)) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.CURRENT_CARD_DP_CHECK:
                if (this.root.aiCardRoot) {
                    let curdp = this.root.aiCardRoot.GetCardLastDP();
                    for (let i = cards.length - 1; i >= 0; i--) {
                        let cardDP = cards[i].GetCardLastDP();
                        if (this.ISInCompare(this.eCompare1, cardDP, curdp) == false) {
                            cards.splice(i, 1);
                        }
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.CARD_TYPE:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].CardTypeIs(Number(this.eCardType)) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.HAS_EFFECT:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].HasEffect(this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.NOT_HAS_EFFECT:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].HasEffect(this.nParam1)) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.HAS_BUFF:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].HasBuff(this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.NOT_HAS_BUFF:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (cards[i].HasBuff(this.nParam1)) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.CARD_NUMBER:
                let split = this.sParam2.split("|");
                if (split.length > 0) {
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (this.HasInList(split, cards[i].GetCardCfgNumber()) == false) {
                            cards.splice(i, 1);
                        }
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.POWER:
                for (let i = cards.length - 1; i >= 0; i--) {
                    if (this.ISInCompare(this.eCompare1, cards[i].GetCardLastPower(), this.nParam1) == false) {
                        cards.splice(i, 1);
                    }
                }
                break;
            case ADefine_1.AiFilterContainerType.MIN_DP:
                {
                    let mindp = 100000;
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (cards[i].GetCardLastDP() < mindp) {
                            mindp = cards[i].GetCardLastDP();
                        }
                    }
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (this.ISInCompare(ADefine_1.AiFilterCompare.EQUAL, cards[i].GetCardLastDP(), mindp) == false) {
                            cards.splice(i, 1);
                        }
                    }
                    break;
                }
            case ADefine_1.AiFilterContainerType.MIN_LV:
                {
                    let minlv = 100000;
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (cards[i].GetCardLv() < minlv) {
                            minlv = cards[i].GetCardLv();
                        }
                    }
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (this.ISInCompare(ADefine_1.AiFilterCompare.EQUAL, cards[i].GetCardLv(), minlv) == false) {
                            cards.splice(i, 1);
                        }
                    }
                    break;
                }
            case ADefine_1.AiFilterContainerType.MAX_DP:
                {
                    let maxdp = 0;
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (cards[i].GetCardLastDP() > maxdp) {
                            maxdp = cards[i].GetCardLastDP();
                        }
                    }
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (this.ISInCompare(ADefine_1.AiFilterCompare.EQUAL, cards[i].GetCardLastDP(), maxdp) == false) {
                            cards.splice(i, 1);
                        }
                    }
                    break;
                }
            case ADefine_1.AiFilterContainerType.MAX_LV:
                {
                    let maxlv = 0;
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (cards[i].GetCardLv() > maxlv) {
                            maxlv = cards[i].GetCardLv();
                        }
                    }
                    for (let i = cards.length - 1; i >= 0; i--) {
                        if (this.ISInCompare(ADefine_1.AiFilterCompare.EQUAL, cards[i].GetCardLv(), maxlv) == false) {
                            cards.splice(i, 1);
                        }
                    }
                    break;
                }
        }
        return true;
    }
    HasInList(split, cfgNumber) {
        for (let i = 0; i < split.length; i++) {
            if (split[i] == cfgNumber) {
                return true;
            }
        }
        return false;
    }
}
exports.AICon_Container_Filter = AICon_Container_Filter;
//# sourceMappingURL=AICon_Container_Filter.js.map