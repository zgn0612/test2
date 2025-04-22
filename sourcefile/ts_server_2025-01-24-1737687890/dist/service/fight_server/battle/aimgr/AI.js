"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
const Long_1 = require("../../cmn/proto/Long");
const protoMsg_1 = require("../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtEnum_1 = require("../dtcg/Data/DtEnum");
const ADefine_1 = require("../ai/ailogic/Atree/ADefine");
const ATemplateData_1 = require("../ai/ailogic/Atree/ATemplateData");
const AIAction_Hatch_1 = require("../ai/ailogic/Atree/ATreeCommandAction/AIAction_Hatch");
const AIAction_JumpToNextTurn_1 = require("../ai/ailogic/Atree/ATreeCommandAction/AIAction_JumpToNextTurn");
const AICon_PlayerCanHatch_1 = require("../ai/ailogic/Atree/ATreeCondition/AICon_PlayerCanHatch");
const AICtrl_Sequece_1 = require("../ai/ailogic/Atree/ATreeCtrlNode/AICtrl_Sequece");
const AtreeRoot_1 = require("../ai/ailogic/Atree/AtreeRoot");
class AI {
    root;
    pChoose;
    pDefSel;
    pOption;
    pActive;
    pIfChange;
    aiPhaseMain;
    aiPhaseForst;
    gmList;
    constructor(root) {
        this.root = root;
        this.ResetPData();
        this.aiPhaseMain = new AtreeRoot_1.AtreeRoot(this.root.GetBattleScene(), this.root.GetAIPlayerId());
        this.aiPhaseMain.AddChildNode(new AIAction_JumpToNextTurn_1.AIAction_JumpToNextTurn(this.aiPhaseMain, 1));
        this.aiPhaseForst = new AtreeRoot_1.AtreeRoot(this.root.GetBattleScene(), this.root.GetAIPlayerId());
        this.aiPhaseForst.AddChildNode(new AIAction_JumpToNextTurn_1.AIAction_JumpToNextTurn(this.aiPhaseForst, 1));
        let nodeHatch = this.aiPhaseForst.AddChildNode(new AICtrl_Sequece_1.AICtrl_Sequece(this.aiPhaseForst));
        nodeHatch.AddChildNode(new AICon_PlayerCanHatch_1.AICon_PlayerCanHatch(this.aiPhaseForst));
        nodeHatch.AddChildNode(new AIAction_Hatch_1.AIAction_Hatch(this.aiPhaseForst, 2));
    }
    RunRoundStartAI() {
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let startRoundAI = player.GetStartRoundAI();
        if (startRoundAI) {
            let gmData = new ATemplateData_1.AIRunGmCmds();
            startRoundAI.Evaluate(gmData);
            this.gmList = gmData;
        }
    }
    Execute() {
        if (this.pIfChange != null) {
            let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
            let ai = player.GetPlayerAI();
            if (ai) {
                ai.Evaluate(this.pIfChange);
            }
            let cmd = new ADefine_1.AIServerCammand();
            cmd.type = ADefine_1.AICommandType.CHOOSE_UID;
            cmd.priority = 1000;
            cmd.list.push(Long_1.Long.fromNumber(this.pIfChange.aidecide));
            this.root.SetCammand(cmd);
            return;
        }
        if (this.pChoose != null) {
            this.ExecutePlayerChooseAI();
            return;
        }
        if (this.pDefSel != null) {
            this.ExecuteDefenseSelectAI();
            return;
        }
        if (this.pOption != null) {
            this.ExecuteSelectOptionAI();
            return;
        }
        if (this.pActive != null) {
            this.ExecutePlayerSelectActivateAI();
            return;
        }
        if (this.gmList && this.gmList.cmds.length > 0) {
            let gmstr = this.gmList.cmds.shift();
            gmstr = "PGM:" + gmstr;
            let cmd = new ADefine_1.AIServerCammand();
            cmd.type = ADefine_1.AICommandType.GM_STR;
            cmd.priority = 2000;
            cmd.gmStr = gmstr;
            this.root.SetCammand(cmd);
            return;
        }
        if (this.root.GetBattleScene().battleState == DtEnum_1.DtBattlePhase.FosterPhase) {
            this.ExecutePhaseForsterAI();
            return;
        }
        if (this.root.GetBattleScene().battleState == DtEnum_1.DtBattlePhase.MainPhase) {
            this.ExecutePhaseMainAI();
            return;
        }
        _Dcg_1.gLog.err("no ai running !!!!");
    }
    ExecutePhaseForsterAI() {
        this.aiPhaseForst.Evaluate(null);
        let defaultCmd = this.aiPhaseForst.GetHigPriorityCommand(null);
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let lastCmd = player.AIEvaluate(defaultCmd);
        this.root.SetCammand(lastCmd);
    }
    ExecutePhaseMainAI() {
        this.aiPhaseMain.Evaluate(null);
        let defaultCmd = this.aiPhaseMain.GetHigPriorityCommand(null);
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let lastCmd = player.AIEvaluate(defaultCmd);
        this.root.SetCammand(lastCmd);
    }
    ExecutePlayerChooseAI() {
        let cards = this.pChoose.CheckCards;
        if (this.pChoose.EffectOriginInfo && this.pChoose.EffectOriginInfo.EffectId == -1) {
            if (this.pChoose.EffectOriginInfo.Index == DtEnum_1.DtActionEffectType.Degenerate) {
                let lastCard = cards[cards.length - 1];
                let lastCfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(lastCard.CfgId);
                if (lastCfg) {
                    for (let i = 0; i < cards.length - 1; i++) {
                        let cfg = _Dcg_1.gCfg.card_basic.GetCfgWhitId(cards[i].CfgId);
                        if (cfg) {
                            if (cfg.lv < lastCfg.lv) {
                                lastCard = cards[i];
                                lastCfg = cfg;
                            }
                        }
                    }
                }
                let deCommand = new ADefine_1.AIServerCammand();
                deCommand.priority = 1;
                deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
                deCommand.list.push(lastCard.CardIID);
                this.root.SetCammand(deCommand);
                return;
            }
        }
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let cardAI = player.FindCard(this.pChoose.EffectOriginInfo.CardIID)?.GetChooseAI();
        if (cardAI && cards.length > 0) {
            let copy = new Array();
            for (let i = 0; i < cards.length; i++) {
                copy.push(cards[i]);
            }
            let tdata = new ATemplateData_1.AIChooseData();
            tdata.choose = this.pChoose;
            tdata.data = copy;
            tdata.cancel = false;
            cardAI.Evaluate(tdata);
            if (copy.length > 0) {
                cards = copy;
            }
            if (tdata.cancel) {
                let deCommand = new ADefine_1.AIServerCammand();
                deCommand.priority = 1;
                deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
                deCommand.list.push(Long_1.Long.fromNumber(0));
                this.root.SetCammand(deCommand);
                return;
            }
        }
        let deCmd = this.GetFirstAiChoose(cards);
        this.root.SetCammand(deCmd);
    }
    GetFirstAiChoose(checkCard) {
        let deCommand = new ADefine_1.AIServerCammand();
        deCommand.priority = 1;
        switch (this.pChoose.Compare) {
            case protoMsg_1.DcgProto.E_COMPARE.C_EQUAL_CARD_COUNT:
                if (this.pChoose.ChooseNums == 1) {
                    deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
                    if (checkCard && checkCard.length > 0) {
                        deCommand.list.push(checkCard[0].CardIID);
                    }
                    else {
                        deCommand.list.push(Long_1.Long.fromNumber(0));
                    }
                }
                else {
                    deCommand.type = ADefine_1.AICommandType.SEQ_UID;
                    for (let i = 0; i < this.pChoose.ChooseNums; i++) {
                        if (checkCard[i]) {
                            deCommand.list.push(checkCard[i].CardIID);
                        }
                    }
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_SORT:
                deCommand.type = ADefine_1.AICommandType.SEQ_UID;
                for (let i = 0; i < checkCard.length; i++) {
                    deCommand.list.push(checkCard[i].CardIID);
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_LESS_THAN_OR_EQUAL:
                deCommand.type = ADefine_1.AICommandType.SEQ_UID;
                for (let i = 0; i < this.pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        deCommand.list.push(checkCard[i].CardIID);
                    }
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.GREATE_EQUAL:
                deCommand.type = ADefine_1.AICommandType.SEQ_UID;
                for (let i = 0; i < this.pChoose.ChooseNums; i++) {
                    if (checkCard[i]) {
                        deCommand.list.push(checkCard[i].CardIID);
                    }
                }
                break;
            case protoMsg_1.DcgProto.E_COMPARE.C_OVER_ATTACK:
                deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
                if (checkCard && checkCard.length > 0) {
                    deCommand.list.push(checkCard[0].CardIID);
                }
                else {
                    deCommand.list.push(Long_1.Long.fromNumber(0));
                }
                break;
        }
        return deCommand;
    }
    ExecuteDefenseSelectAI() {
        let cards = this.pDefSel.ChooseDefenseCards;
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let ai = player.GetPlayerAI();
        let idx = Long_1.Long.fromNumber(0);
        if (ai && cards.length > 0) {
            let copy = new Array();
            for (let i = 0; i < cards.length; i++) {
                copy.push(cards[i]);
            }
            let data = new ATemplateData_1.AIDefenseChoose();
            data.data = copy;
            ai.Evaluate(data);
            if (copy.length > 0) {
                idx = copy[0].CardIID;
            }
        }
        this.root.SetCammand(this.GetDefaultDefenseSelect(idx));
    }
    GetDefaultDefenseSelect(idx) {
        let deCommand = new ADefine_1.AIServerCammand();
        deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
        deCommand.priority = 1;
        deCommand.list.push(idx);
        return deCommand;
    }
    ExecuteSelectOptionAI() {
        let idx = 0;
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let cardAI = player.FindCard(this.pOption.EffectOriginInfo.CardIID)?.GetChooseAI();
        if (cardAI) {
            let tdata = new ATemplateData_1.AIChooseOption();
            tdata.option = this.pOption;
            tdata.set = 0;
            cardAI.Evaluate(tdata);
            idx = tdata.set;
        }
        this.root.SetCammand(this.GetDefaultOption(idx));
    }
    GetDefaultOption(num) {
        let deCommand = new ADefine_1.AIServerCammand();
        deCommand.type = ADefine_1.AICommandType.CHOOSE_UID;
        deCommand.priority = 1;
        deCommand.list.push(Long_1.Long.fromNumber(num));
        return deCommand;
    }
    ExecutePlayerSelectActivateAI() {
        let player = this.root.GetBattleScene().GetPlayer(this.root.GetAIPlayerId());
        let ai = player.GetPlayerAI();
        let idx = this.pActive.EffectActivate[0].EffectIndex;
        if (ai) {
            let copy = new Array();
            for (let i = 0; i < this.pActive.EffectActivate.length; i++) {
                copy.push(this.pActive.EffectActivate[i]);
            }
            let data = new ATemplateData_1.AIEffectActivateData();
            data.data = copy;
            ai.Evaluate(data);
            if (copy.length > 0) {
                for (let i = 0; i < this.pActive.EffectActivate.length; i++) {
                    if (this.pActive.EffectActivate[i] == copy[0]) {
                        idx = this.pActive.EffectActivate[i].EffectIndex;
                        break;
                    }
                }
            }
        }
        this.root.SetCammand(this.GetEffectActivateCmd(idx));
    }
    GetEffectActivateCmd(idx) {
        let deCommand = new ADefine_1.AIServerCammand();
        deCommand.type = ADefine_1.AICommandType.CHOOSE_ACTIVE_EFFECT;
        deCommand.priority = 1;
        deCommand.numberList.push(idx);
        return deCommand;
    }
    SetPlayerChooseData(data) {
        this.pChoose = data;
    }
    SetPlayerDefenseSelectData(data) {
        this.pDefSel = data;
    }
    SetPlayerSelectOptionsData(data) {
        this.pOption = data;
    }
    SetPlayerSelectEffectActivateChooseData(data) {
        this.pActive = data;
    }
    SetPlayerIfChangeCards() {
        this.pIfChange = new ATemplateData_1.AIBattleStartIfChangeCards();
    }
    ResetPData() {
        this.pChoose = null;
        this.pDefSel = null;
        this.pOption = null;
        this.pActive = null;
        this.pIfChange = null;
    }
    Clear() {
    }
}
exports.AI = AI;
//# sourceMappingURL=AI.js.map