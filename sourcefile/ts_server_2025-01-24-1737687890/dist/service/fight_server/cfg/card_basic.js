"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../battle/dtcg/Data/DtEnum");
const _Dcg_1 = require("../cmn/_Dcg");
const _baseCfg_1 = require("./_baseCfg");
;
class card_basic extends _baseCfg_1.default {
    cfgList;
    initCfg() {
        this.cfgList = [];
        for (let cfg of this.cfg_json) {
            let data = {
                id: cfg.id,
                card_number: cfg.number,
                name: cfg.name,
                color: cfg.color,
                rare: cfg.rare,
                cardType: cfg.type,
                cost: cfg.cost,
                dp: cfg.dp,
                evoCondition: cfg.evolutionid,
                specialEvoCondition: cfg.specialevolutionid,
                mainEffect: cfg.skill1,
                originEffect: cfg.skill2,
                lv: cfg.level,
                grade: cfg.form,
                attribute: cfg.state,
                digimonType: cfg.mold,
                forceDigimonType: cfg.realname1,
                extendDigimonType: cfg.realname2,
                skill_desc: cfg.skill_desc,
                compose_item_id: cfg.compose_item_id,
                compose_item_num: cfg.compose_item_num,
                decompose_item_id: cfg.decompose_item_id,
                decompose_item_num: cfg.decompose_item_num,
                alter_card: cfg.alter_card,
            };
            this.cfgList.push(data);
        }
        console.log("load card_basic ok !!! size =====>" + this.cfgList.length);
    }
    GetCfgWhitId(id) {
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                if (this.cfgList[i].id == id) {
                    let cfg = this.cfgList[i];
                    if (cfg.evoCondition != 0 && cfg.card_evo_condition == null) {
                        cfg.card_evo_condition = _Dcg_1.gCfg.card_evo_condition.GetEvoCfg(cfg.evoCondition);
                    }
                    if (cfg.specialEvoCondition != 0 && cfg.card_special_evo_condition == null) {
                        cfg.card_special_evo_condition = _Dcg_1.gCfg.card_special_evo_condition.GetEvoCfg(cfg.specialEvoCondition);
                    }
                    return cfg;
                }
            }
        }
        return null;
    }
    GetCfgWhitNumber(str) {
        let cfg = null;
        str = str.replace("-", "_");
        str = str.toUpperCase();
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                if (this.cfgList[i].card_number == str) {
                    cfg = this.cfgList[i];
                    break;
                }
            }
        }
        return cfg;
    }
    GetIdWithCardNumber(str) {
        let cardNumber = 0;
        str = str.replace("-", "_");
        str = str.toUpperCase();
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                if (this.cfgList[i].card_number == str) {
                    cardNumber = this.cfgList[i].id;
                    break;
                }
            }
        }
        return cardNumber;
    }
    GetTestJJCCard(color, isDigimon) {
        let cards = new Array;
        let card;
        if (this.cfgList) {
            for (let i = 0; i < this.cfgList.length; i++) {
                card = this.cfgList[i];
                if (this.GetISThisJJC(card.card_number)) {
                    if ((card.cardType == DtEnum_1.DtCardType.DigiTama && isDigimon == false) || (card.cardType != DtEnum_1.DtCardType.DigiTama && isDigimon)) {
                        for (let j = 0; j < card.color.length; j++) {
                            if (card.color[j] == color) {
                                cards.push(this.cfgList[i]);
                            }
                        }
                        if (card.color[0] == DtEnum_1.DtCardColor.White) {
                            if (card.id == 119111 && (color == DtEnum_1.DtCardColor.Red || color == DtEnum_1.DtCardColor.Blue))
                                cards.push(this.cfgList[i]);
                            if (card.id == 119086 && (color == DtEnum_1.DtCardColor.Red || color == DtEnum_1.DtCardColor.Blue))
                                cards.push(this.cfgList[i]);
                            if (card.id == 119092 && (color == DtEnum_1.DtCardColor.Red || color == DtEnum_1.DtCardColor.Blue))
                                cards.push(this.cfgList[i]);
                            if (card.id == 119087 && (color == DtEnum_1.DtCardColor.Black || color == DtEnum_1.DtCardColor.Purple))
                                cards.push(this.cfgList[i]);
                            if (card.id == 115084 && (color == DtEnum_1.DtCardColor.Red || color == DtEnum_1.DtCardColor.Blue))
                                cards.push(this.cfgList[i]);
                            if (card.id == 116082 && (color == DtEnum_1.DtCardColor.Black))
                                cards.push(this.cfgList[i]);
                            if (card.id == 116083 && (color == DtEnum_1.DtCardColor.Black || color == DtEnum_1.DtCardColor.Purple))
                                cards.push(this.cfgList[i]);
                        }
                    }
                }
            }
        }
        return cards;
    }
    GetISThisJJC(cardNumber) {
        if (cardNumber.startsWith("ST10")) {
            return false;
        }
        if (cardNumber.startsWith("BT1") || cardNumber.startsWith("BT2") || cardNumber.startsWith("P")) {
            return true;
        }
        if (cardNumber.startsWith("ST1") || cardNumber.startsWith("ST2") || cardNumber.startsWith("ST3")) {
            return true;
        }
        if (cardNumber.startsWith("ST4") || cardNumber.startsWith("ST5") || cardNumber.startsWith("ST6")) {
            return true;
        }
        return false;
    }
    GetOneCardAllEffectWithCardid(cardid) {
        let effects = new Array();
        let cardCfg = this.GetCfgWhitId(cardid);
        if (cardCfg == null) {
            return null;
        }
        if (cardCfg.mainEffect) {
            for (let i = 0; i < cardCfg.mainEffect.length; i++) {
                if (cardCfg.mainEffect[i] != 0) {
                    let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(cardCfg.mainEffect[i]);
                    if (skillcfg && skillcfg.number) {
                        effects.push(cardCfg.mainEffect[i]);
                    }
                }
            }
        }
        if (cardCfg.originEffect) {
            for (let i = 0; i < cardCfg.originEffect.length; i++) {
                if (cardCfg.originEffect[i] != 0) {
                    let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(cardCfg.originEffect[i]);
                    if (skillcfg && skillcfg.number) {
                        effects.push(cardCfg.originEffect[i]);
                    }
                }
            }
        }
        return effects;
    }
    GetAllSkill() {
        let arr = new Array();
        this.cfgList.forEach((v, k) => {
            if (v.alter_card > 0) {
                return;
            }
            if (v.mainEffect) {
                for (let i = 0; i < v.mainEffect.length; i++) {
                    if (v.mainEffect[i] != 0) {
                        let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(v.mainEffect[i]);
                        if (skillcfg && skillcfg.number) {
                            arr.push(v.mainEffect[i]);
                        }
                    }
                }
            }
            if (v.originEffect) {
                for (let i = 0; i < v.originEffect.length; i++) {
                    if (v.originEffect[i] != 0) {
                        let skillcfg = _Dcg_1.gCfg.card_skill.GetSkillCfgWithId(v.originEffect[i]);
                        if (skillcfg && skillcfg.number) {
                            arr.push(v.originEffect[i]);
                        }
                    }
                }
            }
        });
        return arr;
    }
}
exports.default = card_basic;
//# sourceMappingURL=card_basic.js.map