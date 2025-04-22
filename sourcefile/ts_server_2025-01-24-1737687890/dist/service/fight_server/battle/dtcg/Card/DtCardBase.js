"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtCardBase = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../Data/DtEnum");
const DtCardDigimonType_1 = require("../Data/DtCardDigimonType");
const DtEventMsg_1 = require("../Data/DtEventMsg");
const DtEvent_1 = require("../DtEvent");
const DtFsmAttackEnum_1 = require("../Fsm/Attack/DtFsmAttackEnum");
const DtMessageData_1 = require("../Message/DtMessageData");
const DtBuffSpecialEvoCondition_1 = require("./Buff/DtBuffSpecialEvoCondition");
const DtEffectType_1 = require("./Effect/DtEffectType");
const DtCardDataEvoResult_1 = require("./DtCardDataEvoResult");
class DtCardBase {
    uid;
    parent;
    config;
    cardSummonRound = 0;
    cardBattleState = DtEnum_1.DtCardBattleState.None;
    evoOriginPrevCardUId;
    evoOriginList;
    whereAreaType = DtEnum_1.DtAreaType.None;
    buffList;
    lastEffectedType;
    isToken = false;
    CurrentInEffectType;
    constructor(player, uid, cardid) {
        this.parent = player;
        this.uid = uid;
        this.buffList = new Array();
        this.evoOriginList = new Array();
        this.lastEffectedType = DtEnum_1.DtActionEffectType.None;
        this.isToken = false;
        if (cardid != 0) {
            this.config = _Dcg_1.gCfg.card_basic.GetCfgWhitId(cardid);
            if (this.config == null) {
                _Dcg_1.gLog.err("not find cardCfg with id .. " + cardid);
            }
        }
    }
    ClearCardOriginListToGy() {
        for (let i = 0; i < this.evoOriginList.length; i++) {
            this.parent.CardMoveTo(this.evoOriginList[i], DtEnum_1.DtAreaType.GY, DtMessageData_1.DtProtoEnum_MoveReason.BodyLeaveBattle);
        }
        this.evoOriginPrevCardUId = null;
    }
    GetPlayer() {
        return this.parent;
    }
    SetCardWhere(type) {
        if (this.whereAreaType != type) {
            this.OnLeaveArea(this.whereAreaType);
            this.whereAreaType = type;
            if (this.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.parent.manager.FireListener(DtEvent_1.DtEventType.CardInBattleArea, new DtEventMsg_1.DtMsg_CommonCardInfo(this));
            }
            this.CheckEffectListener();
            this.OnEnterArea(this.whereAreaType);
        }
    }
    CanUseEffectInBattleArea() {
        return false;
    }
    CanUseEffectInHand() {
        return false;
    }
    CanFusionEvo() {
        return false;
    }
    CheckEffectListener() {
    }
    GetLastDP() {
        let dp = this.config.dp;
        this.ForEachEffectedBuff((buf) => {
            dp = buf.GetInt();
        }, DtEnum_1.DtBuffType.SET_ORIGIN_DP);
        this.ForEachEffectedBuff((buff) => {
            if (this.CheckCanChangeDp(buff)) {
                dp += buff.GetInt();
            }
        }, DtEnum_1.DtBuffType.CHANGE_DP);
        dp += this.parent.manager.globalBuffMgr.CheckCardInt(this, DtEnum_1.DtBuffType.CHANGE_DP);
        return dp;
    }
    CheckCanChangeDp(buff) {
        if (this.HasBuff(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP)) {
            if (buff.GetInt() < 0) {
                return false;
            }
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP_WITH_OPPENONT)) {
            if (buff.GetInt() < 0) {
                if (buff.parent.GetPlayer() != this.GetPlayer()) {
                    return false;
                }
            }
        }
        return true;
    }
    GetCostWithBuff() {
        let cost = this.config.cost;
        let can_redeuce_cost = true;
        if (this.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            can_redeuce_cost = this.GetPlayer().roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_REDUCE_MONSTER_PLAY_COSTS) == false;
        }
        this.ForEachEffectedBuff((buff) => {
            if (buff.type == DtEnum_1.DtBuffType.CHANGE_COST) {
                let num = buff.GetInt();
                if (num < 0 && can_redeuce_cost) {
                    cost += buff.GetInt();
                }
                else {
                    cost += buff.GetInt();
                }
            }
            if (buff.type == DtEnum_1.DtBuffType.SET_COST) {
                if (buff.GetInt() != -1) {
                    cost = buff.GetInt();
                }
            }
        }, DtEnum_1.DtBuffType.CHANGE_COST, DtEnum_1.DtBuffType.SET_COST);
        let globalCost = this.parent.manager.globalBuffMgr.CheckCardInt(this, DtEnum_1.DtBuffType.CHANGE_COST);
        if (globalCost < 0 && can_redeuce_cost) {
            cost += globalCost;
        }
        return cost;
    }
    GetPrecalculateLastCost(useWhere) {
        if (useWhere == DtEnum_1.DtAreaType.None) {
            return this.config.cost;
        }
        let can_redeuce_cost = true;
        if (this.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            can_redeuce_cost = this.GetPlayer().roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_REDUCE_MONSTER_PLAY_COSTS) == false;
        }
        let cost = this.config.cost;
        this.ForEachEffectedBuff((buff) => {
            if (buff.type == DtEnum_1.DtBuffType.CHANGE_COST) {
                let num = buff.GetInt();
                if (num < 0 && can_redeuce_cost) {
                    cost += buff.GetInt();
                }
                else {
                    cost += buff.GetInt();
                }
            }
            if (buff.type == DtEnum_1.DtBuffType.SET_COST) {
                if (buff.GetInt() != -1) {
                    cost = buff.GetInt();
                }
            }
        }, DtEnum_1.DtBuffType.CHANGE_COST, DtEnum_1.DtBuffType.SET_COST);
        let globalCost = this.parent.manager.globalBuffMgr.CheckCardInt(this, DtEnum_1.DtBuffType.CHANGE_COST);
        if (globalCost < 0 && can_redeuce_cost) {
            cost += globalCost;
        }
        let beforePlay = new DtEventMsg_1.DtMsg_BeforePlay(this, useWhere);
        beforePlay.Reset();
        this.GetPlayer().manager.FireListener(DtEvent_1.DtEventType.PrecalculateCost, beforePlay);
        cost = this.CalCost(cost, beforePlay, can_redeuce_cost);
        beforePlay.Reset();
        this.OnPrecalculateCostCheck(beforePlay);
        cost = this.CalCost(cost, beforePlay, can_redeuce_cost);
        return cost;
    }
    CalCost(curCost, beforePlay, can_redeuce_cost) {
        if (beforePlay.cost < 0 && can_redeuce_cost) {
            curCost += beforePlay.cost;
            if (curCost < 0) {
                curCost = 0;
            }
        }
        else {
            curCost += beforePlay.cost;
        }
        if (beforePlay.setCost != -1) {
            curCost = beforePlay.setCost;
        }
        return curCost;
    }
    GetLastPower() {
        let power = 1;
        this.ForEachEffectedBuff((buff) => {
            power += buff.GetInt();
        }, DtEnum_1.DtBuffType.CHANGE_POWER);
        power += this.parent.manager.globalBuffMgr.CheckCardInt(this, DtEnum_1.DtBuffType.CHANGE_POWER);
        return power;
    }
    GetDestoryDPLim() {
        let c = 0;
        this.ForEachEffectedBuff((buff) => {
            c += buff.GetInt();
        }, DtEnum_1.DtBuffType.INCREASE_DESTORY_CARD_DP);
        return c;
    }
    CheckCanEvo(originCard) {
        let results = this.GetAllEvoResult(originCard);
        if (results == null || results.length == 0) {
            return new DtCardDataEvoResult_1.DtCardDataEvoResult(-1, null, false);
        }
        return results[0];
    }
    CheckCanPlayerChooseCostEvo(originCard, pcost) {
        let results = this.GetAllEvoResult(originCard);
        if (results == null || results.length == 0) {
            return null;
        }
        for (let i = 0; i < results.length; i++) {
            if (results[i].resultCost == pcost) {
                return results[i];
            }
        }
        return null;
    }
    GetAllEvoResult(originCard) {
        if (originCard == null) {
            return null;
        }
        let arrResult = new Array();
        if (this.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            if (this.config.card_special_evo_condition != null) {
                for (let i = 0; i < this.config.card_special_evo_condition.length; i++) {
                    let speccfg = this.config.card_special_evo_condition[i];
                    let cost = this.config.card_special_evo_condition[i].cost;
                    if (speccfg.name != DtCardDigimonType_1.DtCardDigimonType.None) {
                        if (originCard.NameIs(speccfg.name, true) == false) {
                            cost = -1;
                        }
                    }
                    if (speccfg.level != 0) {
                        if (originCard.config.lv != speccfg.level) {
                            cost = -1;
                        }
                    }
                    if (speccfg.color != DtEnum_1.DtCardColor.None) {
                        if (originCard.ColorIs(speccfg.color) == false) {
                            cost = -1;
                        }
                    }
                    if (speccfg.feature != DtCardDigimonType_1.DtCardDigimonType.None) {
                        if (originCard.FeatureIs(speccfg.feature) == false) {
                            cost = -1;
                        }
                    }
                    if (speccfg.includename != DtCardDigimonType_1.DtCardDigimonType.None) {
                        if (originCard.NameIs(speccfg.includename) == false) {
                            cost = -1;
                        }
                    }
                    if (cost != -1) {
                        arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(cost, null, false));
                    }
                }
            }
            let hasNotIngoreRequireBuff = this.GetPlayer().roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_IGNORE_EVO_REQUIREMENT);
            this.ForEachEffectedBuff((buff) => {
                if (buff.evoType == DtBuffSpecialEvoCondition_1.SpecialEvoType.EvoCheckOri) {
                    let cost = buff.EvoDigimonCanEvoOrigin(originCard);
                    if (cost > 0) {
                        if (hasNotIngoreRequireBuff == false || buff.SeenData != null) {
                            arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(cost, buff, false));
                        }
                    }
                    if (buff.willBlock) {
                        arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(-1, null, true));
                        return arrResult;
                    }
                }
            }, DtEnum_1.DtBuffType.SPECIAL_EVO_CONDITION);
            originCard.ForEachEffectedBuff((buff) => {
                if (buff.evoType == DtBuffSpecialEvoCondition_1.SpecialEvoType.OriCheckEvo) {
                    let cost = buff.OriginDigimonCanEvoCard(this);
                    if (cost > 0) {
                        if (hasNotIngoreRequireBuff == false || buff.SeenData != null) {
                            arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(cost, buff, false));
                        }
                    }
                    if (buff.willBlock) {
                        arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(-1, null, true));
                        return arrResult;
                    }
                }
                else if (buff.evoType == DtBuffSpecialEvoCondition_1.SpecialEvoType.OriCheckEvoCondition) {
                    let cost = buff.OriginDigimonCanEvoCard(this);
                    if (cost < 0 && buff.willBlock) {
                        arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(-1, null, true));
                        return arrResult;
                    }
                }
            }, DtEnum_1.DtBuffType.SPECIAL_EVO_CONDITION);
            if (this.config.card_evo_condition != null) {
                for (let i = 0; i < this.config.card_evo_condition.length; i++) {
                    if (originCard.ColorIs(this.config.card_evo_condition[i].color)) {
                        if (originCard.config.lv == this.config.card_evo_condition[i].lv) {
                            arrResult.push(new DtCardDataEvoResult_1.DtCardDataEvoResult(this.config.card_evo_condition[i].cost, null, false));
                        }
                    }
                }
            }
        }
        return arrResult;
    }
    IsEvoOrigin(uid) {
        for (let i = 0; i < this.evoOriginList.length; i++) {
            if (this.evoOriginList[i].UidEquals(uid)) {
                return true;
            }
        }
        return false;
    }
    NameIs(name, isForce = false) {
        let isSame = false;
        this.ForEachEffectedBuff((buf) => {
            if (buf.GetInt() == name) {
                isSame = true;
            }
        }, DtEnum_1.DtBuffType.NAME_IS);
        if (isSame) {
            return true;
        }
        if (this.config) {
            if (isForce) {
                return name == this.config.forceDigimonType;
            }
            if (this.config.extendDigimonType && this.config.extendDigimonType.length > 0) {
                for (let i = 0; i < this.config.extendDigimonType.length; i++) {
                    if (name == this.config.extendDigimonType[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    FeatureIs(type) {
        let isSame = false;
        this.ForEachEffectedBuff((buf) => {
            if (buf.GetInt() == type) {
                isSame = true;
            }
        }, DtEnum_1.DtBuffType.FEATURE_IS);
        if (isSame) {
            return true;
        }
        if (this.config) {
            if (this.config.grade == type) {
                return true;
            }
            if (this.config.attribute == type) {
                return true;
            }
            if (this.config.digimonType && this.config.digimonType.length > 0) {
                for (let i = 0; i < this.config.digimonType.length; i++) {
                    if (type == this.config.digimonType[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    FeatureHas(types) {
        let isSame = false;
        this.ForEachEffectedBuff((buf) => {
            if (this.ArrayHas(types, buf.GetInt())) {
                isSame = true;
            }
        }, DtEnum_1.DtBuffType.FEATURE_IS);
        if (isSame) {
            return true;
        }
        if (this.config) {
            if (this.ArrayHas(types, this.config.grade)) {
                return true;
            }
            if (this.ArrayHas(types, this.config.attribute)) {
                return true;
            }
            if (this.config.digimonType && this.config.digimonType.length > 0) {
                for (let i = 0; i < this.config.digimonType.length; i++) {
                    if (this.ArrayHas(types, this.config.digimonType[i])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    ArrayHas(arr, t) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == t) {
                return true;
            }
        }
        return false;
    }
    CardTypeIs(type) {
        if (this.config == null) {
            return false;
        }
        if (this.config.cardType == DtEnum_1.DtCardType.DigiTama) {
            if (this.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                if (type == DtEnum_1.DtCardType.Monster) {
                    return true;
                }
            }
        }
        return this.config.cardType == type;
    }
    GetOriginDigimonCount() {
        return this.evoOriginList.length;
    }
    GetOriginDigimonList() {
        let arr = new Array();
        for (let i = 0; i < this.evoOriginList.length; i++) {
            arr.push(this.evoOriginList[i]);
        }
        return arr;
    }
    CheckOriginListWithCondition(func) {
        for (let i = 0; i < this.evoOriginList.length; i++) {
            if (func(this.evoOriginList[i])) {
                return true;
            }
        }
        return false;
    }
    CheckOriginCountWithCondition(func) {
        let count = 0;
        for (let i = 0; i < this.evoOriginList.length; i++) {
            if (func(this.evoOriginList[i])) {
                count++;
            }
        }
        return count;
    }
    CalculateDigimonOriginList() {
        this.evoOriginList.length = 0;
        let ctime = 0;
        let evoUid = this.evoOriginPrevCardUId;
        while (ctime < 110) {
            let lastCard = this.parent.areaEvo.GetCard(evoUid);
            if (lastCard == null) {
                break;
            }
            this.evoOriginList.push(lastCard);
            evoUid = lastCard.evoOriginPrevCardUId;
            ctime++;
        }
    }
    GetBottomOriginDigimon() {
        if (this.evoOriginPrevCardUId == null || this.evoOriginPrevCardUId.toNumber() == 0) {
            return this;
        }
        let list = this.GetOriginDigimonList();
        return list[list.length - 1];
    }
    CanDegenerate(count) {
        if (this.GetCardConfigLv() == 3) {
            return 0;
        }
        if (this.evoOriginPrevCardUId == null || this.evoOriginPrevCardUId.toNumber() == 0) {
            return 0;
        }
        let oriList = this.GetOriginDigimonList();
        let realCount = 0;
        for (let i = 0; i < count; i++) {
            if (oriList.length <= i) {
                break;
            }
            realCount++;
            if (oriList[i].config.lv == 3) {
                break;
            }
        }
        return realCount;
    }
    GetDegenerateChoose(count) {
        let cards = new Array();
        if (this.GetCardConfigLv() == 3) {
            return cards;
        }
        if (this.evoOriginPrevCardUId == null || this.evoOriginPrevCardUId.toNumber() == 0) {
            return cards;
        }
        let oriList = this.GetOriginDigimonList();
        for (let i = 0; i < count; i++) {
            if (oriList.length <= i) {
                break;
            }
            cards.push(oriList[i]);
            if (oriList[i].config.lv == 3) {
                break;
            }
        }
        return cards;
    }
    AddBuff(buff) {
        if (this.buffList.indexOf(buff) == -1) {
            this.buffList.push(buff);
            buff.SetBuffListen(this.parent.manager);
            buff.targetCard = this;
        }
    }
    RemoveBuff(buff) {
        if (this.buffList) {
            for (let i = this.buffList.length - 1; i >= 0; i--) {
                if (this.buffList[i] == buff) {
                    this.buffList[i].Clear();
                    this.buffList.splice(i, 1);
                    return;
                }
            }
        }
    }
    RemoveBuffWithEffectAdd(effect) {
        if (this.buffList) {
            for (let i = this.buffList.length - 1; i >= 0; i--) {
                if (this.buffList[i].parent == effect) {
                    this.buffList[i].Clear();
                    this.buffList.splice(i, 1);
                }
            }
        }
    }
    CheckBuffWithEffectAdd(effect) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].parent == effect) {
                return true;
            }
        }
        return false;
    }
    CheckBuff(type, checkUseful) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].Condition()) {
                if (this.buffList[i].type == type) {
                    if (checkUseful) {
                        return this.buffList[i].IsAffected();
                    }
                    return true;
                }
            }
        }
        return false;
    }
    CheckIsImmueEffect(caster) {
        if (caster == null) {
            return false;
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT)) {
            if (this.GetPlayer() != caster.GetPlayer()) {
                return true;
            }
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON)) {
            if (this.GetPlayer() != caster.GetPlayer() && caster.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
                return true;
            }
        }
        return false;
    }
    HasBuff(type) {
        let has = this.CheckBuff(type, true);
        if (has == false) {
            has = this.parent.manager.globalBuffMgr.CheckBeEffectBuff(this, type, true);
        }
        return has;
    }
    ForEachEffectedBuff(func, ...buffs) {
        for (let i = 0; i < this.buffList.length; i++) {
            for (let j = 0; j < buffs.length; j++) {
                if (this.buffList[i].type == buffs[j]) {
                    if (this.buffList[i].IsAffected()) {
                        func(this.buffList[i]);
                    }
                }
            }
        }
    }
    _NotCheckEffectedBuff(type) {
        let has = this.CheckBuff(type, false);
        if (has == false) {
            has = this.parent.manager.globalBuffMgr.CheckBeEffectBuff(this, type, false);
        }
        return has;
    }
    ColorMulIs(...color) {
        if (color && color.length > 0) {
            for (let i = 0; i < color.length; i++) {
                if (this.ColorIs(color[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    ColorIs(color) {
        if (color == DtEnum_1.DtCardColor.None) {
            return true;
        }
        let isSame = false;
        this.ForEachEffectedBuff((buff) => {
            if (color == buff.GetAny()) {
                isSame = true;
            }
        }, DtEnum_1.DtBuffType.SET_COLOR);
        if (isSame) {
            return true;
        }
        for (let i = 0; i < this.config.color.length; i++) {
            if (this.config.color[i] == color) {
                return true;
            }
        }
        return false;
    }
    ColorCount() {
        let count = 0;
        if (this.ColorIs(DtEnum_1.DtCardColor.Black)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Blue)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Green)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Purple)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Red)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.White)) {
            count++;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
            count++;
        }
        return count;
    }
    CardIsInArea(area) {
        if (this.whereAreaType == DtEnum_1.DtAreaType.WAIT) {
            let before = this.parent.GetArea(DtEnum_1.DtAreaType.WAIT).GetCardBeforeData(this.uid);
            if ((before & area) != 0) {
                return true;
            }
        }
        if ((area & this.whereAreaType) != 0) {
            return true;
        }
        return false;
    }
    OnPrecalculateCostCheck(msg) {
    }
    OnBeforePlay(msg) {
    }
    OnPlay(msg) {
    }
    OnInBattleArea() {
    }
    OnEvolution(msg) {
    }
    OnWhenAttacking(msg) {
    }
    OnBeBlock() {
    }
    OnDestroy(msg) {
    }
    OnUseEffect() {
    }
    OnFusionEvo() {
    }
    OnDefenseEffect() {
    }
    OnEnterArea(area) {
        if (area == DtEnum_1.DtAreaType.DECK || area == DtEnum_1.DtAreaType.DEFENSE || area == DtEnum_1.DtAreaType.DIGITAMA || area == DtEnum_1.DtAreaType.TOKEN) {
            if (this.lastGameBattleInfo != null) {
                this.forceUpdateBattleInfo = true;
            }
            if (this.lastHandInfo != null) {
                this.forceUpdateHandInfo = true;
            }
            this.lastGameBattleInfo = null;
            this.lastHandInfo = null;
        }
    }
    OnLeaveArea(area) {
    }
    RemoveOriginDigimon(card) {
    }
    ResetState() {
        this.cardSummonRound = 0;
        this.cardBattleState = DtEnum_1.DtCardBattleState.None;
        this.evoOriginPrevCardUId = null;
        this.evoOriginList.length = 0;
        this.lastEffectedType = DtEnum_1.DtActionEffectType.None;
        this.CurrentInEffectType = DtEnum_1.DtActionEffectType.None;
        if (this.buffList.length > 0) {
            for (let i = this.buffList.length - 1; i >= 0; i--) {
                if (this.buffList[i].parent != null) {
                    this.buffList[i].Clear();
                    this.buffList.splice(i, 1);
                }
            }
        }
    }
    CanAttack() {
        if (this.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
            return false;
        }
        if (this.cardBattleState != DtEnum_1.DtCardBattleState.Activate) {
            return false;
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.Quick_Attack_Digimon) == false) {
            if (this.cardSummonRound == this.parent.manager.CurRound) {
                return false;
            }
        }
        if (this.parent.manager.CheckFsmAttackIsFree() == false) {
            return false;
        }
        return true;
    }
    CardCanAttack(type, card, isEvoOverAttack = false) {
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK)) {
            return false;
        }
        if (type == DtFsmAttackEnum_1.DtFsmAttackType.DefenseAttack) {
            if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_PLAYER)) {
                return false;
            }
        }
        if (type == DtFsmAttackEnum_1.DtFsmAttackType.MonsterAttack) {
            if (card.CardCanBeAttack() == false) {
                return false;
            }
            if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_MONSTER)) {
                return false;
            }
            if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
                return false;
            }
            if (this.HasBuff(DtEnum_1.DtBuffType.ATTACK_ACTIVATE_DIGIMON) == false) {
                if (card.cardBattleState != DtEnum_1.DtCardBattleState.Reset) {
                    if (isEvoOverAttack) {
                        if (this.HasBuff(DtEnum_1.DtBuffType.EVO_ATTACK_CAN_ATTACK_ACTIVE_DIGIMON) == false) {
                            return false;
                        }
                    }
                    else {
                        if (this.HasBuff(DtEnum_1.DtBuffType.ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON)) {
                            if (card.GetOriginDigimonCount() > 0) {
                                return false;
                            }
                        }
                        else if (this.HasBuff(DtEnum_1.DtBuffType.ATTACK_LV_LQ_4_ACTIVATE_DIGIMON)) {
                            if (card.CardLvIs(DtEnum_1.DtFilterCompare.GREATER, 4)) {
                                return false;
                            }
                        }
                        else if (this.HasBuff(DtEnum_1.DtBuffType.ATTACK_ORIGIN_LESS_THEN_ACTIVATE_DIGIMON)) {
                            if (card.GetOriginDigimonCount() > this.GetOriginDigimonCount()) {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        return this.CanAttack();
    }
    CardCanBeAttack() {
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_ATTACK)) {
            return false;
        }
        return true;
    }
    CardCanUse() {
        if (this.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
            if (this.parent.roundData.HasBuff(DtEnum_1.DtBuffType.MAGIC_CARD_BE_PROHIBIT_USE)) {
                return false;
            }
            if (this.HasBuff(DtEnum_1.DtBuffType.MAGIC_CARD_USE_IGNORE_COLOR_CONDITION)) {
                return true;
            }
            for (let i = 0; i < this.config.color.length; i++) {
                let hatchCard = this.GetPlayer().areaDigitama.hatchedCard;
                if (hatchCard == null || hatchCard.ColorIs(this.config.color[i]) == false) {
                    if (this.GetPlayer().areaInBattle.CheckWithCondition((card) => {
                        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                            return card.ColorIs(this.config.color[i]);
                        }
                        return false;
                    }) == false) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    PopInheritBuff() {
        if (this.buffList.length > 0) {
            let inheritBuffs = new Array();
            for (let i = this.buffList.length - 1; i >= 0; i--) {
                if (this.buffList[i].inherit == true) {
                    inheritBuffs.push(this.buffList[i]);
                    this.buffList.splice(i, 1);
                }
            }
            return inheritBuffs;
        }
        return null;
    }
    SetInheritBuff(inheritBuffs) {
        if (inheritBuffs == null) {
            return;
        }
        for (let i = 0; i < inheritBuffs.length; i++) {
            this.buffList.push(inheritBuffs[i]);
            inheritBuffs[i].targetCard = this;
        }
    }
    CardInActionEffect(type) {
        if (this.CurrentInEffectType == type) {
            return true;
        }
        return false;
    }
    GetCardConfigLv() {
        return this.config.lv;
    }
    GetConfigCost() {
        return this.config.cost;
    }
    GetConfigDP() {
        return this.config.dp;
    }
    GetCardForceNameIncludBuff() {
        let names = new Array();
        names.push(this.config.forceDigimonType);
        this.ForEachEffectedBuff((buf) => {
            names.push(buf.GetInt());
        }, DtEnum_1.DtBuffType.NAME_IS);
        return names;
    }
    GetCardConfigForceName() {
        return this.config.forceDigimonType;
    }
    NameIsForceOtherCard(card) {
        if (card == null) {
            return false;
        }
        let pNames = this.GetCardForceNameIncludBuff();
        let cNames = card.GetCardForceNameIncludBuff();
        for (let i = 0; i < pNames.length; i++) {
            for (let j = 0; j < cNames.length; j++) {
                if (pNames[i] == cNames[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    ColorIsSameOtherCard(card) {
        if (card == null) {
            return false;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Black) && card.ColorIs(DtEnum_1.DtCardColor.Black)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Blue) && card.ColorIs(DtEnum_1.DtCardColor.Blue)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Green) && card.ColorIs(DtEnum_1.DtCardColor.Green)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Purple) && card.ColorIs(DtEnum_1.DtCardColor.Purple)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Red) && card.ColorIs(DtEnum_1.DtCardColor.Red)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.White) && card.ColorIs(DtEnum_1.DtCardColor.White)) {
            return true;
        }
        if (this.ColorIs(DtEnum_1.DtCardColor.Yellow) && card.ColorIs(DtEnum_1.DtCardColor.Yellow)) {
            return true;
        }
        return false;
    }
    CardLvIs(compare, lv) {
        let result = false;
        if (this.GetCardConfigLv() == 0 || lv == 0) {
            return false;
        }
        switch (compare) {
            case DtEnum_1.DtFilterCompare.EQUAL:
                if (this.GetCardConfigLv() == lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATER:
                if (this.GetCardConfigLv() > lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.GREATE_EQUAL:
                if (this.GetCardConfigLv() >= lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS:
                if (this.GetCardConfigLv() < lv) {
                    result = true;
                }
                break;
            case DtEnum_1.DtFilterCompare.LESS_EQUAL:
                if (this.GetCardConfigLv() <= lv) {
                    result = true;
                }
                break;
        }
        return result;
    }
    UidEquals(uid) {
        if (uid) {
            return this.uid.equals(uid);
        }
        return false;
    }
    ISSameCard(card) {
        if (card == this) {
            return true;
        }
        if (this.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO || card.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO) {
            if (this.whereAreaType == DtEnum_1.DtAreaType.OTHER_EVO) {
                return card.CheckOriginListWithCondition((c) => { return c == this; });
            }
            else {
                return this.CheckOriginListWithCondition((c) => { return c == card; });
            }
        }
        return false;
    }
    Clear() {
        this.parent = null;
        if (this.buffList != null) {
            for (let i = 0; i < this.buffList.length; i++) {
                this.buffList[i].Clear();
            }
            this.buffList = null;
        }
        this.evoOriginList = null;
    }
    GetCardInBattleIndex() {
        if (this.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            return this.parent.areaInBattle.GetCardIndex(this.uid);
        }
        return 0;
    }
    lastGameBattleInfo = null;
    forceUpdateBattleInfo = false;
    GetLastBattleInfo() {
        return this.lastGameBattleInfo;
    }
    GetGameBattleCard() {
        if (this.lastGameBattleInfo == null) {
            this.lastGameBattleInfo = new protoMsg_1.DcgProto.S_GameBattleCard();
            this.lastGameBattleInfo.GameBattleCardInfos = new Array();
            this.lastGameBattleInfo.CardIID = this.uid;
            this.lastGameBattleInfo.CanActivateEffects = new Array();
            this.lastGameBattleInfo.EffectInfos = new Array();
        }
        let hasChange = false;
        if (this.forceUpdateBattleInfo) {
            hasChange = true;
            this.forceUpdateBattleInfo = false;
        }
        let lastDp = this.GetLastDP();
        if (this.lastGameBattleInfo.LastDP != lastDp) {
            hasChange = true;
            this.lastGameBattleInfo.LastDP = lastDp;
        }
        let newInfos = this.GetCardBattleInfo();
        if (this.lastGameBattleInfo.GameBattleCardInfos.length != newInfos.length) {
            hasChange = true;
            this.lastGameBattleInfo.GameBattleCardInfos = newInfos;
        }
        else {
            let isSame = true;
            for (let i = 0; i < this.lastGameBattleInfo.GameBattleCardInfos.length; i++) {
                if (this.CardInfoISSame(this.lastGameBattleInfo.GameBattleCardInfos[i], newInfos[i]) == false) {
                    isSame = false;
                    break;
                }
            }
            if (isSame == false) {
                hasChange = true;
                this.lastGameBattleInfo.GameBattleCardInfos = newInfos;
            }
        }
        let newEffectInfos = this.GetCardEffectInfo();
        if (this.lastGameBattleInfo.EffectInfos.length != newEffectInfos.length) {
            hasChange = true;
            this.lastGameBattleInfo.EffectInfos = newEffectInfos;
        }
        else {
            let isSame = true;
            for (let i = 0; i < this.lastGameBattleInfo.EffectInfos.length; i++) {
                if (this.EffectInfoIsSame(this.lastGameBattleInfo.EffectInfos[i], newEffectInfos[i]) == false) {
                    isSame = false;
                    break;
                }
            }
            if (isSame == false) {
                hasChange = true;
                this.lastGameBattleInfo.EffectInfos = newEffectInfos;
            }
        }
        let activateEffectInBattle = this.GetCanActavateEffectInBattle();
        if (this.lastGameBattleInfo.CanActivateEffects.length != activateEffectInBattle.length) {
            hasChange = true;
            this.lastGameBattleInfo.CanActivateEffects = activateEffectInBattle;
        }
        if (hasChange) {
            return this.GetPlayer().manager.Get2ClientMessageMgr().DeepCopy(protoMsg_1.DcgProto.S_GameBattleCard, this.lastGameBattleInfo);
        }
        return null;
    }
    GetCardBattleInfo() {
        let info = new Array();
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].IsBuffActive() && this.buffList[i].IsAffected()) {
                let data = new protoMsg_1.DcgProto.S_GameBattleCardInfo();
                data.Type = DtMessageData_1.DtProtoEnum_CardInfoType.Buff;
                data.SubType = this.buffList[i].type;
                data.Data = this.buffList[i].GetBuffActiveValue();
                info.push(data);
            }
        }
        this.parent.manager.globalBuffMgr.ForEachBuffs(this, (type, number) => {
            let data = new protoMsg_1.DcgProto.S_GameBattleCardInfo();
            data.Type = DtMessageData_1.DtProtoEnum_CardInfoType.Buff;
            data.SubType = type;
            data.Data = number;
            info.push(data);
        });
        if (this.isToken) {
            let data = new protoMsg_1.DcgProto.S_GameBattleCardInfo();
            data.Type = DtMessageData_1.DtProtoEnum_CardInfoType.Buff;
            data.SubType = DtEnum_1.DtBuffType.IS_TOKEN;
            data.Data = 0;
            info.push(data);
        }
        return info;
    }
    GetCardEffectInfo() {
        return new Array();
    }
    CardInfoISSame(a, b) {
        if (a.Type != b.Type) {
            return false;
        }
        if (a.SubType != b.SubType) {
            return false;
        }
        if (a.Data != b.Data) {
            return false;
        }
        return true;
    }
    EffectInfoIsSame(a, b) {
        if (a.CardIID.equals(b.CardIID) == false) {
            return false;
        }
        if (a.EffectId != b.EffectId) {
            return false;
        }
        if (a.param != b.param) {
            return false;
        }
        return true;
    }
    GetCanActavateEffectInBattle() {
        let info = new Array();
        if (this.CanUseEffectInBattleArea()) {
            info.push(DtEffectType_1.DtEffectType.OnUseEffect);
        }
        return info;
    }
    lastHandInfo = null;
    forceUpdateHandInfo = false;
    GetLastHandInfo() {
        return this.lastHandInfo;
    }
    GetGameHandCard() {
        if (this.lastHandInfo == null) {
            this.lastHandInfo = new protoMsg_1.DcgProto.S_GameHandCard();
            this.lastHandInfo.CardIID = this.uid;
            this.lastHandInfo.PlayCost = -1;
            this.lastHandInfo.CanActivateEffects = new Array();
            this.lastHandInfo.CardSpecEvo = new Array();
            this.lastHandInfo.Buffs = new Array();
        }
        let hasChange = false;
        if (this.forceUpdateHandInfo) {
            hasChange = true;
            this.forceUpdateHandInfo = false;
        }
        let cost = this.GetCardPlayCost();
        if (cost != this.lastHandInfo.PlayCost) {
            hasChange = true;
            this.lastHandInfo.PlayCost = cost;
        }
        let activateEffects = this.GetCanActavateEffectInHand();
        if (activateEffects.length != this.lastHandInfo.CanActivateEffects.length) {
            hasChange = true;
            this.lastHandInfo.CanActivateEffects = activateEffects;
        }
        let specialEvo = this.GetCardSpecInHand();
        if (specialEvo.length != this.lastHandInfo.CardSpecEvo.length) {
            hasChange = true;
            this.lastHandInfo.CardSpecEvo = specialEvo;
        }
        else {
            let isSame = true;
            for (let i = 0; i < this.lastHandInfo.CardSpecEvo.length; i++) {
                if (this.CardSpecISSame(this.lastHandInfo.CardSpecEvo[i], specialEvo[i]) == false) {
                    isSame = false;
                    break;
                }
            }
            if (isSame == false) {
                hasChange = true;
                this.lastHandInfo.CardSpecEvo = specialEvo;
            }
        }
        let buffs = this.GetCardBuffsFromHand();
        if (buffs.length != this.lastHandInfo.Buffs.length) {
            hasChange = true;
            this.lastHandInfo.Buffs = buffs;
        }
        if (hasChange) {
            return this.parent.manager.Get2ClientMessageMgr().DeepCopy(protoMsg_1.DcgProto.S_GameHandCard, this.lastHandInfo);
        }
        return null;
    }
    GetCardPlayCost() {
        let currentLastCost = this.GetPrecalculateLastCost(this.whereAreaType);
        if (this.config.cost == currentLastCost) {
            return -1;
        }
        return currentLastCost;
    }
    GetCanActavateEffectInHand() {
        let info = new Array();
        if (this.CanFusionEvo()) {
            info.push(DtEffectType_1.DtEffectType.PlayerFusion);
        }
        if (this.CanUseEffectInHand()) {
            info.push(DtEffectType_1.DtEffectType.OnUseEffect);
        }
        return info;
    }
    GetCardSpecInHand() {
        let info = new Array();
        this.GetPlayer().areaInBattle.ForeachCards((card) => {
            let evodata = this.CheckCanEvo(card);
            if (evodata.buff != null) {
                let data = new protoMsg_1.DcgProto.S_GameCardSpecEvoEffect();
                data.CardIID = card.uid;
                data.Cost = evodata.resultCost;
                info.push(data);
            }
            if (evodata.block) {
                let data = new protoMsg_1.DcgProto.S_GameCardSpecEvoEffect();
                data.CardIID = card.uid;
                data.Cost = -1;
                info.push(data);
            }
        });
        return info;
    }
    GetCardBuffsFromHand() {
        let info = new Array();
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].IsBuffActive() && this.buffList[i].IsAffected()) {
                info.push(this.buffList[i].type);
            }
        }
        this.parent.manager.globalBuffMgr.ForEachBuffs(this, (type, number) => {
            info.push(type);
        });
        return info;
    }
    CardSpecISSame(a, b) {
        if (a.CardIID.equals(b.CardIID) == false) {
            return false;
        }
        if (a.Cost != b.Cost) {
            return false;
        }
        return true;
    }
}
exports.DtCardBase = DtCardBase;
//# sourceMappingURL=DtCardBase.js.map