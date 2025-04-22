"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtEvent = exports.DtEventType = void 0;
class DtEventObj {
    caller;
    handle;
}
var DtEventType;
(function (DtEventType) {
    DtEventType[DtEventType["CardOnPlay"] = 0] = "CardOnPlay";
    DtEventType[DtEventType["WhenAttacking"] = 1] = "WhenAttacking";
    DtEventType[DtEventType["BlockerSelect"] = 2] = "BlockerSelect";
    DtEventType[DtEventType["PhaseActive"] = 3] = "PhaseActive";
    DtEventType[DtEventType["RoundStart"] = 4] = "RoundStart";
    DtEventType[DtEventType["RoundOver"] = 5] = "RoundOver";
    DtEventType[DtEventType["AreaCardsChange"] = 6] = "AreaCardsChange";
    DtEventType[DtEventType["CardBeforeEvolution"] = 7] = "CardBeforeEvolution";
    DtEventType[DtEventType["CardEvolution"] = 8] = "CardEvolution";
    DtEventType[DtEventType["BeforeAtkJudge"] = 9] = "BeforeAtkJudge";
    DtEventType[DtEventType["AfterAtkJudge"] = 10] = "AfterAtkJudge";
    DtEventType[DtEventType["CardBeforeDActEffect"] = 11] = "CardBeforeDActEffect";
    DtEventType[DtEventType["CardOnActEffect"] = 12] = "CardOnActEffect";
    DtEventType[DtEventType["CardChangeBattleState"] = 13] = "CardChangeBattleState";
    DtEventType[DtEventType["BattleOver"] = 14] = "BattleOver";
    DtEventType[DtEventType["AttackOver"] = 15] = "AttackOver";
    DtEventType[DtEventType["CardInBattleArea"] = 16] = "CardInBattleArea";
    DtEventType[DtEventType["BattleFieldInfoChange"] = 17] = "BattleFieldInfoChange";
    DtEventType[DtEventType["BlockerSelectOver"] = 18] = "BlockerSelectOver";
    DtEventType[DtEventType["OnDiscardEvoOrigin"] = 19] = "OnDiscardEvoOrigin";
    DtEventType[DtEventType["BeforeCardChangeCost"] = 20] = "BeforeCardChangeCost";
    DtEventType[DtEventType["BrforeAbsorbEffect"] = 21] = "BrforeAbsorbEffect";
    DtEventType[DtEventType["PhaseActiveOver"] = 22] = "PhaseActiveOver";
    DtEventType[DtEventType["PlayerUseCard"] = 23] = "PlayerUseCard";
    DtEventType[DtEventType["AttackDeclare"] = 24] = "AttackDeclare";
    DtEventType[DtEventType["CardOnHatchPlay"] = 25] = "CardOnHatchPlay";
    DtEventType[DtEventType["CardActivateEffect"] = 26] = "CardActivateEffect";
    DtEventType[DtEventType["CardMove"] = 27] = "CardMove";
    DtEventType[DtEventType["MainPhaseStart"] = 28] = "MainPhaseStart";
    DtEventType[DtEventType["BuffRoundOver"] = 29] = "BuffRoundOver";
    DtEventType[DtEventType["ChainEffectOver"] = 30] = "ChainEffectOver";
    DtEventType[DtEventType["PrecalculateCost"] = 31] = "PrecalculateCost";
    DtEventType[DtEventType["BeforePlay"] = 32] = "BeforePlay";
    DtEventType[DtEventType["WhenOppAttacking"] = 33] = "WhenOppAttacking";
})(DtEventType = exports.DtEventType || (exports.DtEventType = {}));
class DtEvent {
    listenerMap = new Map();
    AddListen(type, caller, func) {
        let list = this.listenerMap.get(type);
        if (list == undefined) {
            list = new Array();
            this.listenerMap.set(type, list);
        }
        let event = new DtEventObj();
        event.caller = caller;
        event.handle = func;
        list.push(event);
    }
    FireListen(type, msg) {
        let list = this.listenerMap.get(type);
        if (list && list instanceof Array) {
            for (let i = list.length - 1; i >= 0; i--) {
                list[i].handle.call(list[i].caller, msg);
            }
        }
    }
    RemoveListen(type, caller = undefined, handl = undefined) {
        let list = this.listenerMap.get(type);
        if (list && list instanceof Array) {
            if (undefined == caller) {
                this.listenerMap.delete(type);
                return;
            }
            let e = null;
            for (let i = 0; i < list.length; i++) {
                e = list[i];
                if (e.caller == caller && (undefined == handl || handl == e.handle)) {
                    list.splice(i--, 1);
                }
            }
        }
    }
    Clear() {
        this.listenerMap = null;
    }
}
exports.DtEvent = DtEvent;
//# sourceMappingURL=DtEvent.js.map