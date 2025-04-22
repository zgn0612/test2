"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmUseCard_Start = void 0;
const Long_1 = require("../../../../../cmn/proto/Long");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEventMsg_1 = require("../../../Data/DtEventMsg");
const DtEvent_1 = require("../../../DtEvent");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmUseCard_BaseState_1 = require("./DtFsmUseCard_BaseState");
const DtFsmUseCard_UseCard_Digimon_1 = require("./DtFsmUseCard_UseCard_Digimon");
const DtFsmUseCard_UseCard_Magic_1 = require("./DtFsmUseCard_UseCard_Magic");
class DtFsmUseCard_Start extends DtFsmUseCard_BaseState_1.DtFsmUseCard_BaseState {
    stage = 0;
    Enter() {
        let player = this.GetMachine().player;
        let card = this.GetMachine().card;
        this.GetMachine().manager.Get2ClientMessageMgr().ClientShow(player, DtMessageData_1.ClientShowType.WillPlay, [card.uid, Long_1.Long.fromNumber(card.config.id)], "");
        let beforePlay = new DtEventMsg_1.DtMsg_BeforePlay(card, card.whereAreaType);
        beforePlay.fsm = this.GetMachine();
        this.GetMachine().card.OnBeforePlay(beforePlay);
        this.GetMachine().manager.FireListener(DtEvent_1.DtEventType.BeforePlay, beforePlay);
        this.stage = 0;
    }
    Excute() {
        this.stage++;
        switch (this.stage) {
            case 1:
                if (this.GetMachine().manager.RoomTypeIs(DtMessageData_1.DtRoomType.NoCost) == false) {
                    if (this.GetMachine().manager.CurCost - this.GetMachine().GetPlayCost() < -10) {
                        this.GetMachine().ForceOver();
                        return;
                    }
                }
                break;
            case 2:
                if (this.GetMachine().card.CardTypeIs(DtEnum_1.DtCardType.Magic)) {
                    this.GetMachine().ChangeState(DtFsmUseCard_UseCard_Magic_1.DtFsmUseCard_UseCard_Magic.name);
                }
                else {
                    this.GetMachine().ChangeState(DtFsmUseCard_UseCard_Digimon_1.DtFsmUseCard_UseCard_Digimon.name);
                }
                break;
        }
    }
}
exports.DtFsmUseCard_Start = DtFsmUseCard_Start;
//# sourceMappingURL=DtFsmUseCard_Start.js.map