"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AICon_Container_Sort = void 0;
const AICon_base_1 = require("./AICon_base");
class AICon_Container_Sort extends AICon_base_1.AICon_base {
    _DoEvaluate(data) {
        let cards = this.root.GetContainerCards(this.sParam1);
        if (cards == null) {
            this.LogError(data, "容器不存在:" + this.sParam1);
            return false;
        }
        if (cards.length == 0) {
            return true;
        }
        let split = this.sParam2.split("|");
        if (split && split.length > 0) {
            if (this.GetSortTypeIdx(split, 0) != "") {
                cards.sort((a, b) => {
                    for (let i = 0; i < split.length; i++) {
                        if (this.IsSortType(split[i])) {
                            let result = this.SortWithOrder(this.nParam1, this.GetSortValueWithType(split[i], a), this.GetSortValueWithType(split[i], b));
                            if (result != 0) {
                                return result;
                            }
                        }
                    }
                    return a.GetCfgCardId() - b.GetCfgCardId();
                });
            }
            for (let i = split.length - 1; i >= 0; i--) {
                if (this.IsSortType(split[i]) == false) {
                    for (let k = cards.length - 1; k >= 0; k--) {
                        if (cards[k].GetCardCfgNumber() == split[i]) {
                            let card = cards[k];
                            cards.splice(k, 1);
                            cards.unshift(card);
                        }
                    }
                }
            }
        }
        return true;
    }
    GetSortTypeIdx(sp, idx) {
        let curIdx = 0;
        for (let i = 0; i < sp.length; i++) {
            if (this.IsSortType(sp[i])) {
                if (curIdx == idx) {
                    return sp[i];
                }
                curIdx++;
            }
        }
        return "";
    }
    IsSortType(sp) {
        if (sp == "DP" || sp == "LV" || sp == "ORICOUNT" || sp == "COLORCOUNAT") {
            return true;
        }
        return false;
    }
    GetSortValueWithType(type, card) {
        switch (type) {
            case "DP":
                return card.GetCardLastDP();
            case "LV":
                return card.GetCardLv();
            case "ORICOUNT":
                return card.GetCardOriListCount();
            case "COLORCOUNAT":
                return card.GetCardColorCount();
            case "POWER":
                return card.GetCardLastPower();
        }
        return 0;
    }
    SortWithOrder(int, a, b) {
        if (a == b) {
            return 0;
        }
        if (int == 0) {
            return a - b;
        }
        else {
            return b - a;
        }
    }
}
exports.AICon_Container_Sort = AICon_Container_Sort;
//# sourceMappingURL=AICon_Container_Sort.js.map