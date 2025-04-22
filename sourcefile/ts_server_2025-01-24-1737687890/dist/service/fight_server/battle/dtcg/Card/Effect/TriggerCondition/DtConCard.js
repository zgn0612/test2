"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtConCard = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtCardDigimonType_1 = require("../../../Data/DtCardDigimonType");
class DtConCard {
    type;
    color;
    ownTo;
    area;
    areaForward;
    name;
    isNameforce = false;
    feature;
    lastEffectedType;
    lvFilter;
    lv;
    colorFilter;
    colorCount;
    costFilter;
    cost;
    EffectName;
    func;
    funcObj;
    seen;
    constructor(type, c, o) {
        this.type = type;
        this.color = c;
        this.ownTo = o;
        this.area = DtEnum_1.DtAreaType.None;
        this.name = DtCardDigimonType_1.DtCardDigimonType.None;
        this.isNameforce = false;
        this.lvFilter = DtEnum_1.DtFilterCompare.None;
        this.colorFilter = DtEnum_1.DtFilterCompare.None;
        this.lastEffectedType = DtEnum_1.DtActionEffectType.None;
        this.costFilter = DtEnum_1.DtFilterCompare.None;
        this.feature = null;
        this.areaForward = true;
        this.EffectName = 0;
    }
    SetNameCon(name, force) {
        this.name = name;
        this.isNameforce = force;
    }
    SetArea(area, isforward = true) {
        this.area = area;
        this.areaForward = isforward;
    }
    SetLv(filter, lv) {
        this.lvFilter = filter;
        this.lv = lv;
    }
    SetColorCount(filter, count) {
        this.colorFilter = filter;
        this.colorCount = count;
    }
    SetCondition(obj, func) {
        this.funcObj = obj;
        this.func = func;
    }
    SetFeatureIs(...feature) {
        this.feature = feature;
    }
    SetEffectHas(effectName) {
        this.EffectName = effectName;
    }
    SetLastEffectedType(type) {
        this.lastEffectedType = type;
    }
    SetCostCon(filter, cost) {
        this.costFilter = filter;
        this.cost = cost;
    }
    CheckCondition(player, card) {
        if (card == null || player == null) {
            return false;
        }
        if (this.type != DtEnum_1.DtCardType.None) {
            let seenpass = false;
            let typepass = false;
            if (this.seen) {
                if (this.seen.cardtype == this.type) {
                    seenpass = true;
                }
            }
            if (card.CardTypeIs(this.type)) {
                typepass = true;
            }
            if (typepass == false && seenpass == false) {
                return false;
            }
        }
        if (this.feature) {
            let fcon = false;
            for (let i = 0; i < this.feature.length; i++) {
                if (card.FeatureIs(this.feature[i])) {
                    fcon = true;
                }
            }
            if (fcon == false) {
                return false;
            }
        }
        if (this.lastEffectedType != DtEnum_1.DtActionEffectType.None) {
            if (this.lastEffectedType != card.lastEffectedType) {
                return false;
            }
        }
        if (this.color != DtEnum_1.DtCardColor.None) {
            let seenpass = false;
            let colorpass = false;
            if (this.seen) {
                if (this.seen.color == this.color) {
                    seenpass = true;
                }
            }
            if (card.ColorIs(this.color)) {
                colorpass = true;
            }
            if (colorpass == false && seenpass == false) {
                return false;
            }
        }
        if (this.colorFilter != DtEnum_1.DtFilterCompare.None) {
            if (this.ChechColorFilter(card) == false) {
                return false;
            }
        }
        if (this.costFilter != DtEnum_1.DtFilterCompare.None) {
            if (this.CheckCostFilterCard(card) == false) {
                return false;
            }
        }
        if (this.area != DtEnum_1.DtAreaType.None) {
            if (this.areaForward) {
                if (card.whereAreaType != this.area) {
                    return false;
                }
            }
            else {
                if (card.whereAreaType == this.area) {
                    return false;
                }
            }
        }
        if (this.name != DtCardDigimonType_1.DtCardDigimonType.None) {
            if (card.NameIs(this.name, this.isNameforce) == false) {
                return false;
            }
        }
        if (this.EffectName != 0) {
            let hasEffect = card.HasEffect(this.EffectName);
            if (hasEffect == false) {
                return false;
            }
        }
        if (this.lvFilter != DtEnum_1.DtFilterCompare.None) {
            let seenpass = false;
            let lvpass = false;
            if (this.seen != null) {
                if (this.SeenLvIs(this.lvFilter, this.seen.lv, this.lv)) {
                    seenpass = true;
                }
            }
            if (card.CardLvIs(this.lvFilter, this.lv)) {
                lvpass = true;
            }
            if (seenpass == false && lvpass == false) {
                return false;
            }
        }
        if (this.ownTo != DtEnum_1.DtSkillTargetToPlayer.Both) {
            if (this.ownTo == DtEnum_1.DtSkillTargetToPlayer.Self) {
                if (card.GetPlayer() != player) {
                    return false;
                }
            }
            else if (this.ownTo == DtEnum_1.DtSkillTargetToPlayer.Opponent) {
                if (card.GetPlayer() == player) {
                    return false;
                }
            }
        }
        if (this.func) {
            return this.func.call(this.funcObj, card);
        }
        return true;
    }
    ChechColorFilter(card) {
        let result = false;
        let colorCount = card.ColorCount();
        switch (this.colorFilter) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (colorCount == this.colorCount) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (colorCount > this.colorCount) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (colorCount >= this.colorCount) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (colorCount < this.colorCount) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (colorCount <= this.colorCount) {
                    result = true;
                }
                break;
        }
        return result;
    }
    CheckCostFilterCard(card) {
        let result = false;
        switch (this.costFilter) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (card.GetConfigCost() == this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (card.GetConfigCost() > this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (card.GetConfigCost() >= this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (card.GetConfigCost() < this.cost) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (card.GetConfigCost() <= this.cost) {
                    result = true;
                }
                break;
        }
        return result;
    }
    SeenLvIs(compare, seenLv, lv) {
        let result = false;
        switch (compare) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (seenLv == lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (seenLv > lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (seenLv >= lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (seenLv < lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (seenLv <= lv) {
                    result = true;
                }
                break;
        }
        return result;
    }
}
exports.DtConCard = DtConCard;
//# sourceMappingURL=DtConCard.js.map