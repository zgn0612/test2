"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LgCard = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEffectType_1 = require("../../dtcg/Card/Effect/DtEffectType");
const DtEnum_1 = require("../../dtcg/Data/DtEnum");
const DtCardDigimonType_1 = require("../../dtcg/Data/DtCardDigimonType");
const DtMessageData_1 = require("../../dtcg/Message/DtMessageData");
const ADefine_1 = require("../ailogic/Atree/ADefine");
class LgCardActivateEffectData {
    effectId;
    effectRound;
}
class LgCard {
    uid;
    parent;
    areaType;
    sData;
    sDetail;
    cardCfg;
    cardInfoData;
    cardInBattleData;
    cardInHandData;
    serverCost = -1;
    AITrees;
    AIEvo;
    AIAttack;
    AIChooseAI;
    AIOptionAI;
    AIDefenseAI;
    AICheckOnceTree;
    activateEffectDatas;
    constructor(parent, uid) {
        this.parent = parent;
        this.uid = uid;
        this.activateEffectDatas = new Array();
    }
    SetData(data, detail) {
        if (data) {
            let buffer = protoMsg_1.DcgProto.S_OtherCard.encode(data).finish();
            this.sData = protoMsg_1.DcgProto.S_OtherCard.decode(buffer);
        }
        if (detail) {
            let buffer = protoMsg_1.DcgProto.S_OtherCardDetail.encode(detail).finish();
            this.sDetail = protoMsg_1.DcgProto.S_OtherCardDetail.decode(buffer);
        }
        if (this.cardCfg == null && data.CfgId != 0) {
            this.cardCfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(data.CfgId);
            if (this.cardCfg && this.parent.IsAI) {
                this.SetAI();
            }
        }
    }
    CheckSetCfgId(cfgId) {
        if (cfgId == 0) {
            return;
        }
        if (this.cardCfg == null && cfgId != 0) {
            this.cardCfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(cfgId);
            if (this.cardCfg && this.parent.IsAI) {
                this.SetAI();
            }
        }
    }
    SetArea(area) {
        this.areaType = area.type;
    }
    GetArea() {
        if (this.areaType == DtEnum_1.DtAreaType.None) {
            _Dcg_1.gLog.err("[ai]this card area is wrong cfgid:" + this.GetCfgCardId());
        }
        return this.areaType;
    }
    UpdateGameBattleData(data) {
        if (this.sDetail) {
            this.sDetail.LastDP = data.LastDP;
        }
        this.cardInfoData = data.GameBattleCardInfos;
        this.cardInBattleData = data;
    }
    UpdateGameHandData(data) {
        this.serverCost = data.PlayCost;
        this.cardInHandData = data;
    }
    GetBottomOriginDigimon() {
        let list = this.GetOriginDigimonList();
        if (list.length > 0) {
            return list[list.length - 1];
        }
        return null;
    }
    GetEvoOriginPrevCardIID() {
        if (this.sData) {
            return this.sData.EvoOriginPrevCardIID;
        }
        return null;
    }
    SetEvoOriginPrevCardIID(uid) {
        if (this.sData) {
            this.sData.EvoOriginPrevCardIID = uid;
        }
    }
    GetOriginDigimonList() {
        let list = new Array();
        let ctime = 0;
        let evoUid = this.GetEvoOriginPrevCardIID();
        while (ctime < 110) {
            let lastCard = this.parent.GetArea(DtEnum_1.DtAreaType.OTHER_EVO).GetCard(evoUid);
            if (lastCard == null) {
                break;
            }
            ctime++;
            list.push(lastCard);
            evoUid = lastCard.GetEvoOriginPrevCardIID();
        }
        return list;
    }
    GetBattleState() {
        if (this.sData) {
            return Number(this.sData.CardBattleState);
        }
        return DtEnum_1.DtCardBattleState.None;
    }
    GetCfgName() {
        if (this.cardCfg) {
            return _Dcg_1.gCfg.language.GetLanguage(this.cardCfg.name);
        }
        return "";
    }
    GetCfgDP() {
        if (this.cardCfg) {
            return this.cardCfg.dp;
        }
        return 0;
    }
    GetCfgCardId() {
        if (this.cardCfg) {
            return this.cardCfg.id;
        }
        return 0;
    }
    GetCardLastDP() {
        if (this.sDetail) {
            return this.sDetail.LastDP;
        }
        return this.cardCfg.dp;
    }
    GetCardLastPower() {
        let p = 0;
        if (this.cardInBattleData) {
            for (let i = 0; i < this.cardInBattleData.GameBattleCardInfos.length; i++) {
                let buf = this.cardInBattleData.GameBattleCardInfos[i];
                if (buf.Type == DtMessageData_1.DtProtoEnum_CardInfoType.Buff) {
                    if (buf.SubType == DtEnum_1.DtBuffType.CHANGE_POWER) {
                        p += buf.Data;
                    }
                }
            }
        }
        return p;
    }
    GetCardColorCount() {
        return 0;
    }
    GetCardLv() {
        if (this.cardCfg == null) {
            return 0;
        }
        return this.cardCfg.lv;
    }
    GetCardCfgNumber() {
        if (this.cardCfg == null) {
            return "";
        }
        return this.cardCfg.card_number;
    }
    GetBattleScene() {
        return this.parent.GetRoot();
    }
    GetCardPlayCost() {
        if (this.serverCost != -1) {
            return this.serverCost;
        }
        return this.cardCfg.cost;
    }
    CardTypeIs(type) {
        if (this.cardCfg == null) {
            return false;
        }
        return this.cardCfg.cardType == type;
    }
    HasBuff(buff) {
        if (this.cardInfoData) {
            for (let i = 0; i < this.cardInfoData.length; i++) {
                if (this.cardInfoData[i].Type == DtMessageData_1.DtProtoEnum_CardInfoType.Buff) {
                    if (this.cardInfoData[i].SubType == buff) {
                        return true;
                    }
                }
            }
        }
        if (this.areaType == DtEnum_1.DtAreaType.HAND) {
            if (this.cardInHandData) {
                for (let i = 0; i < this.cardInHandData.Buffs.length; i++) {
                    if (this.cardInHandData.Buffs[i] == buff) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    ColorIs(color) {
        if (this.cardInfoData) {
            for (let i = 0; i < this.cardInfoData.length; i++) {
                if (this.cardInfoData[i].Type == DtMessageData_1.DtProtoEnum_CardInfoType.Buff) {
                    if (this.cardInfoData[i].SubType == DtEnum_1.DtBuffType.SET_COLOR) {
                        if (color == this.cardInfoData[i].Data) {
                            return true;
                        }
                    }
                }
            }
        }
        for (let i = 0; i < this.cardCfg.color.length; i++) {
            if (this.cardCfg.color[i] == color) {
                return true;
            }
        }
        return false;
    }
    NameIs(name, isForce = false) {
        if (this.cardCfg) {
            if (isForce) {
                return name == this.cardCfg.forceDigimonType;
            }
            if (this.cardCfg.extendDigimonType && this.cardCfg.extendDigimonType.length > 0) {
                for (let i = 0; i < this.cardCfg.extendDigimonType.length; i++) {
                    if (name == this.cardCfg.extendDigimonType[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    FeatureIs(type) {
        if (this.cardCfg) {
            if (this.cardCfg.grade == type) {
                return true;
            }
            if (this.cardCfg.attribute == type) {
                return true;
            }
            if (this.cardCfg.digimonType && this.cardCfg.digimonType.length > 0) {
                for (let i = 0; i < this.cardCfg.digimonType.length; i++) {
                    if (type == this.cardCfg.digimonType[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    HasEffect(skillid) {
        if (this.cardInBattleData) {
            for (let i = 0; i < this.cardInBattleData.GameBattleCardInfos.length; i++) {
                if (this.cardInBattleData.GameBattleCardInfos[i].Type == DtMessageData_1.DtProtoEnum_CardInfoType.Effect) {
                    if (this.cardInBattleData.GameBattleCardInfos[i].SubType == skillid) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    CardCanBlock() {
        if (this.GetBattleState() == DtEnum_1.DtCardBattleState.Activate) {
            if (this.HasEffect(DtEnum_1.EFFECT_NAME.BLOCKER)) {
                if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_DEF_BLOCK) == false) {
                    return true;
                }
            }
        }
        return false;
    }
    CardCanPlay() {
        if (this.GetBattleScene().battleState == DtEnum_1.DtBattlePhase.MainPhase && this.parent.PlayerId.equals(this.GetBattleScene().curActionPlayerId)) {
            if (this.areaType == DtEnum_1.DtAreaType.HAND) {
                if (this.GetBattleScene().currentCost - this.GetCardPlayCost() >= -10) {
                    if (this.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
                        if (this.parent.PlayerHasBuff(DtEnum_1.DtBuffType.MAGIC_CARD_BE_PROHIBIT_USE)) {
                            return false;
                        }
                        if (this.HasBuff(DtEnum_1.DtBuffType.MAGIC_CARD_USE_IGNORE_COLOR_CONDITION)) {
                            return true;
                        }
                        let cfg = this.cardCfg;
                        for (let i = 0; i < cfg.color.length; i++) {
                            let hatchCard = null;
                            if (this.parent.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).CardCount()) {
                                hatchCard = this.parent.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).cards[0];
                            }
                            if (hatchCard == null || hatchCard.ColorIs(cfg.color[i]) == false) {
                                if (this.parent.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).CheckWithCondition((card) => {
                                    if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.Role)) {
                                        return card.ColorIs(cfg.color[i]);
                                    }
                                    return false;
                                }) == false) {
                                    return false;
                                }
                            }
                        }
                    }
                    else {
                        if (this.parent.PlayerHasBuff(DtEnum_1.DtBuffType.PLAYER_BATTLE_AREA_IN_LIMIT)) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    }
    CardCanEvo() {
        if (this.GetBattleScene().battleState == DtEnum_1.DtBattlePhase.MainPhase && this.parent.PlayerId.equals(this.GetBattleScene().curActionPlayerId)) {
            if (this.areaType == DtEnum_1.DtAreaType.HAND) {
                return this.parent.CheckCanEvoCard(this);
            }
        }
        return false;
    }
    CardCanEvoThis(evoCard) {
        if (evoCard.areaType == DtEnum_1.DtAreaType.HAND) {
            if (evoCard.parent == this.parent) {
                if (this.areaType == DtEnum_1.DtAreaType.BATTLE_AREA || this.areaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH) {
                    if (this.HasBuff(DtEnum_1.DtBuffType.IS_TOKEN)) {
                        return false;
                    }
                    let serCost = evoCard.CheckCanEvoWithEffect(this);
                    if (serCost >= 0) {
                        return true;
                    }
                    else if (serCost == -1) {
                        return false;
                    }
                    else {
                        if (this.CheckDigimonCanEvo(evoCard)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    CheckCanEvoWithEffect(orCard) {
        if (this.cardInHandData && this.cardInHandData.CardSpecEvo) {
            let specs = this.cardInHandData.CardSpecEvo;
            for (let i = 0; i < specs.length; i++) {
                if (specs[i].CardIID.equals(orCard.uid)) {
                    return specs[i].Cost;
                }
            }
        }
        return -2;
    }
    CheckDigimonCanEvo(evo) {
        let cfg = evo.cardCfg;
        if (cfg.card_special_evo_condition != null) {
            for (let i = 0; i < cfg.card_special_evo_condition.length; i++) {
                let speccfg = cfg.card_special_evo_condition[i];
                let cost = cfg.card_special_evo_condition[i].cost;
                if (speccfg.name != DtCardDigimonType_1.DtCardDigimonType.None) {
                    if (this.NameIs(speccfg.name, true) == false) {
                        cost = -1;
                    }
                }
                if (speccfg.level != 0) {
                    if (this.cardCfg.lv != speccfg.level) {
                        cost = -1;
                    }
                }
                if (speccfg.color != DtEnum_1.DtCardColor.None) {
                    if (this.ColorIs(speccfg.color) == false) {
                        cost = -1;
                    }
                }
                if (speccfg.feature != DtCardDigimonType_1.DtCardDigimonType.None) {
                    if (this.FeatureIs(speccfg.feature) == false) {
                        cost = -1;
                    }
                }
                if (speccfg.includename != DtCardDigimonType_1.DtCardDigimonType.None) {
                    if (this.NameIs(speccfg.includename) == false) {
                        cost = -1;
                    }
                }
                if (cost != -1) {
                    return true;
                }
            }
        }
        if (cfg.card_evo_condition != null) {
            for (let i = 0; i < cfg.card_evo_condition.length; i++) {
                if (this.ColorIs(cfg.card_evo_condition[i].color)) {
                    if (this.cardCfg.lv == cfg.card_evo_condition[i].lv) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    CardCanAttackDefense() {
        if (this.CardCanAttack() == false) {
            return false;
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_PLAYER)) {
            return false;
        }
        return true;
    }
    CardCanAttackMonster() {
        if (this.CardCanAttack() == false) {
            return false;
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_MONSTER)) {
            return false;
        }
        let opbattle = this.parent.GetOppPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
        if (opbattle.length == 0) {
            return false;
        }
        let canAttack = false;
        for (let i = 0; i < opbattle.length; i++) {
            if (opbattle[i].CanBeAttack(this)) {
                canAttack = true;
                break;
            }
        }
        return canAttack;
    }
    CanBeAttack(atkCard) {
        if (this.areaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return false;
        }
        if (atkCard.areaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return false;
        }
        if (this.parent == atkCard.parent) {
            return false;
        }
        if (atkCard.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK_MONSTER)) {
            return false;
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_BE_ATTACK)) {
            return false;
        }
        if (this.sData.CardBattleState == protoMsg_1.DcgProto.E_CARD_BATTLE_STATE.CBS_ACTIVATE) {
            if (atkCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_ACTIVATE_DIGIMON) == false) {
                if (atkCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON)) {
                    if (this.GetCardOriListCount() > 0) {
                        return false;
                    }
                }
                else if (atkCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_LV_LQ_4_ACTIVATE_DIGIMON)) {
                    if (this.GetCardLv() > 4) {
                        return false;
                    }
                }
                else if (atkCard.HasBuff(DtEnum_1.DtBuffType.ATTACK_ORIGIN_LESS_THEN_ACTIVATE_DIGIMON)) {
                    if (this.GetCardOriListCount() > atkCard.GetCardOriListCount()) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    }
    GetCardOriListCount() {
        if (this.sData.EvoOriginPrevCardIID == null || this.sData.EvoOriginPrevCardIID.toNumber() == 0) {
            return 0;
        }
        let cards = this.GetOriginDigimonList();
        if (cards.length == 0) {
            return 0;
        }
        else {
            return cards.length;
        }
    }
    CardCanAttack() {
        let battleScene = this.GetBattleScene();
        if (battleScene.battleState != DtEnum_1.DtBattlePhase.MainPhase) {
            return false;
        }
        if (this.parent.PlayerId.equals(battleScene.curActionPlayerId) == false) {
            return false;
        }
        if (this.areaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
            return false;
        }
        if (this.CardTypeIs(DtEnum_1.DtCardType.Monster) == false) {
            return false;
        }
        if (Number(this.sData.CardBattleState) != DtEnum_1.DtCardBattleState.Activate) {
            return false;
        }
        if (this.sData.CardSummonRound == battleScene.curRound) {
            if (this.HasBuff(DtEnum_1.DtBuffType.Quick_Attack_Digimon) == false) {
                return false;
            }
        }
        if (this.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ATTACK)) {
            return false;
        }
        return true;
    }
    CheckEffectInBattle() {
        if (this.cardInBattleData && this.cardInBattleData.CanActivateEffects) {
            let effs = this.cardInBattleData.CanActivateEffects;
            for (let i = 0; i < effs.length; i++) {
                if (effs[i] == DtEffectType_1.DtEffectType.OnUseEffect) {
                    return true;
                }
                else if (effs[i] == DtEffectType_1.DtEffectType.OnDelayUseEffect) {
                    return true;
                }
            }
        }
        return false;
    }
    CheckEffectInHand() {
        if (this.cardInHandData && this.cardInHandData.CanActivateEffects) {
            let effs = this.cardInHandData.CanActivateEffects;
            for (let i = 0; i < effs.length; i++) {
                if (effs[i] == DtEffectType_1.DtEffectType.OnUseEffect) {
                    return true;
                }
            }
        }
        return false;
    }
    CheckFusionInHand() {
        if (this.cardInHandData && this.cardInHandData.CanActivateEffects) {
            let effs = this.cardInHandData.CanActivateEffects;
            for (let i = 0; i < effs.length; i++) {
                if (effs[i] == DtEffectType_1.DtEffectType.PlayerFusion) {
                    return true;
                }
            }
        }
        return false;
    }
    SetActivateEffectInCurrentRound(effectid) {
        for (let i = 0; i < this.activateEffectDatas.length; i++) {
            if (this.activateEffectDatas[i].effectId == effectid) {
                this.activateEffectDatas[i].effectRound = this.parent.GetRoot().curRound;
                return;
            }
        }
        let d = new LgCardActivateEffectData();
        d.effectId = effectid;
        d.effectRound = this.parent.GetRoot().curRound;
        this.activateEffectDatas.push(d);
    }
    HasActivateEffectInCurrentRound(effectid) {
        for (let i = 0; i < this.activateEffectDatas.length; i++) {
            if (this.activateEffectDatas[i].effectId == effectid) {
                if (this.activateEffectDatas[i].effectRound == this.parent.GetRoot().curRound) {
                    return true;
                }
            }
        }
        return false;
    }
    GetCardEffectFreLimit(carduid, effectid) {
        if (this.cardInBattleData == null || this.cardInBattleData.EffectInfos == null) {
            return true;
        }
        for (let i = 0; i < this.cardInBattleData.EffectInfos.length; i++) {
            let info = this.cardInBattleData.EffectInfos[i];
            if (info.CardIID) {
                if (info.CardIID.equals(carduid)) {
                    if (info.EffectId == effectid && info.param == 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    SetAI() {
        let gid = this.parent.ai_group_id;
        let cardai = _Dcg_1.gCfg.aiDeckCfg.GetCardAI(gid, this.cardCfg.id);
        if (cardai && cardai.length > 0) {
            this.AITrees = new Array();
            try {
                for (let i = 0; i < cardai.length; i++) {
                    let cls = require("../ailogic/Config/AI/" + "AICfg_" + cardai[i])?.default;
                    if (cls) {
                        let ai = new cls();
                        if (ai) {
                            let aitree = ai.GetAITreeRoot(this.parent.GetRoot(), this.parent.PlayerId);
                            aitree.aiCardRoot = this;
                            if (cardai[i].endsWith("evo")) {
                                if (this.AIEvo == null) {
                                    this.AIEvo = new Array();
                                }
                                this.AIEvo.push(aitree);
                            }
                            else if (cardai[i].endsWith("attack")) {
                                if (this.AIAttack == null) {
                                    this.AIAttack = new Array();
                                }
                                this.AIAttack.push(aitree);
                            }
                            else if (cardai[i].endsWith("effect")) {
                                this.AIChooseAI = aitree;
                            }
                            else {
                                this.AITrees.push(aitree);
                            }
                        }
                    }
                }
            }
            catch (error) {
                _Dcg_1.gLog.err(error);
            }
        }
    }
    AIEvaluate() {
        let cammand = null;
        if (this.AITrees && this.AITrees.length > 0) {
            for (let i = 0; i < this.AITrees.length; i++) {
                let c = this.AITrees[i].Evaluate(null);
                cammand = this.AITrees[i].GetHigPriorityCommand(cammand);
            }
        }
        if (this.AIEvo && this.AIEvo.length > 0) {
            if (this.CardCanEvo()) {
                let selfCards = this.parent.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                let cards = new Array();
                for (let i = 0; i < selfCards.length; i++) {
                    if (selfCards[i].CardCanEvoThis(this)) {
                        cards.push(selfCards[i]);
                    }
                }
                for (let i = 0; i < this.AIEvo.length; i++) {
                    cards.forEach((target) => {
                        this.AIEvo[i].Evaluate(null, target);
                        cammand = this.AIEvo[i].GetHigPriorityCommand(cammand);
                    });
                }
            }
        }
        if (this.AIAttack && this.AIAttack.length > 0) {
            if (this.CardCanAttack()) {
                let opcards = this.parent.GetOppPlayer().GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
                let cards = new Array();
                for (let i = 0; i < opcards.length; i++) {
                    if (opcards[i].CanBeAttack(this)) {
                        cards.push(opcards[i]);
                    }
                }
                for (let i = 0; i < this.AIAttack.length; i++) {
                    cards.forEach((target) => {
                        this.AIAttack[i].Evaluate(null, target);
                        cammand = this.AIAttack[i].GetHigPriorityCommand(cammand);
                    });
                }
            }
        }
        if (this.AICheckOnceTree && this.AICheckOnceTree.length > 0) {
            for (let i = 0; i < this.AICheckOnceTree.length; i++) {
                let c = this.AICheckOnceTree[i].Evaluate(null);
                cammand = this.AICheckOnceTree[i].GetHigPriorityCommand(cammand);
                if (cammand) {
                    cammand.log += this.AICheckOnceTree[i].constructor.name + "___";
                }
            }
            this.AICheckOnceTree.length = 0;
        }
        if (cammand != null) {
            if (cammand.type == ADefine_1.AICommandType.STAND_BY) {
                return null;
            }
            cammand.log += this.cardCfg.card_number;
        }
        return cammand;
    }
    SetTempAI(ai) {
        if (this.AICheckOnceTree == null) {
            this.AICheckOnceTree = new Array();
        }
        let cls = require("../ailogic/Config/AI/" + "AICfg_" + ai)?.default;
        if (cls) {
            let ai = new cls();
            if (ai) {
                let aitree = ai.GetAITreeRoot(this.parent.GetRoot(), this.parent.PlayerId);
                aitree.aiCardRoot = this;
                this.AICheckOnceTree.push(aitree);
            }
        }
    }
    GetChooseAI() {
        return this.AIChooseAI;
    }
}
exports.LgCard = LgCard;
//# sourceMappingURL=LgCard.js.map