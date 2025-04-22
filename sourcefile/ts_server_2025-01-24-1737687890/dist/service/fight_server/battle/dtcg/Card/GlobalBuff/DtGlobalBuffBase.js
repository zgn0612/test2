"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuffBase = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtDurationTimeComponent_1 = require("../DtDurationTimeComponent");
class DtGlobalBuffBase {
    creator;
    caster;
    parent;
    effectPlayer;
    effectCard;
    effectType;
    type = DtEnum_1.DtBuffType.None;
    roundValid;
    buffDurationType;
    buffDurationParam;
    durationComponent;
    constructor(caster, creator) {
        this.caster = caster;
        this.creator = creator;
        this.effectPlayer = caster.GetPlayer();
        this.buffDurationType = DtEnum_1.DtBuffDurationType.None;
        this.roundValid = DtEnum_1.DtEffectRoundValid.Both;
    }
    CanEffect(card, type) {
        if (this.roundValid == DtEnum_1.DtEffectRoundValid.Self) {
            if (this.effectPlayer.IsThisPlayerRound() == false) {
                return false;
            }
        }
        else if (this.roundValid == DtEnum_1.DtEffectRoundValid.Opponent) {
            if (this.effectPlayer.IsThisPlayerRound()) {
                return false;
            }
        }
        if (this.type != type) {
            return false;
        }
        if (this.effectCard != null) {
            if (this.effectCard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                return false;
            }
        }
        switch (this.effectType) {
            case DtEnum_1.DtBuffEffectToType.Self:
                if (card.parent == this.effectPlayer) {
                    return true;
                }
                break;
            case DtEnum_1.DtBuffEffectToType.Opponent:
                if (card.parent != this.effectPlayer) {
                    return true;
                }
                break;
            case DtEnum_1.DtBuffEffectToType.Both:
                return true;
                break;
        }
        return false;
    }
    CheckCardInt(card, type) {
        return 0;
    }
    IsAffected(card) {
        if (card._NotCheckEffectedBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT)) {
            if (card.GetPlayer() != this.effectPlayer) {
                return false;
            }
        }
        if (card._NotCheckEffectedBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON)) {
            if (card.GetPlayer() != this.effectPlayer && this.caster.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return false;
            }
        }
        return true;
    }
    Condition(card, type) {
        return this.CanEffect(card, type);
    }
    SetBuffDurationType(type, param) {
        this.buffDurationType = type;
        this.buffDurationParam = param;
        return this;
    }
    SetBuffListen(manager) {
        if (this.buffDurationType != DtEnum_1.DtBuffDurationType.None) {
            if (this.durationComponent != null) {
                _Dcg_1.gLog.err("this buff has a duration component !!!! pleaseCheck");
            }
            else {
                this.durationComponent = new DtDurationTimeComponent_1.DtDurationTimeComponent(manager, this.effectPlayer.playerId, this.RemoveBuff, this);
            }
            this.durationComponent.SetBuffDuration(this.buffDurationType, this.buffDurationParam);
        }
    }
    RemoveBuff() {
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
        this.parent.RemoveCardBuff(this);
    }
    Clear() {
        this.parent.Get2ClientMessageMgr().ClientShow(this.caster.GetPlayer(), DtMessageData_1.ClientShowType.RemoveGlobalBuff, [this.caster.uid], this.creator.effCfgId.toString());
        if (this.durationComponent) {
            this.durationComponent.Clear();
            this.durationComponent = null;
        }
    }
}
exports.DtGlobalBuffBase = DtGlobalBuffBase;
//# sourceMappingURL=DtGlobalBuffBase.js.map