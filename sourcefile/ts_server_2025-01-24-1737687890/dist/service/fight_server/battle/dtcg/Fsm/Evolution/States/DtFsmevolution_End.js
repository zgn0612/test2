"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmevolution_End = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtFsmEvolution_BaseState_1 = require("./DtFsmEvolution_BaseState");
const DtFsmEvolutuin_Init_1 = require("./DtFsmEvolutuin_Init");
class DtFsmevolution_End extends DtFsmEvolution_BaseState_1.DtFsmEvolution_BaseState {
    Enter() {
        if (this.GetMachine().evoCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            this.GetMachine().evoCard.OnInBattleArea();
            this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BattleFieldInfoChange, null);
        }
    }
    Excute() {
        if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Normal) {
            let msg = new DtEventMsg_1.DtMsg_DigimonEvolution(this.GetMachine().evoCard, this.GetMachine().oriCard, this.GetMachine().GetCost(), DtEnum_1.DtEvolutionType.Normal, this.GetMachine().GetBuffSeen());
            if (this.GetMachine().evoCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
                this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardEvolution, msg);
                if (this.GetMachine().evoCard.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ACTIVATE_EVO_EFFECT) == false) {
                    this.GetMachine().evoCard.OnEvolution(msg);
                }
            }
        }
        else if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Fusion) {
            let msg = new DtEventMsg_1.DtMsg_DigimonEvolution(this.GetMachine().evoCard, this.GetMachine().oriCard, this.GetMachine().GetCost(), DtEnum_1.DtEvolutionType.Fusion, this.GetMachine().GetBuffSeen());
            msg.bottomCard = this.GetMachine().bottomCard;
            if (this.GetMachine().evoCard.HasBuff(DtEnum_1.DtBuffType.CAN_NOT_ACTIVATE_EVO_EFFECT) == false) {
                this.GetMachine().evoCard.OnEvolution(msg);
            }
            this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardEvolution, msg);
        }
        this.GetMachine().ChangeState(DtFsmEvolutuin_Init_1.DtFsmEvolutuin_Init.name);
        if (this.GetMachine().EvoOverCallBack != null) {
            this.GetMachine().EvoOverCallBack(this.GetMachine());
            this.GetMachine().EvoOverCallBack = null;
        }
    }
}
exports.DtFsmevolution_End = DtFsmevolution_End;
//# sourceMappingURL=DtFsmevolution_End.js.map