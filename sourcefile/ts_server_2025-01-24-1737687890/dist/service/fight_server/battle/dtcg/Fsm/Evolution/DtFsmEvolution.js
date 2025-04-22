"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmEvolution = void 0;
const _Dcg_1 = require("../../../../cmn/_Dcg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtFsmBaseMachine_1 = require("../Base/DtFsmBaseMachine");
const DtFsmevolution_End_1 = require("./States/DtFsmevolution_End");
const DtFsmEvolution_Evolution_1 = require("./States/DtFsmEvolution_Evolution");
const DtFsmEvolution_Start_1 = require("./States/DtFsmEvolution_Start");
const DtFsmEvolutuin_Init_1 = require("./States/DtFsmEvolutuin_Init");
class DtFsmEvolution extends DtFsmBaseMachine_1.DtFsmBaseMachine {
    player;
    type;
    evoCard;
    oriCard;
    bottomCard;
    cost = 0;
    changeCost = 0;
    EvoOverCallBack;
    evoBuff;
    isNoCostEvo = false;
    other = 0;
    InitAddStates() {
        this.AddState(DtFsmEvolutuin_Init_1.DtFsmEvolutuin_Init);
        this.AddState(DtFsmEvolution_Start_1.DtFsmEvolution_Start);
        this.AddState(DtFsmEvolution_Evolution_1.DtFsmEvolution_Evolution);
        this.AddState(DtFsmevolution_End_1.DtFsmevolution_End);
        this.SetInitState(DtFsmEvolutuin_Init_1.DtFsmEvolutuin_Init.name);
    }
    IsRunning() {
        return this.GetCurrentState().stateName != DtFsmEvolutuin_Init_1.DtFsmEvolutuin_Init.name || this.GetNextState() != null;
    }
    SetEvo(player, evoCard, oriCard, cost) {
        this.isNoCostEvo = false;
        this.type = DtEnum_1.DtEvolutionType.Normal;
        this.player = player;
        this.evoCard = evoCard;
        this.oriCard = oriCard;
        this.cost = cost;
        this.changeCost = 0;
        this.evoBuff = null;
        this.other = 0;
        this.ChangeState(DtFsmEvolution_Start_1.DtFsmEvolution_Start.name);
    }
    SetFusionEvo(player, evoCard, topCard, bottomCard, cost) {
        this.isNoCostEvo = false;
        this.type = DtEnum_1.DtEvolutionType.Fusion;
        this.player = player;
        this.evoCard = evoCard;
        this.oriCard = topCard;
        this.bottomCard = bottomCard;
        this.cost = cost;
        this.changeCost = 0;
        this.evoBuff = null;
        this.other = 0;
        this.ChangeState(DtFsmEvolution_Start_1.DtFsmEvolution_Start.name);
    }
    SetNoCost() {
        this.isNoCostEvo = true;
    }
    SetChangeCost(cost) {
        this.changeCost += cost;
    }
    SetCost(cost) {
        this.cost = cost;
    }
    GetCost() {
        if (this.isNoCostEvo) {
            return 0;
        }
        if (this.evoCard.GetPlayer().roundData.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_REDECE_EVO_COST)) {
            return this.cost;
        }
        let result = this.cost;
        result += this.changeCost;
        if (result < 0) {
            result = 0;
        }
        return result;
    }
    Clear() {
        super.Clear();
        this.player = null;
        this.evoCard = null;
        this.oriCard = null;
    }
    GetBuffSeen() {
        if (this.evoBuff) {
            return this.evoBuff.SeenData;
        }
        return null;
    }
    ShowLog() {
        _Dcg_1.gLog.err(_Dcg_1.gFun.formatString("[DtFsmEvolution] log cuurent state is {0} and ori name is {1} evo name is {2}", this.GetCurrentState().stateName, _Dcg_1.gCfg.language.GetLanguage(this.oriCard.config?.name), _Dcg_1.gCfg.language.GetLanguage(this.evoCard.config?.name)));
    }
}
exports.DtFsmEvolution = DtFsmEvolution;
//# sourceMappingURL=DtFsmEvolution.js.map