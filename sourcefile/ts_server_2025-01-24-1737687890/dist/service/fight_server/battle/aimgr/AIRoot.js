"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIRoot = void 0;
const protoMsg_1 = require("../../cmn/proto/protoMsg");
const _Dcg_1 = require("../../cmn/_Dcg");
const DtcgMessageFromClient_1 = require("../dtcg/Message/DtcgMessageFromClient");
const LgBattleScene_1 = require("../ai/aibattle/LgBattleScene");
const AI_1 = require("./AI");
const ADefine_1 = require("../ai/ailogic/Atree/ADefine");
var AIRunningState;
(function (AIRunningState) {
    AIRunningState[AIRunningState["None"] = 0] = "None";
    AIRunningState[AIRunningState["Prerunning"] = 1] = "Prerunning";
    AIRunningState[AIRunningState["Execute"] = 2] = "Execute";
    AIRunningState[AIRunningState["Wait"] = 3] = "Wait";
})(AIRunningState || (AIRunningState = {}));
class AIRoot {
    aiRoom;
    uid;
    battleScene;
    state;
    tickTag;
    time = 0;
    calTime = 0;
    runningTick = 0;
    AI;
    cammand;
    constructor(uid, aiRoom) {
        this.uid = uid;
        this.aiRoom = aiRoom;
    }
    Init() {
        _Dcg_1.gLog.err("开始ai初始化");
        this.battleScene = new LgBattleScene_1.LgBattleScene();
        this.battleScene.Init(this);
        this.state = AIRunningState.None;
        this.AI = new AI_1.AI(this);
    }
    registNotifyWithFunc(scene) {
    }
    Run() {
        if (this.state == AIRunningState.Prerunning) {
            let runCount = 0;
            while (true) {
                runCount++;
                if (runCount > 10) {
                    _Dcg_1.gLog.err("[AI]  AI Run Error");
                    return;
                }
                this.RunAI();
                if (this.IsFree()) {
                    break;
                }
            }
        }
    }
    RunAI() {
        switch (this.state) {
            case AIRunningState.Prerunning:
                this.runningTick++;
                if (this.runningTick >= 1) {
                    this.state = AIRunningState.Execute;
                }
                break;
            case AIRunningState.Execute:
                this.AI.Execute();
                this.AI.ResetPData();
                this.state = AIRunningState.Wait;
                break;
            case AIRunningState.Wait:
                let msg = null;
                if (this.cammand) {
                    switch (this.cammand.type) {
                        case ADefine_1.AICommandType.JUMP_TO_NEXT_TURN:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.SetNextTurn(this.uid);
                            break;
                        case ADefine_1.AICommandType.CHOOSE_UID:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnPlayerChooseMsg(this.uid, this.cammand.list[0], -1);
                            break;
                        case ADefine_1.AICommandType.SEQ_UID:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnPlayerSeq(this.uid, this.cammand.list, -1);
                            break;
                        case ADefine_1.AICommandType.HATCH:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.SetDigiTamaHatch(this.uid);
                            break;
                        case ADefine_1.AICommandType.PLAY_CARD:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.DigimonCardUse(this.uid, this.cammand.cammandCard.uid, 0);
                            break;
                        case ADefine_1.AICommandType.ATTACK:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnDigimonBattle(this.uid, this.cammand.cammandCard.uid, this.cammand.target.uid);
                            break;
                        case ADefine_1.AICommandType.ATTCK_DEFENSE:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnDigimonAttackDefense(this.uid, this.cammand.cammandCard.uid);
                            break;
                        case ADefine_1.AICommandType.EVO:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnDigimonEvo(this.uid, this.cammand.cammandCard.uid, this.cammand.target.uid, 0);
                            break;
                        case ADefine_1.AICommandType.HatchToBattle:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.DigimonCardUse(this.uid, this.cammand.cammandCard.uid, 0);
                            break;
                        case ADefine_1.AICommandType.USE_EFFECT:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.PlayerUseDigimonInBattleEffect(this.uid, this.cammand.cammandCard.uid);
                            break;
                        case ADefine_1.AICommandType.CHOOSE_ACTIVE_EFFECT:
                            msg = DtcgMessageFromClient_1.DtcgMessageFromClient.OnPlayerActiveEffect(this.uid, this.cammand.numberList, null, -1);
                            break;
                        case ADefine_1.AICommandType.GM_STR:
                            _Dcg_1.gLog.err("ai can not run gm");
                            break;
                    }
                    if (msg != null) {
                        let req = new protoMsg_1.DcgProto.Req_Remote2TsBattle();
                        req.AccountIID = this.uid;
                        req.BattleParams = msg;
                        _Dcg_1.roomMgr.OnAIBattle(this.aiRoom.roomId, req);
                    }
                    this.state = AIRunningState.None;
                    this.cammand = null;
                }
                break;
        }
    }
    AIPrerunning(id) {
        if (this.uid.equals(id)) {
            this.state = AIRunningState.Prerunning;
            this.runningTick = 0;
        }
    }
    IsFree() {
        return this.state == AIRunningState.None;
    }
    SetCammand(cammand) {
        this.cammand = cammand;
    }
    GetAIPlayerId() {
        return this.uid;
    }
    GetBattleScene() {
        return this.battleScene;
    }
    Log() {
        if (this.battleScene) {
            this.battleScene.Log();
        }
    }
    IsWaitAI() {
        return this.battleScene.curActionPlayerId.equals(this.uid);
    }
    ClearTick() {
        if (this.tickTag) {
            clearInterval(this.tickTag);
            this.tickTag = null;
        }
    }
    Clear() {
        this.ClearTick();
        if (this.battleScene != null) {
            this.battleScene.Clear();
            this.battleScene = null;
        }
        if (this.AI) {
            this.AI.Clear();
            this.AI = null;
        }
        this.aiRoom = null;
    }
}
exports.AIRoot = AIRoot;
//# sourceMappingURL=AIRoot.js.map