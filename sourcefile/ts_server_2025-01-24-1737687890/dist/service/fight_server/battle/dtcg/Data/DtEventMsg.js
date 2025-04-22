"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtMsg_ChainEffectOver = exports.DtMsg_CardMove = exports.DtMsg_CardActivateEffect = exports.DtMsg_AreaChange = exports.DtMsg_CardBeDiscardFromEvoOri = exports.DtMsg_ChangeCost = exports.DtMsg_CommonCardInfo = exports.DtMsg_BeforePlay = exports.DtMsg_DigimonChangeBattleState = exports.DtMsg_DigimonEvolution = exports.DtMsg_RoundChange = exports.DtMsg_HitterChoose = exports.DtMsg_BattleInfo = exports.DtMsg_OnBeforeActionEffect = exports.DtMsg_OnActionEffect = exports.DtMsg_OnPlay = exports.DtMsgBase = void 0;
const DtEnum_1 = require("./DtEnum");
class DtMsgBase {
    isEvent = true;
}
exports.DtMsgBase = DtMsgBase;
class DtMsg_OnPlay extends DtMsgBase {
    card;
    from;
    reason;
    constructor(card, type, from) {
        super();
        this.card = card;
        this.reason = type;
        this.from = from;
    }
}
exports.DtMsg_OnPlay = DtMsg_OnPlay;
class DtMsg_OnActionEffect extends DtMsgBase {
    card;
    effectType;
    casterCard;
    extraOtherCard;
    constructor(card, reason) {
        super();
        this.card = card;
        this.effectType = reason;
    }
    ReasonIsBeDestory() {
        if (this.effectType == DtEnum_1.DtActionEffectType.AtkZeroDestroy || this.effectType == DtEnum_1.DtActionEffectType.EffectDestroy || this.effectType == DtEnum_1.DtActionEffectType.AttackDestroy) {
            return true;
        }
        return false;
    }
}
exports.DtMsg_OnActionEffect = DtMsg_OnActionEffect;
class DtMsg_OnBeforeActionEffect extends DtMsgBase {
    rEffects;
    effectType;
    casterCard;
    constructor(card, reason) {
        super();
        this.rEffects = card;
        this.effectType = reason;
    }
    ReasonIsBeDestory() {
        if (this.effectType == DtEnum_1.DtActionEffectType.AtkZeroDestroy || this.effectType == DtEnum_1.DtActionEffectType.EffectDestroy || this.effectType == DtEnum_1.DtActionEffectType.AttackDestroy) {
            return true;
        }
        return false;
    }
    ReceiveHas(card) {
        for (let i = 0; i < this.rEffects.length; i++) {
            if (this.rEffects[i].receiveCard == card) {
                return true;
            }
        }
        return false;
    }
    GetEffWithCard(card) {
        for (let i = 0; i < this.rEffects.length; i++) {
            if (this.rEffects[i].receiveCard == card) {
                return this.rEffects[i];
            }
        }
        return null;
    }
}
exports.DtMsg_OnBeforeActionEffect = DtMsg_OnBeforeActionEffect;
class DtMsg_BattleInfo extends DtMsgBase {
    atkCard;
    defCard;
    atkType;
    constructor(atk, def) {
        super();
        this.atkCard = atk;
        this.defCard = def;
    }
    HasInBattle(card) {
        if (card == this.atkCard || card == this.defCard) {
            return true;
        }
        return false;
    }
    GetEnemy(card) {
        if (card == this.atkCard) {
            return this.defCard;
        }
        if (card == this.defCard) {
            return this.atkCard;
        }
    }
}
exports.DtMsg_BattleInfo = DtMsg_BattleInfo;
class DtMsg_HitterChoose extends DtMsgBase {
    atkCard;
    atkType;
    defenseCard;
    listDef;
    constructor(atk, defCard, type) {
        super();
        this.atkCard = atk;
        this.defenseCard = defCard;
        this.atkType = type;
        this.listDef = new Array();
    }
    SetDefense(card) {
        for (let i = 0; i < this.listDef.length; i++) {
            if (this.listDef[i] == card) {
                return;
            }
        }
        this.listDef.push(card);
    }
    GetDefense() {
        return this.listDef;
    }
}
exports.DtMsg_HitterChoose = DtMsg_HitterChoose;
class DtMsg_RoundChange extends DtMsgBase {
    playerId;
    roundNum;
    constructor(playerId, roundNum) {
        super();
        this.playerId = playerId;
        this.roundNum = roundNum;
    }
}
exports.DtMsg_RoundChange = DtMsg_RoundChange;
class DtMsg_DigimonEvolution extends DtMsgBase {
    evoCard;
    oriCard;
    bottomCard;
    type;
    cost = 0;
    seen;
    constructor(evoCard, originCard, cost, type, buffSeen) {
        super();
        this.evoCard = evoCard;
        this.oriCard = originCard;
        this.cost = cost;
        this.type = type;
        this.seen = buffSeen;
    }
}
exports.DtMsg_DigimonEvolution = DtMsg_DigimonEvolution;
class DtMsg_DigimonChangeBattleState extends DtMsgBase {
    card;
    toState;
    reason;
    constructor(card, toState, r) {
        super();
        this.card = card;
        this.reason = r;
        this.toState = toState;
    }
}
exports.DtMsg_DigimonChangeBattleState = DtMsg_DigimonChangeBattleState;
class DtMsg_BeforePlay extends DtMsgBase {
    card;
    wherePlay;
    cost = 0;
    setCost = -1;
    fsm;
    constructor(card, where) {
        super();
        this.card = card;
        this.wherePlay = where;
        this.setCost = -1;
    }
    Reset() {
        this.cost = 0;
        this.setCost = -1;
    }
}
exports.DtMsg_BeforePlay = DtMsg_BeforePlay;
class DtMsg_CommonCardInfo extends DtMsgBase {
    card;
    constructor(card) {
        super();
        this.card = card;
    }
}
exports.DtMsg_CommonCardInfo = DtMsg_CommonCardInfo;
class DtMsg_ChangeCost extends DtMsgBase {
    caster;
    cost;
    reason;
    constructor(caster, cost, reason) {
        super();
        this.caster = caster;
        this.cost = cost;
        this.reason = reason;
    }
}
exports.DtMsg_ChangeCost = DtMsg_ChangeCost;
class DtMsg_CardBeDiscardFromEvoOri extends DtMsgBase {
    receiveCard;
    reason;
    fromCard;
    caster;
    constructor(discard, fromCard, reason, caster) {
        super();
        this.receiveCard = discard;
        this.reason = reason;
        this.caster = caster;
        this.fromCard = fromCard;
    }
}
exports.DtMsg_CardBeDiscardFromEvoOri = DtMsg_CardBeDiscardFromEvoOri;
class DtMsg_AreaChange extends DtMsgBase {
    area;
    isPush;
    card;
    reason;
    constructor(card, type, isPush, reason) {
        super();
        this.card = card;
        this.area = type;
        this.isPush = isPush;
        this.reason = reason;
    }
    IsSelfDefenseReduce(player) {
        if (this.card == null) {
            return false;
        }
        if (this.card.GetPlayer() == player && this.area == DtEnum_1.DtAreaType.DEFENSE) {
            if (this.isPush == false) {
                return true;
            }
        }
        return false;
    }
}
exports.DtMsg_AreaChange = DtMsg_AreaChange;
class DtMsg_CardActivateEffect extends DtMsgBase {
    card;
    effectname;
    constructor(card, effectname) {
        super();
        this.card = card;
        this.effectname = effectname;
    }
}
exports.DtMsg_CardActivateEffect = DtMsg_CardActivateEffect;
class DtMsg_CardMove extends DtMsgBase {
    caster;
    card;
    from;
    to;
    reason;
    constructor(caster, card, from, to, reason) {
        super();
        this.caster = caster;
        this.card = card;
        this.from = from;
        this.to = to;
        this.reason = reason;
    }
}
exports.DtMsg_CardMove = DtMsg_CardMove;
class DtMsg_ChainEffectOver extends DtMsgBase {
    chainId;
    constructor(chainId) {
        super();
        this.chainId = chainId;
    }
}
exports.DtMsg_ChainEffectOver = DtMsg_ChainEffectOver;
//# sourceMappingURL=DtEventMsg.js.map