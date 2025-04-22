"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmEvolution_Start = void 0;
const Long_1 = require("../../../../../cmn/proto/Long");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmEvolution_BaseState_1 = require("./DtFsmEvolution_BaseState");
const DtFsmEvolution_Evolution_1 = require("./DtFsmEvolution_Evolution");
const DtFsmEvolutuin_Init_1 = require("./DtFsmEvolutuin_Init");
class DtFsmEvolution_Start extends DtFsmEvolution_BaseState_1.DtFsmEvolution_BaseState {
    Enter() {
        let player = this.GetMachine().player;
        let oriCard = this.GetMachine().oriCard;
        let evoCard = this.GetMachine().evoCard;
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(player, DtMessageData_1.ClientShowType.WillEvo, [evoCard.uid, Long_1.Long.fromNumber(evoCard.config.id), oriCard.uid], "");
        if (oriCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA) {
            if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Normal) {
                let msg = new DtEventMsg_1.DtMsg_DigimonEvolution(evoCard, oriCard, this.GetMachine().GetCost(), DtEnum_1.DtEvolutionType.Normal, this.GetMachine().GetBuffSeen());
                this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardBeforeEvolution, msg);
            }
            else if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Fusion) {
                let msg = new DtEventMsg_1.DtMsg_DigimonEvolution(evoCard, oriCard, this.GetMachine().GetCost(), DtEnum_1.DtEvolutionType.Fusion, this.GetMachine().GetBuffSeen());
                msg.bottomCard = this.GetMachine().bottomCard;
                this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.CardBeforeEvolution, msg);
            }
        }
    }
    Excute() {
        if (this.GetMachine().oriCard.whereAreaType == DtEnum_1.DtAreaType.BATTLE_AREA || this.GetMachine().oriCard.whereAreaType == DtEnum_1.DtAreaType.DIGITAMA_HATCH) {
            this.GetMachine().ChangeState(DtFsmEvolution_Evolution_1.DtFsmEvolution_Evolution.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmEvolutuin_Init_1.DtFsmEvolutuin_Init.name);
        }
    }
}
exports.DtFsmEvolution_Start = DtFsmEvolution_Start;
//# sourceMappingURL=DtFsmEvolution_Start.js.map