"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtGlobalBuffMgr = void 0;
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
class DtGlobalBuffMgr {
    manager;
    buffList;
    playerBuffs;
    constructor(mgr) {
        this.manager = mgr;
        this.buffList = new Array();
        this.playerBuffs = new Array();
    }
    Get2ClientMessageMgr() {
        return this.manager.Get2ClientMessageMgr();
    }
    AddCardAreaBuff(buff) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i] == buff) {
                return;
            }
        }
        buff.parent = this;
        buff.SetBuffListen(this.manager);
        this.buffList.push(buff);
        this.Get2ClientMessageMgr().ClientShow(buff.caster.GetPlayer(), DtMessageData_1.ClientShowType.AddGlobalBuff, [buff.caster.uid], buff.creator.effCfgId.toString());
    }
    AddPlayerBuff(buff) {
        for (let i = 0; i < this.playerBuffs.length; i++) {
            if (this.playerBuffs[i] == buff) {
                return;
            }
        }
        buff.parent = this;
        buff.SetBuffListen(this.manager);
        this.playerBuffs.push(buff);
        this.Get2ClientMessageMgr().ClientShow(buff.caster.GetPlayer(), DtMessageData_1.ClientShowType.AddGlobalBuff, [buff.caster.uid], buff.creator.effCfgId.toString());
    }
    CheckUnusedGlobalBuff() {
        for (let i = this.buffList.length - 1; i >= 0; i--) {
            if (this.buffList[i].effectCard != null) {
                let effcard = this.buffList[i].effectCard;
                if (effcard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                    this.buffList[i].Clear();
                    this.buffList.splice(i, 1);
                }
                else if (effcard.CheckHasEffectByCreator(this.buffList[i].creator) == false) {
                    this.buffList[i].Clear();
                    this.buffList.splice(i, 1);
                }
            }
        }
        for (let i = this.playerBuffs.length - 1; i >= 0; i--) {
            if (this.playerBuffs[i].effectCard != null) {
                let effcard = this.playerBuffs[i].effectCard;
                if (effcard.whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                    this.playerBuffs[i].Clear();
                    this.playerBuffs.splice(i, 1);
                }
                else if (effcard.CheckHasEffectByCreator(this.playerBuffs[i].creator) == false) {
                    this.playerBuffs[i].Clear();
                    this.playerBuffs.splice(i, 1);
                }
            }
        }
    }
    RemoveCardBuff(buff) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i] == buff) {
                buff.Clear();
                this.buffList.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < this.playerBuffs.length; i++) {
            if (this.playerBuffs[i] == buff) {
                buff.Clear();
                this.playerBuffs.splice(i, 1);
                break;
            }
        }
    }
    CheckCardInt(card, type) {
        let num = 0;
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.CheckCanChange(this.buffList[i], card, type)) {
                if (this.buffList[i].IsAffected(card)) {
                    num += this.buffList[i].CheckCardInt(card, type);
                }
            }
        }
        return num;
    }
    CheckCanChange(buff, card, type) {
        if (type == DtEnum_1.DtBuffType.CHANGE_DP) {
            if (card.HasBuff(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP)) {
                if (buff.CheckCardInt(card, type) < 0) {
                    return false;
                }
            }
            if (card.HasBuff(DtEnum_1.DtBuffType.IMMUE_REDUCE_DP_WITH_OPPENONT)) {
                if (buff.CheckCardInt(card, type) < 0) {
                    if (buff.effectPlayer != card.GetPlayer()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    CheckBeEffectBuff(card, type, checkAffected) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].Condition(card, type)) {
                if (checkAffected) {
                    return this.buffList[i].IsAffected(card);
                }
                return true;
            }
        }
        return false;
    }
    ForEachBuffs(card, func) {
        for (let i = 0; i < this.buffList.length; i++) {
            if (this.buffList[i].Condition(card, this.buffList[i].type)) {
                if (this.buffList[i].IsAffected(card)) {
                    func(this.buffList[i].type, this.buffList[i].CheckCardInt(card, this.buffList[i].type));
                }
            }
        }
    }
    CheckPlayerBuff(player, buff) {
        for (let i = 0; i < this.playerBuffs.length; i++) {
            let t = this.playerBuffs[i].PlayerCondition(player, buff);
            if (t) {
                return true;
            }
        }
        return false;
    }
    CheckPlayerBuffInt(player, buff, card) {
        let num = 0;
        for (let i = 0; i < this.playerBuffs.length; i++) {
            num += this.playerBuffs[i].PlayerCondition_Int(player, buff, card);
        }
        return num;
    }
    GetPlayerBuff(player) {
        let buffs = new Array();
        for (let i = 0; i < this.playerBuffs.length; i++) {
            let t = this.playerBuffs[i].PlayerCondition(player, this.playerBuffs[i].type);
            if (t) {
                buffs.push(this.playerBuffs[i].type);
            }
        }
        return buffs;
    }
    GetReconnectData() {
        let buffs = new Array();
        if (this.buffList) {
            for (let i = 0; i < this.buffList.length; i++) {
                let d = new protoMsg_1.DcgProto.S_ReconnectGlobalBuff();
                d.PlayerIID = this.buffList[i].caster.GetPlayer().playerId;
                d.EffectId = this.buffList[i].creator.effCfgId;
                d.CardIID = this.buffList[i].caster.uid;
                buffs.push(d);
            }
        }
        if (this.playerBuffs) {
            for (let i = 0; i < this.playerBuffs.length; i++) {
                let d = new protoMsg_1.DcgProto.S_ReconnectGlobalBuff();
                d.PlayerIID = this.playerBuffs[i].caster.GetPlayer().playerId;
                d.EffectId = this.playerBuffs[i].creator.effCfgId;
                d.CardIID = this.playerBuffs[i].caster.uid;
                buffs.push(d);
            }
        }
        return buffs;
    }
    Clear() {
        this.buffList = null;
    }
}
exports.DtGlobalBuffMgr = DtGlobalBuffMgr;
//# sourceMappingURL=DtGlobalBuffMgr.js.map