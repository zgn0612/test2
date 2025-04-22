"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmBaseMachine_1 = require("../Base/DtFsmBaseMachine");
const DtFsmUseCard_End_1 = require("./states/DtFsmUseCard_End");
const DtFsmUseCard_Init_1 = require("./states/DtFsmUseCard_Init");
const DtFsmUseCard_Start_1 = require("./states/DtFsmUseCard_Start");
const DtFsmUseCard_UseCard_Digimon_1 = require("./states/DtFsmUseCard_UseCard_Digimon");
const DtFsmUseCard_UseCard_Magic_1 = require("./states/DtFsmUseCard_UseCard_Magic");
const DtFsmUseCard_UseCard_Magic_process_move_gy_1 = require("./states/DtFsmUseCard_UseCard_Magic_process_move_gy");
class DtFsmUseCard extends DtFsmBaseMachine_1.DtFsmBaseMachine {
    player;
    card;
    useWhere;
    useCost;
    onEffect;
    useReason;
    stateActiveToBattle = true;
    cardPlayIndex = -1;
    changeCost = 0;
    forceSetCost = -1;
    InitAddStates() {
        this.AddState(DtFsmUseCard_Init_1.DtFsmUseCard_Init);
        this.AddState(DtFsmUseCard_Start_1.DtFsmUseCard_Start);
        this.AddState(DtFsmUseCard_UseCard_Digimon_1.DtFsmUseCard_UseCard_Digimon);
        this.AddState(DtFsmUseCard_UseCard_Magic_1.DtFsmUseCard_UseCard_Magic);
        this.AddState(DtFsmUseCard_UseCard_Magic_process_move_gy_1.DtFsmUseCard_UseCard_Magic_process_move_gy);
        this.AddState(DtFsmUseCard_End_1.DtFsmUseCard_End);
        this.SetInitState(DtFsmUseCard_Init_1.DtFsmUseCard_Init.name);
    }
    SetUseCard(caster, player, usecard, usecost, onEffect, reason) {
        this.player = player;
        this.card = usecard;
        this.useWhere = usecard.whereAreaType;
        this.useCost = usecost;
        this.onEffect = onEffect;
        this.useReason = reason;
        this.cardPlayIndex = -1;
        this.changeCost = 0;
        this.forceSetCost = -1;
        this.stateActiveToBattle = true;
        this.ChangeState(DtFsmUseCard_Start_1.DtFsmUseCard_Start.name);
        return this;
    }
    IsRunning() {
        return this.GetCurrentState().stateName != DtFsmUseCard_Init_1.DtFsmUseCard_Init.name || this.GetNextState() != null;
    }
    ForceOver() {
        this.ChangeState(DtFsmUseCard_Init_1.DtFsmUseCard_Init.name);
    }
    SetChangeCost(cost) {
        this.changeCost += cost;
    }
    ForceSetCost(cost) {
        this.forceSetCost = cost;
    }
    GetPlayCost() {
        if (this.useCost == false) {
            return 0;
        }
        let cost = this.card.GetCostWithBuff();
        let can_redeuce_cost = true;
        if (this.card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            can_redeuce_cost = this.player.roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_REDUCE_MONSTER_PLAY_COSTS) == false;
        }
        if (this.changeCost < 0) {
            if (can_redeuce_cost) {
                cost += this.changeCost;
                if (cost < 0) {
                    cost = 0;
                }
            }
        }
        else {
            cost += this.changeCost;
        }
        if (this.forceSetCost != -1) {
            cost = this.forceSetCost;
        }
        return cost;
    }
    Clear() {
        super.Clear();
    }
    ShowLog() {
        _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtFsmUseCard] log cuurent state is {0} and use card name is {1}", this.GetCurrentState().stateName, _Dcg_1.gCfg.language.GetLanguage(this.card.config?.name)));
    }
}
exports.DtFsmUseCard = DtFsmUseCard;
//# sourceMappingURL=DtFsmUseCard.js.map