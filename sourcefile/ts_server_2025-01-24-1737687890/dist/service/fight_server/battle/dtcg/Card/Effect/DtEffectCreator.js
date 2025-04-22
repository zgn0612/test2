"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtEffectCreator = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmAttackEnum_1 = require("../../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtBuffConditionAny_1 = require("../Buff/DtBuffConditionAny");
const DtBuffConditionAttribute_1 = require("../Buff/DtBuffConditionAttribute");
const DtBuffConditionInt_1 = require("../Buff/DtBuffConditionInt");
const DtBuffSpecialEvoCondition_1 = require("../Buff/DtBuffSpecialEvoCondition");
const DtGlobalBuff_ConditionAttribute_1 = require("../GlobalBuff/DtGlobalBuff_ConditionAttribute");
const DtGlobalBuff_ConditionInt_1 = require("../GlobalBuff/DtGlobalBuff_ConditionInt");
const DtGlobalBuff_EmptyBuff_1 = require("../GlobalBuff/DtGlobalBuff_EmptyBuff");
const DtGlobalPlayerBuff_1 = require("../GlobalBuff/DtGlobalPlayerBuff");
const DtGlobalPlayerBuffInt_1 = require("../GlobalBuff/DtGlobalPlayerBuffInt");
const DtDirectSkill_1 = require("../Skill/DtDirectSkill");
const DtEffect_1 = require("./DtEffect");
const DtEffectType_1 = require("./DtEffectType");
const DtOriginCreatorData_1 = require("./DtOriginCreatorData");
const DtTimeEffect_1 = require("./DtTimeEffect");
const DtConDelayEffectUse_1 = require("./TriggerCondition/DtConDelayEffectUse");
const DtConTriggerBattleOver_1 = require("./TriggerCondition/DtConTriggerBattleOver");
const DtConTriggerRoundStart_1 = require("./TriggerCondition/DtConTriggerRoundStart");
class DtEffectCreator {
    isOrigin = false;
    originCard;
    parent;
    offerEffectCard;
    offerEffectCreator;
    offerCardNeedInBattle = true;
    EffectCreatorConstructorName = "";
    effCfgId = 0;
    effindex = 0;
    originCreatorData;
    constructor() {
        this.EffectCreatorConstructorName = this.constructor.name;
        this.effindex = 0;
        this.offerEffectCard = null;
        this.offerEffectCreator = null;
    }
    Init(card) {
        this.parent = card;
        this.SetEffect();
    }
    ClientShow() {
    }
    SetEffect() {
    }
    GetNewEffect() {
        let effect = new DtEffect_1.DtEffect(this.parent, this);
        this.effindex++;
        effect.effectIndex = this.effindex;
        effect.isOrigion = this.isOrigin;
        this.parent.RegisterEffect(effect);
        return effect;
    }
    SetOriginNewEffect(call) {
        if (this.originCard) {
            let pervuid = this.originCard.evoOriginPrevCardUId;
            this.originCard.ResetState();
            this.originCard.evoOriginPrevCardUId = pervuid;
            this.parent = this.originCard;
            let effect = new DtEffect_1.DtEffect(this.originCard, this);
            this.effindex++;
            effect.effectIndex = this.effindex;
            effect.isOrigion = this.isOrigin;
            this.originCard.RegisterEffect(effect);
            if (call) {
                call(effect);
            }
            this.originCard.RegisterEffectListener(effect);
            return effect;
        }
        return null;
    }
    CreateTimeEffectToCard(card, type, param, needInherit = true) {
        let effect = new DtTimeEffect_1.DtTimeEffect(card, this);
        this.effindex++;
        effect.effectIndex = this.effindex;
        effect.isOrigion = true;
        effect.inherit = needInherit;
        card.RegisterEffect(effect);
        effect.TimeSetDurationType(type, param);
        return effect;
    }
    GetAddEffect() {
        let effect = new DtEffect_1.DtEffect(this.parent, this);
        this.effindex++;
        effect.effectIndex = this.effindex;
        effect.isOrigion = true;
        this.parent.RegisterEffect(effect);
        return effect;
    }
    GetListWithCondition(list, func) {
        let ret = new Array();
        for (let i = 0; i < list.length; i++) {
            if (func(list[i])) {
                ret.push(list[i]);
            }
        }
        return ret;
    }
    CheckListWithCondition(list, func) {
        for (let i = 0; i < list.length; i++) {
            if (func(list[i])) {
                return true;
            }
        }
        return false;
    }
    GetCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                return list[i];
            }
        }
        return null;
    }
    PopCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                let card = list[i];
                list.splice(i, 1);
                return card;
            }
        }
        return null;
    }
    GetBuff_ChangeDP(func) {
        return new DtBuffConditionInt_1.DtBuffCommonInt(DtEnum_1.DtBuffType.CHANGE_DP, func, this);
    }
    GetBuff_ChangePower(func) {
        return new DtBuffConditionInt_1.DtBuffCommonInt(DtEnum_1.DtBuffType.CHANGE_POWER, func, this);
    }
    GetBuff_SetColor(func) {
        return new DtBuffConditionAny_1.DtBuffCommonAny(DtEnum_1.DtBuffType.SET_COLOR, func, this);
    }
    GetBuff_Attribute(type, func) {
        return new DtBuffConditionAttribute_1.DtBuffConditionAttribute(type, func, this);
    }
    GetBuff_SpecialEvoCon(func, type, willBlock) {
        return new DtBuffSpecialEvoCondition_1.DtBuffSpecialEvoCondition(func, this, type, willBlock);
    }
    GetGlobalBuff_ChangePower(func, effectToType, toArea, roundValid) {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_POWER, func, this);
        buff.effectType = effectToType;
        buff.effectArea = toArea;
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
    GetGlobalBuff_ChangeDP(func, effectToType, toArea, roundValid) {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_DP, func, this);
        buff.effectType = effectToType;
        buff.effectArea = toArea;
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
    GetGlobalBuff_Attribute(bufftype, func, effectToType, toArea, roundValid) {
        let buff = new DtGlobalBuff_ConditionAttribute_1.DtGlobalBuff_ConditionAttribute(this.parent, bufftype, func, this);
        buff.effectType = effectToType;
        buff.effectArea = toArea;
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
    GetGlobalPlayerBuff(bufftype, func, effectToType, roundValid) {
        let buff = new DtGlobalPlayerBuff_1.DtGlobalPlayerBuff(this.parent, effectToType, bufftype, func, this);
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
    GetGlobalPlayerBuffInt(bufftype, func, effectToType, roundValid) {
        let buff = new DtGlobalPlayerBuffInt_1.DtGlobalPlayerBuffInt(this.parent, effectToType, bufftype, func, this);
        buff.effectCard = this.parent;
        buff.roundValid = roundValid;
        return buff;
    }
    CreateGlobalEffect(creator) {
        return this.CreateEffectTo(creator, this.GetPlayer().roundData.globalCard, false);
    }
    CreateEffectTo(creator, card, offerCardNeedInBattle) {
        if (creator) {
            creator.offerEffectCard = this.parent;
            creator.offerEffectCreator = this;
            creator.offerCardNeedInBattle = offerCardNeedInBattle;
            creator.effCfgId = this.effCfgId;
            creator.Init(card);
            card.CheckEffectListener();
        }
        return creator;
    }
    GetDPDestory(dp) {
        let addDp = this.GetManager().globalBuffMgr.CheckPlayerBuffInt(this.GetPlayer(), DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP, this.parent);
        let sAddDP = this.parent.GetDestoryDPLim();
        return dp + addDp + sAddDP;
    }
    GetLvToEff(lv) {
        return lv;
    }
    GetManager() {
        return this.parent.parent.manager;
    }
    GetPlayer() {
        return this.parent.parent;
    }
    GetOppPlayer() {
        return this.parent.parent.GetOppPlayer();
    }
    UseCard(card, useCost, OnEffect = true, reason = DtMessageData_1.DtProtoEnum_MoveReason.EffectToBattle) {
        this.GetManager().OnUseCard(this.parent, card.parent, card, useCost, OnEffect, reason);
    }
    PlayerSelectOptions(player, count, effect) {
        this.Get2ClientMessageMgr().PlayerSelectOptions(player, count, effect);
    }
    Get2ClientMessageMgr() {
        return this.parent.parent.manager.Get2ClientMessageMgr();
    }
    SetOriginCreatorData(effect) {
        this.originCreatorData = new DtOriginCreatorData_1.DtOriginCreatorData();
        this.originCreatorData.onEffectRound = effect.onEffectRound;
        this.originCreatorData.onUseCount = effect.onUseCount;
    }
    Clear() {
        if (this.parent) {
            this.parent.DeleteEffectWithCreator(this);
        }
    }
    SetNormalBlockerEffect() {
        let blockerEffect = this.GetNewEffect();
        this.SetBlockEffect(blockerEffect);
    }
    SetBlockEffect(effect) {
        effect.name = DtEnum_1.EFFECT_NAME.BLOCKER;
        effect.SetCondition(this.BlockerCondition);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBlockerSelect);
        effect.SetEffect(this.BlockerEffect, null);
        effect.SetEffectDirect();
    }
    BlockerCondition(effect) {
        if (effect == null) {
            return false;
        }
        let msg = effect.eventMsg;
        if (msg == null) {
            return false;
        }
        if (this.parent.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_DEF_BLOCK)) {
            return false;
        }
        if (msg.atkCard.GetPlayer() != this.GetPlayer()) {
            if (this.parent.cardBattleState != DtEnum_1.DtCardBattleState.Reset) {
                if (this.parent.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                    return true;
                }
            }
        }
        return false;
    }
    BlockerEffect(effect) {
        if (effect) {
            effect.eventMsg.SetDefense(this.parent);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateRestartEffect() {
        let effect = this.GetNewEffect();
        this.SetRestartEffect(effect);
    }
    SetRestartEffect(effect) {
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerPhaseActive);
        effect.name = DtEnum_1.EFFECT_NAME.RESTART;
        effect.SetCondition(this.RestartCondition);
        effect.SetEffect(this.RestartEffect, null);
        effect.SetEffectDirect();
    }
    RestartCondition(effect) {
        if (this.parent.cardBattleState == DtEnum_1.DtCardBattleState.Activate) {
            return false;
        }
        let msg = effect.eventMsg;
        if (this.GetPlayer().PlayerIdEquals(msg.playerId)) {
            return false;
        }
        return true;
    }
    RestartEffect() {
        this.GetManager().OnSetCardActiveState(this.parent, this.parent, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateMichizureEffect() {
        let effect = this.GetNewEffect();
        this.SetMichizureEffect(effect);
    }
    SetMichizureEffect(effect) {
        effect.name = DtEnum_1.EFFECT_NAME.MICHIZURE;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        effect.SetTriggerArea(DtEnum_1.DtAreaType.GY);
        effect.SetCondition(this.MichizureCondition);
        effect.SetEffect(this.MichizureEffect, null);
    }
    MichizureCondition(effect) {
        let msg = effect.eventMsg;
        if (msg.atkType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            return false;
        }
        if (msg.HasInBattle(this.parent) == false) {
            return false;
        }
        if (this.parent.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            return false;
        }
        if (this.parent.lastEffectedType == DtEnum_1.DtActionEffectType.AttackDestroy) {
            let enemy = msg.GetEnemy(this.parent);
            if (enemy.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                return true;
            }
        }
        return false;
    }
    MichizureEffect(effect) {
        let msg = effect.eventMsg;
        if (msg.atkCard == this.parent) {
            this.GetManager().OnCardDestroy(this.parent, msg.defCard);
        }
        else if (msg.defCard == this.parent) {
            this.GetManager().OnCardDestroy(this.parent, msg.atkCard);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateRoleCommonPlayDefenseEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.ROLE_DEFENSE_TO_BATTLE;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.RolePlayEffect, null);
    }
    RolePlayEffect() {
        this.UseCard(this.parent, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateMagicCommonDefenseDelayEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.DELAY_MAGIC_DEFENSE_TO_BATTLE;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.MagicDefenseTobattle, null);
    }
    MagicDefenseTobattle() {
        this.GetManager().OnMagicMoveToBattle(this.parent, this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateRoleCommonLock3Effect() {
        let e1 = this.GetNewEffect();
        e1.name = DtEnum_1.EFFECT_NAME.ROLE_LOCK_3;
        e1.SetTriggerType(DtEffectType_1.DtEffectType.TriggerRoundStart);
        e1.SetTriggerCondition(new DtConTriggerRoundStart_1.DtConTriggerRoundStart(DtEnum_1.DtEffectRoundValid.Self));
        e1.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        e1.SetCondition(this.RoleLock3Condition);
        e1.SetEffect(this.RoleLock3Effect, null);
    }
    RoleLock3Condition(effect) {
        if (this.GetManager().CurCost < 3) {
            return true;
        }
        return false;
    }
    RoleLock3Effect() {
        this.GetManager().SetCost(3);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateDefenseOverPlayToAreaEffect() {
        let effPlay = this.GetNewEffect();
        effPlay.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleOver);
        effPlay.SetTriggerArea(DtEnum_1.DtAreaType.WAIT);
        effPlay.SetCondition(this.DefenseOverPlayCondition);
        effPlay.SetEffect(this.DefenseOverPlayEffect, null);
    }
    DefenseOverPlayCondition(effect) {
        let msg = effect.eventMsg;
        if (msg.atkType == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            if (msg.defCard == this.parent) {
                if (this.parent.whereAreaType == DtEnum_1.DtAreaType.WAIT) {
                    return true;
                }
            }
        }
        return false;
    }
    DefenseOverPlayEffect() {
        this.UseCard(this.parent, false, true);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateMagicDelayEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.DELAY_EFFECT;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDelayUseEffect);
        effect.SetTriggerCondition(new DtConDelayEffectUse_1.DtConDelayEffectUse());
        effect.SetEffect(this.MagicDelayUseEffect1, null);
        return effect;
    }
    MagicDelayUseEffect1() {
        this.GetManager().OnCardDelayUse(this.parent, this.parent, DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.DelayUse);
        return DtEffect_1.DtEffectResult.Next;
    }
    GetBattleDestroyDigimonAndSelfAlive(round) {
        let tricon = new DtConTriggerBattleOver_1.DtConTriggerBattleOver(round, DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack, true);
        let atkCon = tricon.SetAtkCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        atkCon.SetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        atkCon.SetCondition(this, (card) => {
            return card == this.parent;
        });
        let defcon = tricon.SetDefCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        defcon.SetArea(DtEnum_1.DtAreaType.BATTLE_AREA, false);
        defcon.SetLastEffectedType(DtEnum_1.DtActionEffectType.AttackDestroy);
        return tricon;
    }
    CreateMagicDefenseActiveMainEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.EffetMagicDefenseActiveMainEffect, null);
        return effect;
    }
    EffetMagicDefenseActiveMainEffect(effect) {
        let mainEffect = this.parent.GetFirstEffectWithTrigtgerType(DtEffectType_1.DtEffectType.OnUseEffect);
        if (mainEffect) {
            effect.UseOtherEffect(mainEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateDefenseReturnToHandEffect() {
        let effect = this.GetNewEffect();
        effect.name = DtEnum_1.EFFECT_NAME.DEFENSE_TO_HAND;
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnDefenseEffect);
        effect.SetEffect(this.defenseReturnHand, null);
    }
    defenseReturnHand() {
        this.GetManager().OnCardMoveTo(this.parent, this.parent, DtEnum_1.DtAreaType.HAND, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
    CreateEmptyGlobalBuffToClient() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.CreateEmptyGlobalBuffEffect, null);
        effect.SetEffectDirect();
    }
    CreateEmptyGlobalBuffEffect() {
        let buff = new DtGlobalBuff_EmptyBuff_1.DtGlobalBuff_EmptyBuff(this.parent, this);
        buff.effectCard = this.parent;
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        return DtEffect_1.DtEffectResult.Next;
    }
    ThisCardUseCost(cost) {
        this.GetManager().ChangeReduceCost(this.parent, cost, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
    }
    BindOneTurnOnceEffect(eff1, eff2) {
        eff1.BindOnceTurnOnceEffect(eff2);
        eff2.BindOnceTurnOnceEffect(eff1);
    }
    SetDirectSkill(effect, operate, stage = 0) {
        let skill = new DtDirectSkill_1.DtDirectSkill(effect, stage, operate);
        effect.RegisterSkill(skill);
    }
}
exports.DtEffectCreator = DtEffectCreator;
//# sourceMappingURL=DtEffectCreator.js.map