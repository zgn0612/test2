"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LgPlayer = void 0;
const protoMsg_1 = require("../../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../../cmn/_Dcg");
const DtEnum_1 = require("../../dtcg/Data/DtEnum");
const LgArea_1 = require("./LgArea");
const LgCard_1 = require("./LgCard");
class LgPlayer {
    parent;
    PlayerId;
    areaList;
    detailMsg;
    playerBuffs;
    ai_group_id;
    IsAI = false;
    playerAI;
    startRoundAI;
    constructor(parent, playerId, AI) {
        this.parent = parent;
        this.PlayerId = playerId;
        this.IsAI = AI;
        let roledata = _Dcg_1.gCfg.aiRoleCfg.GetCfgWithRoleId(this.PlayerId.toNumber());
        if (roledata) {
            try {
                this.ai_group_id = roledata.group_id;
                if (roledata.ai && roledata.ai.length > 0) {
                    for (let i = 0; i < roledata.ai.length; i++) {
                        let ainame = roledata.ai[i];
                        let cls = require("../ailogic/Config/AI/" + "AICfg_" + ainame)?.default;
                        if (cls) {
                            let ai = new cls();
                            if (ai) {
                                let aitree = ai.GetAITreeRoot(this.GetRoot(), this.PlayerId);
                                aitree.aiCardRoot = null;
                                if (ainame.endsWith("StartRound")) {
                                    this.startRoundAI = aitree;
                                }
                                else {
                                    this.playerAI = aitree;
                                }
                            }
                        }
                    }
                }
                if (roledata.new_player_battle != 0 && roledata.group_id == 0) {
                    this.ai_group_id = roledata.new_player_battle;
                }
            }
            catch (err) {
                _Dcg_1.gLog.err(err);
            }
        }
        this.areaList = new Array();
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.BATTLE_AREA));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.BROWSE));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.DECK));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.DEFENSE));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.DIGITAMA));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.DIGITAMA_HATCH));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.GLOBAL));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.GY));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.HAND));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.OTHER_EVO));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.TOKEN));
        this.areaList.push(new LgArea_1.LgArea(this, DtEnum_1.DtAreaType.WAIT));
    }
    UpdateDetail(msg) {
        let buffer = protoMsg_1.DcgProto.S_PlayerBattleDetail.encode(msg).finish();
        this.detailMsg = protoMsg_1.DcgProto.S_PlayerBattleDetail.decode(buffer);
    }
    ReconnectInit(reData) {
        this.GetArea(DtEnum_1.DtAreaType.HAND).Reconnect(reData.AreaHand);
        this.GetArea(DtEnum_1.DtAreaType.GY).Reconnect(reData.AreaGraveyard);
        this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).Reconnect(reData.AreaInBattle);
        this.GetArea(DtEnum_1.DtAreaType.OTHER_EVO).Reconnect(reData.AreaEvo);
        this.GetArea(DtEnum_1.DtAreaType.WAIT).Reconnect(reData.AreaWait);
        this.GetArea(DtEnum_1.DtAreaType.BROWSE).Reconnect(reData.AreaBrowse);
        if (reData.AreaDigitamaHatch) {
            this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).Reconnect([reData.AreaDigitamaHatch]);
        }
    }
    CreateCard(uid) {
        return new LgCard_1.LgCard(this, uid);
    }
    MoveCard(msg) {
        let fromArea = this.GetArea(Number(msg.From));
        let toArea = this.GetArea(Number(msg.To));
        let card = fromArea.PopCard(msg.CardData.CardIID);
        toArea.PushCard(card);
        card.SetData(msg.CardData, msg.CardDetail);
        return card;
    }
    UpdateCardDetail(msg) {
        let card = this.FindCard(msg.Card.CardIID);
        if (card) {
            card.SetData(msg.Card, msg.Detail);
        }
    }
    EvoCard(msg) {
        if (msg.EvolutionType == protoMsg_1.DcgProto.E_EVOLUTION_TYPE.ET_NORMAL) {
            let evoCard = this.FindCard(msg.EvoCardData.CardIID);
            if (evoCard == null) {
                _Dcg_1.gLog.err("[AI]not find evo card");
                return;
            }
            let evoArea = this.GetArea(Number(evoCard.areaType));
            let oriCard = null;
            let oriArea = this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            if (oriArea.HasCard(msg.OriginCardData.CardIID) == false) {
                oriArea = this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH);
                if (oriArea.HasCard(msg.OriginCardData.CardIID) == false) {
                    _Dcg_1.gLog.err("[AI]not find ori card");
                    return;
                }
            }
            evoCard = evoArea.PopCard(msg.EvoCardData.CardIID);
            oriArea.PushCard(evoCard);
            oriCard = oriArea.PopCard(msg.OriginCardData.CardIID);
            let oriEvoArea = this.GetArea(DtEnum_1.DtAreaType.OTHER_EVO);
            oriEvoArea.PushCard(oriCard);
            evoCard.SetData(msg.EvoCardData, msg.EvoCardDetail);
            oriCard.SetData(msg.OriginCardData, msg.OriginCardDetail);
        }
        else if (msg.EvolutionType == protoMsg_1.DcgProto.E_EVOLUTION_TYPE.ET_FUSION) {
            let evoCard = this.FindCard(msg.EvoCardData.CardIID);
            if (evoCard == null) {
                _Dcg_1.gLog.err("[AI]not find evo card");
                return;
            }
            let evoArea = this.GetArea(evoCard.areaType);
            let oriCard = null;
            let bottomCard = null;
            let battleArea = this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            if (battleArea.HasCard(msg.OriginCardData.CardIID) == false) {
                return;
            }
            if (battleArea.HasCard(msg.BottomCardData.CardIID) == false) {
                return;
            }
            evoCard = evoArea.PopCard(msg.EvoCardData.CardIID);
            battleArea.PushCard(evoCard);
            oriCard = battleArea.PopCard(msg.OriginCardData.CardIID);
            bottomCard = battleArea.PopCard(msg.BottomCardData.CardIID);
            let oriEvoArea = this.GetArea(DtEnum_1.DtAreaType.OTHER_EVO);
            oriEvoArea.PushCard(oriCard);
            oriEvoArea.PushCard(bottomCard);
            let topLastOri = oriCard.GetBottomOriginDigimon();
            if (topLastOri) {
                topLastOri.SetEvoOriginPrevCardIID(bottomCard.uid);
            }
            evoCard.SetData(msg.EvoCardData, msg.EvoCardDetail);
            oriCard.SetData(msg.OriginCardData, msg.OriginCardDetail);
            bottomCard.SetData(msg.OriginCardData, msg.OriginCardDetail);
        }
    }
    DigimonDegenerate(msg) {
        for (let i = 0; i < msg.ProcessDegenCards.length; i++) {
            let card = this.GetArea(DtEnum_1.DtAreaType.OTHER_EVO).PopCard(msg.ProcessDegenCards[i].CardIID);
            if (card) {
                if (i == msg.ProcessDegenCards.length - 1) {
                    this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).PushCard(card);
                    let btCard = this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).PopCard(msg.DegenerateCard.CardIID);
                    if (btCard) {
                        this.GetArea(DtEnum_1.DtAreaType.GY).PushCard(btCard);
                        card.sData.CardBattleState = msg.DegenerateCard.CardBattleState;
                    }
                }
                else {
                    this.GetArea(DtEnum_1.DtAreaType.GY).PushCard(card);
                }
            }
        }
    }
    UpdateBattleCardInfo(data) {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                let card = this.FindCard(data[i].CardIID);
                if (card) {
                    card.UpdateGameBattleData(data[i]);
                }
            }
        }
    }
    UpdateHandCardInfo(data) {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                let card = this.FindCard(data[i].CardIID, DtEnum_1.DtAreaType.HAND);
                if (card) {
                    card.UpdateGameHandData(data[i]);
                }
            }
        }
    }
    PlayerHasBuff(buff) {
        if (this.playerBuffs) {
            for (let i = 0; i < this.playerBuffs.length; i++) {
                if (this.playerBuffs[i] == buff) {
                    return true;
                }
            }
        }
        return false;
    }
    FindCard(id, areaType) {
        if (areaType == null) {
            for (let i = 0; i < this.areaList.length; i++) {
                let card = this.areaList[i].GetCard(id);
                if (card) {
                    return card;
                }
            }
        }
        else {
            let area = this.GetArea(areaType);
            if (area) {
                return area.GetCard(id);
            }
        }
        return null;
    }
    GetArea(aret) {
        for (let i = 0; i < this.areaList.length; i++) {
            if (this.areaList[i].type == aret) {
                return this.areaList[i];
            }
        }
    }
    CanHatch() {
        if (this.detailMsg.AreaDigitamaCount > 0 && this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).CardCount() == 0) {
            return true;
        }
        return false;
    }
    CanHatchOrHatchBattle() {
        if (this.parent.battleState == DtEnum_1.DtBattlePhase.FosterPhase) {
            if (this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).CardCount() > 0) {
                let card = this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).cards[0];
                if (card && card.GetCfgDP() > 0) {
                    return true;
                }
            }
        }
        return false;
    }
    CheckCanEvoCard(card) {
        if (this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).CardCount() > 0) {
            if (this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).cards[0].CardCanEvoThis(card)) {
                return true;
            }
        }
        if (this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).CardCount() > 0) {
            let cards = this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).cards;
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].CardCanEvoThis(card)) {
                    return true;
                }
            }
        }
        return false;
    }
    HasCardWithCardCfgId(cfgId) {
        let cards = this.GetArea(DtEnum_1.DtAreaType.HAND).cards;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].GetCfgCardId() == cfgId) {
                return true;
            }
        }
        return false;
    }
    HasCardWithCardLv(lv) {
        let cards = this.GetArea(DtEnum_1.DtAreaType.HAND).cards;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].GetCardLv() == lv) {
                return true;
            }
        }
        return false;
    }
    GetOppPlayer() {
        return this.parent.GetOppPlayer(this.PlayerId);
    }
    GetEvoTopBattlePCard(oricarduid) {
        let cards = this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).GetTheCopyCards();
        for (let i = 0; i < cards.length; i++) {
            let oriList = cards[i].GetOriginDigimonList();
            for (let j = 0; j < oriList.length; j++) {
                if (oriList[j].uid.equals(oricarduid)) {
                    return cards[i];
                }
            }
        }
        return null;
    }
    GetRoot() {
        return this.parent;
    }
    AIEvaluate(current) {
        let cmd = current;
        this.GetArea(DtEnum_1.DtAreaType.HAND).ForeachCards((card) => {
            let highCmd = card.AIEvaluate();
            if (cmd == null) {
                cmd = highCmd;
            }
            else {
                if (cmd && highCmd) {
                    if (highCmd.priority > cmd.priority) {
                        cmd = highCmd;
                    }
                }
            }
        });
        this.GetArea(DtEnum_1.DtAreaType.BATTLE_AREA).ForeachCards((card) => {
            let highCmd = card.AIEvaluate();
            if (cmd == null) {
                cmd = highCmd;
            }
            else {
                if (cmd && highCmd) {
                    if (highCmd.priority > cmd.priority) {
                        cmd = highCmd;
                    }
                }
            }
        });
        this.GetArea(DtEnum_1.DtAreaType.DIGITAMA_HATCH).ForeachCards((card) => {
            let highCmd = card.AIEvaluate();
            if (cmd == null) {
                cmd = highCmd;
            }
            else {
                if (cmd && highCmd) {
                    if (highCmd.priority > cmd.priority) {
                        cmd = highCmd;
                    }
                }
            }
        });
        return cmd;
    }
    GetPlayerAI() {
        return this.playerAI;
    }
    GetStartRoundAI() {
        return this.startRoundAI;
    }
    GetCardChooseAI(cardid) {
        let card = this.FindCard(cardid);
        if (card) {
            return card.GetChooseAI();
        }
        return null;
    }
    GetDefenseCount() {
        if (this.detailMsg) {
            return this.detailMsg.AreaDefenseCount;
        }
        return 5;
    }
}
exports.LgPlayer = LgPlayer;
//# sourceMappingURL=LgPlayer.js.map